import { gql } from "apollo-server-express";

/**
 * College schema
 */
const CollegeSchema = gql`
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

export default CollegeSchema;
