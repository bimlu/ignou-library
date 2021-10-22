import { ApolloServer } from "apollo-server-express";

export const createApolloServer = (schema, resolvers, models) => {
  return new ApolloServer({
    typeDefs: schema,
    resolvers,
    context: models,
  });
};
