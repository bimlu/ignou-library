"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_express_1 = require("apollo-server-express");
/**
 * Faculty schema
 */
const FacultySchema = (0, apollo_server_express_1.gql) `
  type Faculty {
    code: String
    name: String
  }

  type Faculties {
    faculties: [Faculty]
    count: String!
  }
`;
exports.default = FacultySchema;
