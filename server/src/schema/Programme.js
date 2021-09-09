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
    termCount: String
    minDuration: String
    maxDuration: String
    fee: String
    minAge: String
    maxAge: String
    detail: ProgrammeDetail
    school: School
    courses: [Course]
  }

  type ProgrammeDetail {
    overview: String
    objectives: String
    programmmeStructure: String
    programmeCoordinator: String
    eligibility: String
    mediumOfInstruction: String
    duration: String
    feeStructure: String
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
