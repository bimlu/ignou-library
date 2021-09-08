import { gql } from "apollo-server-express";

/**
 * School schema
 */
const SchoolSchema = gql`
  type School {
    code: String
    name: String
    thumbnail: String
    shortIntro: String
    programmes: [Programme]
    programmesUnderDev: Programmes
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

export default SchoolSchema;
