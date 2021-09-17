"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_express_1 = require("apollo-server-express");
/**
 * College schema
 */
const CollegeSchema = (0, apollo_server_express_1.gql) `
  type College {
    name: String
    fullName: String
    preamble: String
    visionAndMission: String
    actAndStatutes: String
    ordinanceAndRegulations: String
    standardsOfExcellenceInODL: String
    stratigies: String
    gallery: [String]
    schools: [School]
    programmes: [Programme]
    users: [User]
  }
`;
exports.default = CollegeSchema;
