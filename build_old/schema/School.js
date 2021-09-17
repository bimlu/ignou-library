"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_express_1 = require("apollo-server-express");
/**
 * School schema
 */
const SchoolSchema = (0, apollo_server_express_1.gql) `
  type School {
    code: String
    name: String
    thumbnail: String
    shortIntro: String
    courses: [Course]
    programmes: [Programme]
    programmesUnderDev: [Programme]
    faculties: Faculties
    activities: String
    projects: String
    publications: String
    schoolBoards: String
    minutesOfSchoolBoard: String
    contactUs: String
    photoGallery: [String]
  }

  type Schools {
    schools: [School]
    count: String!
  }

  extend type Query {
    # Gets school by code
    getSchool(code: String): School

    # Gets all schools
    getSchools(skip: Int, limit: Int): Schools
  }
`;
exports.default = SchoolSchema;
