import { gql } from "apollo-server-express";

/**
 * Programme schema
 */
const ProgrammeSchema = gql`
  type Programme {
    code: String
    title: String
    type: String
    deliveryMode: String
    level: String
    termType: String
    termCount: Int
    courses: Courses
  }

  type Programmes {
    programmes: [Programme]
    count: String
  }

  extend type Query {
    # Gets programme by code
    getProgramme(code: String): Programme

    # Gets all programmes
    getProgrammes(skip: Int, limit: Int): Programmes
  }
`;

export default ProgrammeSchema;
