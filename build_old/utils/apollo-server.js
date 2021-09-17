"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createApolloServer = exports.pubSub = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const apollo_server_express_1 = require("apollo-server-express");
const apollo_server_1 = require("apollo-server");
const Subscriptions_1 = require("../constants/Subscriptions");
// Export pubsub instance for publishing events
exports.pubSub = new apollo_server_1.PubSub();
/**
 * checks if client is authenticated by checking authorization key from req headers
 *
 * @param {obj} req
 */
const checkAuthorization = (token) => {
    return new Promise(async (resolve, reject) => {
        try {
            const authUser = await jsonwebtoken_1.default.verify(token, process.env.SECRET);
            resolve(authUser);
        }
        catch (err) {
            reject("Couldn't authenticate user");
        }
    });
};
/**
 * Creates an Apollo server and identifies if user is authenticated or not
 *
 * @param {obj} schema GraphQL Schema
 * @param {array} resolvers GraphQL Resolvers
 * @param {obj} models Mongoose Models
 */
const createApolloServer = (schema, resolvers, models) => {
    return new apollo_server_express_1.ApolloServer({
        typeDefs: schema,
        resolvers,
        // https://www.apollographql.com/docs/apollo-server/data/resolvers/#the-context-argument
        context: async ({ req, connection }) => {
            if (connection) {
                return connection.context;
            }
            let authUser;
            if (req.headers.authorization !== 'null') {
                try {
                    const user = await checkAuthorization(req.headers['authorization']);
                    authUser = user;
                }
                catch (err) {
                    console.log(err);
                }
            }
            return Object.assign({ authUser }, models);
        },
        subscriptions: {
            onConnect: async (connectionParams, webSocket) => {
                // Check if user is authenticated
                if (connectionParams.authorization) {
                    const user = await checkAuthorization(connectionParams.authorization);
                    // Publish user isOnline true
                    exports.pubSub.publish(Subscriptions_1.IS_USER_ONLINE, {
                        isUserOnline: {
                            userId: user.id,
                            isOnline: true,
                        },
                    });
                    // Add authUser to socket's context, so we have access to it, in onDisconnect method
                    return {
                        authUser: user,
                    };
                }
            },
            onDisconnect: async (webSocket, context) => {
                // Get socket's context
                const c = await context.initPromise;
                if (c && c.authUser) {
                    // Publish user isOnline false
                    exports.pubSub.publish(Subscriptions_1.IS_USER_ONLINE, {
                        isUserOnline: {
                            userId: c.authUser.id,
                            isOnline: false,
                        },
                    });
                    // Update user isOnline to false in DB
                    await models.User.findOneAndUpdate({ email: c.authUser.email }, {
                        isOnline: false,
                    });
                }
            },
        },
    });
};
exports.createApolloServer = createApolloServer;
