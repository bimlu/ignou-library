import { gql } from "apollo-server-express";
import CourseSchema from "./Course";
import ProgrammeSchema from "./Programme";
import UserSchema from "./user";

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

  ${UserSchema}
  ${CourseSchema}
  ${ProgrammeSchema}
`;

export default schema;
