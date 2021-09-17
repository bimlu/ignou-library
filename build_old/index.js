"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.session = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const express_1 = __importDefault(require("express"));
const http_1 = require("http");
const mongoose_1 = __importDefault(require("mongoose"));
const cors_1 = __importDefault(require("cors"));
const path_1 = __importDefault(require("path"));
const passport_1 = __importDefault(require("passport"));
const express_session_1 = __importDefault(require("express-session"));
const connect_mongo_1 = __importDefault(require("connect-mongo"));
const compression_1 = __importDefault(require("compression"));
const uuid_1 = require("uuid");
const authentication_1 = require("./authentication");
const routes_1 = __importDefault(require("./routes"));
const models_1 = __importDefault(require("./models"));
const schema_1 = __importDefault(require("./schema"));
const resolvers_1 = __importDefault(require("./resolvers"));
const apollo_server_1 = require("./apollo-server");
const logger_1 = require("./utils/logger");
const httpLogger_1 = require("./utils/httpLogger");
const MongoStore = (0, connect_mongo_1.default)(express_session_1.default);
exports.session = (0, express_session_1.default)({
    genid: (req) => (0, uuid_1.v4)(),
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: { maxAge: 365 * 24 * 60 * 60 * 1000 },
    store: new MongoStore({ mongooseConnection: mongoose_1.default.connection }),
});
// Connect to database
mongoose_1.default
    .connect(process.env.MONGO_URL, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
})
    .then(() => console.log('DB connected'))
    .catch((err) => {
    console.error(err);
    process.exit(1);
});
// Initializes passport
(0, authentication_1.initPassport)();
// Initializes application
const app = (0, express_1.default)();
// Enable gzip compression
app.use((0, compression_1.default)());
// http logging
app.use(httpLogger_1.httpLogger);
// Enable cors
app.use((0, cors_1.default)({
    origin: [
        process.env.FRONTEND_URL_1,
        process.env.FRONTEND_URL_2,
    ],
    credentials: true,
}));
// Enable session
app.use(exports.session);
app.use(passport_1.default.initialize());
app.use(passport_1.default.session());
// Auth routes
app.use(routes_1.default);
// Server static files
const CLIENT_BUILD_DIR = path_1.default.resolve(__dirname, '../../client/build');
app.use(express_1.default.static(CLIENT_BUILD_DIR));
// Redirect all of server requests to /index.html
// @see https://ui.dev/react-router-cannot-get-url-refresh/
app.get('*', (req, res) => {
    res.sendFile(path_1.default.resolve(CLIENT_BUILD_DIR, 'index.html'));
});
// Create a Apollo Server
const server = (0, apollo_server_1.createApolloServer)(schema_1.default, resolvers_1.default, models_1.default);
server.applyMiddleware({ app, path: '/graphql', cors: false });
// Create http server and add subscriptions to it
const httpServer = (0, http_1.createServer)(app);
server.installSubscriptionHandlers(httpServer);
// Listen to HTTP and WebSocket server
const PORT = process.env.PORT || process.env.API_PORT;
httpServer.listen({ port: PORT }, () => {
    logger_1.logger.info(`Server listening on port ${PORT}`);
});
