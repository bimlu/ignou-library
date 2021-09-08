import { gql } from "apollo-server-express";

/**
 * Programme schema
 */
const ProgrammeSchema = gql`
  type Programme {
    code: String
    name: String
    deliveryMode: String
    level: String
    termType: String
    termCount: Int
    minDuration: Int
    maxDuration: Int
    fee: String
    minAge: Int
    maxAge: Int
    eligibility: String
    detail: ProgrammeDetail
    courses: [Course]
  }

  type ProgrammeDetail {
    overview: String
    objectives: String
    programmmeStructure: String
    feeDetails: String
    mediumOfInstruction: String
    programmeCoordinator: String
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
