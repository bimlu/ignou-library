"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_express_1 = require("apollo-server-express");
/**
 * Like schema
 */
const LikeSchema = (0, apollo_server_express_1.gql) `
  # ---------------------------------------------------------
  # Model Objects
  # ---------------------------------------------------------
  type Like {
    id: ID!
    post: ID
    user: ID
  }
  # ---------------------------------------------------------
  # Input Objects
  # ---------------------------------------------------------
  input CreateLikeInput {
    userId: ID!
    postId: ID!
  }
  input DeleteLikeInput {
    id: ID!
  }
  # ---------------------------------------------------------
  # Return Payloads
  # ---------------------------------------------------------
  type LikePayload {
    id: ID!
    post: PostPayload
    user: UserPayload
  }
  # ---------------------------------------------------------
  # Mutations
  # ---------------------------------------------------------
  extend type Mutation {
    # Creates a like for post
    createLike(input: CreateLikeInput!): Like
    # Deletes a post like
    deleteLike(input: DeleteLikeInput!): Like
  }
`;
exports.default = LikeSchema;
