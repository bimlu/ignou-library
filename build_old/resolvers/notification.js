"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_1 = require("apollo-server");
const apollo_server_2 = require("../utils/apollo-server");
const Subscriptions_1 = require("../constants/Subscriptions");
const Query = {
    /**
     * Gets notifications for specific user
     *
     * @param {string} userId
     * @param {int} skip how many notifications to skip
     * @param {int} limit how many notifications to limit
     */
    getUserNotifications: async (root, { userId, skip, limit }, { Notification }) => {
        const query = { user: userId };
        const count = await Notification.where(query).countDocuments();
        const notifications = await Notification.where(query)
            .populate('author')
            .populate('user')
            .populate('follow')
            .populate({ path: 'comment', populate: { path: 'post' } })
            .populate({ path: 'like', populate: { path: 'post' } })
            .skip(skip)
            .limit(limit)
            .sort({ createdAt: 'desc' });
        return { notifications, count };
    },
};
const Mutation = {
    /**
     * Creates a new notification for user
     *
     * @param {string} userId
     * @param {string} authorId
     * @param {string} postId
     * @param {string} notificationType
     * @param {string} notificationTypeId
     */
    createNotification: async (root, { input: { userId, authorId, postId, notificationType, notificationTypeId } }, { Notification, User }) => {
        let newNotification = await new Notification({
            author: authorId,
            user: userId,
            post: postId,
            [notificationType.toLowerCase()]: notificationTypeId,
        }).save();
        // Push notification to user collection
        await User.findOneAndUpdate({ _id: userId }, { $push: { notifications: newNotification.id } });
        // Publish notification created event
        newNotification = await newNotification
            .populate('author')
            .populate('follow')
            .populate({ path: 'comment', populate: { path: 'post' } })
            .populate({ path: 'like', populate: { path: 'post' } })
            .execPopulate();
        apollo_server_2.pubSub.publish(Subscriptions_1.NOTIFICATION_CREATED_OR_DELETED, {
            notificationCreatedOrDeleted: {
                operation: 'CREATE',
                notification: newNotification,
            },
        });
        return newNotification;
    },
    /**
     * Deletes a notification
     *
     * @param {string} id
     */
    deleteNotification: async (root, { input: { id } }, { Notification, User }) => {
        let notification = await Notification.findByIdAndRemove(id);
        // Delete notification from users collection
        await User.findOneAndUpdate({ _id: notification.user }, { $pull: { notifications: notification.id } });
        // Publish notification deleted event
        notification = await notification
            .populate('author')
            .populate('follow')
            .populate({ path: 'comment', populate: { path: 'post' } })
            .populate({ path: 'like', populate: { path: 'post' } })
            .execPopulate();
        apollo_server_2.pubSub.publish(Subscriptions_1.NOTIFICATION_CREATED_OR_DELETED, {
            notificationCreatedOrDeleted: {
                operation: 'DELETE',
                notification,
            },
        });
        return notification;
    },
    /**
     * Updates notification seen values for user
     *
     * @param {string} userId
     */
    updateNotificationSeen: async (root, { input: { userId } }, { Notification }) => {
        try {
            await Notification.update({ user: userId, seen: false }, { seen: true }, { multi: true });
            return true;
        }
        catch (e) {
            return false;
        }
    },
};
const Subscription = {
    /**
     * Subscribes to notification created or deleted event
     */
    notificationCreatedOrDeleted: {
        subscribe: (0, apollo_server_1.withFilter)(() => apollo_server_2.pubSub.asyncIterator(Subscriptions_1.NOTIFICATION_CREATED_OR_DELETED), (payload, variables, { authUser }) => {
            const userId = payload.notificationCreatedOrDeleted.notification.user.toString();
            return authUser && authUser.id === userId;
        }),
    },
};
exports.default = { Query, Mutation, Subscription };
