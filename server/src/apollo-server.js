import { ApolloServer } from "apollo-server-express";

export const createApolloServer = (schema, resolvers, models) => {
  return new ApolloServer({
    typeDefs: schema,
    resolvers,
    context: async ({ req, connection }) => {
      if (connection) {
        return connection.context;
      }

      const authUser = req.user;

      return Object.assign({ authUser }, models);
    },
  });
};
