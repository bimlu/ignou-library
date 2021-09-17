"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_express_1 = require("apollo-server-express");
/**
 * Comment schema
 */
const CommentSchema = (0, apollo_server_express_1.gql) `
  # ---------------------------------------------------------
  # Model Objects
  # ---------------------------------------------------------
  type Comment {
    id: ID!
    comment: String!
    author: ID
    post: ID
    createdAt: String
  }
  # ---------------------------------------------------------
  # Input Objects
  # ---------------------------------------------------------
  input CreateCommentInput {
    comment: String!
    author: ID!
    postId: ID!
  }
  input DeleteCommentInput {
    id: ID!
  }
  # ---------------------------------------------------------
  # Return Payloads
  # ---------------------------------------------------------
  type CommentPayload {
    id: ID
    comment: String
    author: UserPayload
    post: PostPayload
    createdAt: String
  }
  # ---------------------------------------------------------
  # Mutations
  # ---------------------------------------------------------
  extend type Mutation {
    # Creates a post comment
    createComment(input: CreateCommentInput!): Comment
    # Deletes a post comment
    deleteComment(input: DeleteCommentInput!): Comment
  }
`;
exports.default = CommentSchema;
