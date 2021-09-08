import dotenv from "dotenv";
import express from "express";
import { createServer } from "http";
import mongoose from "mongoose";
import { createApolloServer } from "./apollo-server";
import models from "./models";
import Course from "./models/Course";
import resolvers from "./resolvers";
import schema from "./schema";

dotenv.config(); // Configure Environment variables

// Connect to database
mongoose
  .connect(process.env.MONGO_URL, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then(() => console.log("DB connected"))
  .catch((err) => console.error(err));

// populateDB();

// Initializes application
const app = express();

// // Server static files
// app.use(express.static(path.resolve(__dirname, "../../web", "build")));

// // Redirect all of server requests to /index.html
// // @see https://ui.dev/react-router-cannot-get-url-refresh/
// app.get("*", (req, res) => {
//   res.sendFile(path.resolve(__dirname, "../../web/build", "index.html"));
// });

// Create a Apollo Server
const server = createApolloServer(schema, resolvers, models);
server.applyMiddleware({ app, path: "/graphql" });

// Create http server and add subscriptions to it
const httpServer = createServer(app);

// Listen to HTTP and WebSocket server
httpServer.listen({ port: process.env.API_PORT }, () => {
  // logger.info(`Server listening on port ${process.env.API_PORT}`);
  console.log(`Server listening on port ${process.env.API_PORT}`);
});

Course.find({ code: "a" })
  .populate("school")
  .exec((err, res) => {
    if (err) throw err;
    console.log(res);
  });
