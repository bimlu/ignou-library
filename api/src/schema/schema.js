import { gql } from "apollo-server-express";
import CollegeSchema from "./College";
import CourseSchema from "./Course";
import ProgrammeSchema from "./Programme";

const schema = gql`
  type Query {
    _empty: String
  }

  type Mutation {
    _empty: String
  }

  type Subscription {
    _empty: String
  }

  ${CollegeSchema}
  ${CourseSchema}
  ${ProgrammeSchema}
`;

export default schema;
