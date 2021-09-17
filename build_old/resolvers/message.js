"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const apollo_server_1 = require("apollo-server");
const apollo_server_2 = require("../utils/apollo-server");
const Subscriptions_1 = require("../constants/Subscriptions");
const Query = {
    /**
     * Gets user's specific conversation
     *
     * @param {string} authUserId
     * @param {string} userId
     */
    getMessages: async (root, { authUserId, userId }, { Message }) => {
        const specificMessage = await Message.find()
            .and([
            { $or: [{ sender: authUserId }, { receiver: authUserId }] },
            { $or: [{ sender: userId }, { receiver: userId }] },
        ])
            .populate('sender')
            .populate('receiver')
            .sort({ updatedAt: 'asc' });
        return specificMessage;
    },
    /**
     * Get users with whom authUser had a conversation
     *
     * @param {string} authUserId
     */
    getConversations: async (root, { authUserId }, { User, Message }) => {
        // Get users with whom authUser had a chat
        const users = await User.findById(authUserId).populate('messages', 'id username fullName image isOnline');
        // Get last messages with wom authUser had a chat
        const lastMessages = await Message.aggregate([
            {
                $match: {
                    $or: [
                        {
                            receiver: mongoose_1.default.Types.ObjectId(authUserId),
                        },
                        {
                            sender: mongoose_1.default.Types.ObjectId(authUserId),
                        },
                    ],
                },
            },
            {
                $sort: { createdAt: -1 },
            },
            {
                $group: {
                    _id: '$sender',
                    doc: {
                        $first: '$$ROOT',
                    },
                },
            },
            { $replaceRoot: { newRoot: '$doc' } },
        ]);
        // Attach message properties to users
        const conversations = [];
        users.messages.map((u) => {
            const user = {
                id: u.id,
                username: u.username,
                fullName: u.fullName,
                image: u.image,
                isOnline: u.isOnline,
            };
            const sender = lastMessages.find((m) => u.id === m.sender.toString());
            if (sender) {
                user.seen = sender.seen;
                user.lastMessageCreatedAt = sender.createdAt;
                user.lastMessage = sender.message;
                user.lastMessageSender = false;
            }
            else {
                const receiver = lastMessages.find((m) => u.id === m.receiver.toString());
                if (receiver) {
                    user.seen = receiver.seen;
                    user.lastMessageCreatedAt = receiver.createdAt;
                    user.lastMessage = receiver.message;
                    user.lastMessageSender = true;
                }
            }
            conversations.push(user);
        });
        // Sort users by last created messages date
        const sortedConversations = conversations.sort((a, b) => b.lastMessageCreatedAt && b.lastMessageCreatedAt.toString().localeCompare(a.lastMessageCreatedAt));
        return sortedConversations;
    },
};
const Mutation = {
    /**
     * Creates a message
     *
     * @param {string} message
     * @param {string} sender
     * @param {string} receiver
     */
    createMessage: async (root, { input: { message, sender, receiver } }, { Message, User }) => {
        let newMessage = await new Message({
            message,
            sender,
            receiver,
        }).save();
        newMessage = await newMessage.populate('sender').populate('receiver').execPopulate();
        // Publish message created event
        apollo_server_2.pubSub.publish(Subscriptions_1.MESSAGE_CREATED, { messageCreated: newMessage });
        // Check if user already had a conversation
        // if not push their ids to users collection
        const senderUser = await User.findById(sender);
        if (!senderUser.messages.includes(receiver)) {
            await User.findOneAndUpdate({ _id: sender }, { $push: { messages: receiver } });
            await User.findOneAndUpdate({ _id: receiver }, { $push: { messages: sender } });
            newMessage.isFirstMessage = true;
        }
        // Publish message created event
        apollo_server_2.pubSub.publish(Subscriptions_1.NEW_CONVERSATION, {
            newConversation: {
                receiverId: receiver,
                id: senderUser.id,
                username: senderUser.username,
                fullName: senderUser.fullName,
                image: senderUser.image,
                isOnline: senderUser.isOnline,
                seen: false,
                lastMessage: newMessage.message,
                lastMessageSender: false,
                lastMessageCreatedAt: newMessage.createdAt,
            },
        });
        return newMessage;
    },
    /**
     * Updates message seen values for user
     *
     * @param {string} userId
     */
    updateMessageSeen: async (root, { input: { sender, receiver } }, { Message }) => {
        try {
            await Message.update({ receiver, sender, seen: false }, { seen: true }, { multi: true });
            return true;
        }
        catch (e) {
            return false;
        }
    },
};
const Subscription = {
    /**
     * Subscribes to message created event
     */
    messageCreated: {
        subscribe: (0, apollo_server_1.withFilter)(() => apollo_server_2.pubSub.asyncIterator(Subscriptions_1.MESSAGE_CREATED), (payload, variables) => {
            const { sender, receiver } = payload.messageCreated;
            const { authUserId, userId } = variables;
            const isAuthUserSenderOrReceiver = authUserId === sender.id || authUserId === receiver.id;
            const isUserSenderOrReceiver = userId === sender.id || userId === receiver.id;
            return isAuthUserSenderOrReceiver && isUserSenderOrReceiver;
        }),
    },
    /**
     * Subscribes to new conversations event
     */
    newConversation: {
        subscribe: (0, apollo_server_1.withFilter)(() => apollo_server_2.pubSub.asyncIterator(Subscriptions_1.NEW_CONVERSATION), (payload, variables, { authUser }) => authUser && authUser.id === payload.newConversation.receiverId),
    },
};
exports.default = { Mutation, Query, Subscription };