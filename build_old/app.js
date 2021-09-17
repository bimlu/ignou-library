"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config(); // Configure Environment variable
const express_1 = __importDefault(require("express"));
const http_1 = require("http");
const mongoose_1 = __importDefault(require("mongoose"));
const cors_1 = __importDefault(require("cors"));
const path_1 = __importDefault(require("path"));
const compression_1 = __importDefault(require("compression"));
const schema_1 = __importDefault(require("./schema"));
const models_1 = __importDefault(require("./models"));
const resolvers_1 = __importDefault(require("./resolvers"));
const apollo_server_1 = require("./utils/apollo-server");
const logger_1 = require("./utils/logger");
const httpLogger_1 = require("./utils/httpLogger");
// Connect to database
mongoose_1.default
    .connect(process.env.MONGO_URL, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
})
    .then(() => console.log('DB connected'))
    .catch((err) => console.error(err));
// Initializes application
const app = (0, express_1.default)();
// Enable gzip compression
app.use((0, compression_1.default)());
// http logging
app.use(httpLogger_1.httpLogger);
// if (process.env.NODE_ENV === 'production') {
//   const accessLogStream = fs.createWriteStream(path.join(__dirname, 'logs/access.log'), { flags: 'a' });
//   app.use(morgan('combined', { stream: accessLogStream }));
// } else {
//   app.use(morgan('dev'));
// }
// Enable cors
const corsOptions = {
    origin: [process.env.APOLLO_STUDIO_URL, process.env.FRONTEND_URL_1, process.env.FRONTEND_URL_2],
    credentials: true,
};
app.use((0, cors_1.default)(corsOptions));
// Server static files
app.use(express_1.default.static(path_1.default.resolve(__dirname, '../../client', 'build')));
// Redirect all of server requests to /index.html
// @see https://ui.dev/react-router-cannot-get-url-refresh/
app.get('*', (req, res) => {
    res.sendFile(path_1.default.resolve(__dirname, '../../client/build', 'index.html'));
});
// Create a Apollo Server
const server = (0, apollo_server_1.createApolloServer)(schema_1.default, resolvers_1.default, models_1.default);
server.applyMiddleware({ app, path: '/graphql' });
// Create http server and add subscriptions to it
const httpServer = (0, http_1.createServer)(app);
server.installSubscriptionHandlers(httpServer);
// Listen to HTTP and WebSocket server
httpServer.listen({ port: process.env.API_PORT }, () => {
    logger_1.logger.info(`Server listening on port ${process.env.API_PORT}`);
});
