import { gql } from "apollo-server-express";

/**
 * IGNOU schema
 */
const IGNOUSchema = gql`
  type IGNOU {
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

export default IGNOUSchema;