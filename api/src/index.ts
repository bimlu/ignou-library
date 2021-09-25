import compression from "compression";
import connectMongo from "connect-mongo";
import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import expressSession from "express-session";
import { createServer } from "http";
import mongoose from "mongoose";
import passport from "passport";
import path from "path";
import { v4 as uuid } from "uuid";
import { createApolloServer } from "./apollo-server";
import { initPassport } from "./authentication";
import models from "./models";
import { populateDB } from "./populateDB";
// import Programme from "./models/Programme";
import resolvers from "./resolvers";
import routes from "./routes";
import schema from "./schema";
import { httpLogger } from "./utils/httpLogger";
import { logger } from "./utils/logger";
dotenv.config();

const MongoStore = connectMongo(expressSession);
export const session = expressSession({
  genid: (req) => uuid(),
  secret: process.env.SECRET,
  resave: false,
  saveUninitialized: false,
  cookie: { maxAge: 365 * 24 * 60 * 60 * 1000 }, // 1 year
  store: new MongoStore({ mongooseConnection: mongoose.connection }),
});

// Connect to database
mongoose
  .connect(process.env.MONGO_URL, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then(() => console.log("DB connected"))
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });

populateDB();

// Initializes passport
initPassport();
// Initializes application
const app = express();

// Enable gzip compression
app.use(compression());
// http logging
app.use(httpLogger);
// Enable cors
app.use(
  cors({
    origin: [process.env.FRONTEND_URL_1, process.env.FRONTEND_URL_2],
    credentials: true,
  })
);
// Enable session
app.use(session);
app.use(passport.initialize());
app.use(passport.session());
// Auth routes
app.use(routes);

// Server static files
const CLIENT_BUILD_DIR = path.resolve(__dirname, "../../client/build");
app.use(express.static(CLIENT_BUILD_DIR));
// Redirect all of server requests to /index.html
// @see https://ui.dev/react-router-cannot-get-url-refresh/
app.get("*", (req, res) => {
  res.sendFile(path.resolve(CLIENT_BUILD_DIR, "index.html"));
});

// Create a Apollo Server
const server = createApolloServer(schema, resolvers, models);
server.applyMiddleware({ app, path: "/graphql", cors: false });

// Create http server and add subscriptions to it
const httpServer = createServer(app);
server.installSubscriptionHandlers(httpServer);

// Listen to HTTP and WebSocket server
const PORT = process.env.PORT || process.env.API_PORT;
httpServer.listen({ port: PORT }, () => {
  logger.info(`Server listening on port ${PORT}`);
});

// Programme.find({ code: "MCA_NEW" })
//   // .populate("course")
//   .populate({ path: "programmeStructure", populate: { path: "course" } })
//   .exec((err, res) => {
//     if (err) throw err;
//     console.log(res);
//     console.log("******************************");
//     console.log(res[0].programmeStructure);
//     console.log("*****************************");
//     console.log(res[0].programmeStructure[0].course);
//   });
