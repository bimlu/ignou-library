"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createApolloServer = exports.pubSub = void 0;
const apollo_server_express_1 = require("apollo-server-express");
const apollo_server_1 = require("apollo-server");
const index_1 = require("./index");
const Subscriptions_1 = require("./constants/Subscriptions");
exports.pubSub = new apollo_server_1.PubSub();
const getUserIdFromReq = (req) => {
    return new Promise((resolve, reject) => {
        (0, index_1.session)(req, {}, (err) => {
            if (err) {
                return reject(err);
            }
            if (!req.session || !req.session.passport || !req.session.passport.user) {
                return resolve(null);
            }
            try {
                return resolve(req.session.passport.user._id);
            }
            catch (err) {
                return resolve(null);
            }
        });
    });
};
const createApolloServer = (schema, resolvers, models) => {
    return new apollo_server_express_1.ApolloServer({
        typeDefs: schema,
        resolvers,
        context: async ({ req, connection }) => {
            if (connection) {
                return connection.context;
            }
            const authUser = req.user;
            return Object.assign({ authUser }, models);
        },
        subscriptions: {
            onConnect: async (connectionParams, webSocket) => {
                try {
                    const userId = await getUserIdFromReq(webSocket.upgradeReq);
                    if (userId) {
                        exports.pubSub.publish(Subscriptions_1.Subscriptions.Is_User_Online, {
                            isUserOnline: {
                                userId,
                                isOnline: true,
                            },
                        });
                    }
                    return { authUserId: userId };
                }
                catch (error) {
                    console.error(error);
                    return { authUserId: null };
                }
            },
            onDisconnect: async (webSocket, context) => {
                const ctx = await context.initPromise;
                if (ctx && ctx.authUserId) {
                    exports.pubSub.publish(Subscriptions_1.Subscriptions.Is_User_Online, {
                        isUserOnline: {
                            userId: ctx.authUserId,
                            isOnline: false,
                        },
                    });
                    await models.User.findOneAndUpdate({ _id: ctx.authUserId }, { isOnline: false });
                }
            },
        },
    });
};
exports.createApolloServer = createApolloServer;
