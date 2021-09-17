import { gql } from "apollo-server-express";

/**
 * Faculty schema
 */
const FacultySchema = gql`
  type Faculty {
    code: String
    name: String
  }

  type Faculties {
    faculties: [Faculty]
    count: String!
  }
`;

export default FacultySchema;
