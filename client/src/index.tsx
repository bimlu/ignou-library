import { ApolloProvider } from "@apollo/client";
import App from "components/App";
import React from "react";
import { render } from "react-dom";
import { StoreProvider } from "store";
import { createApolloClient } from "utils/apollo-client";

// GraphQL HTTP URL
const API_URL = `${process.env.REACT_APP_API_URL}/graphql`;

// Create a Apollo client
const apolloClient = createApolloClient(API_URL);

render(
  <ApolloProvider client={apolloClient}>
    <StoreProvider>
      <App />
    </StoreProvider>
  </ApolloProvider>,
  document.getElementById("root")
);
