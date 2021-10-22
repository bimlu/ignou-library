import { ApolloClient, ApolloLink, InMemoryCache } from "@apollo/client";
import { onError } from "@apollo/client/link/error";
import { createUploadLink } from "apollo-upload-client";

const handleErrors = () => {
  return onError(({ graphQLErrors, networkError }) => {
    if (graphQLErrors) {
      graphQLErrors.map(({ message, locations, path }) => {
        console.log("[GraphQL error]: Message", message);
        console.log("[GraphQL error]: Location", locations);
        console.log("[GraphQL error]: Path", path);
      });
    }

    if (networkError) {
      console.log(`[Network error]: ${networkError}`);
    }
  });
};

export const createApolloClient = (apiUrl) => {
  const cache = new InMemoryCache();

  const errorLink = handleErrors();
  const uploadLink = createUploadLink({ uri: apiUrl, credentials: "include" }); // Upload link also creates an HTTP link

  return new ApolloClient({
    link: ApolloLink.from([errorLink, uploadLink]),
    cache,
  });
};
