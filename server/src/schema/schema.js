import { gql } from "apollo-server-express";
import CollegeSchema from "./College";
import CourseSchema from "./Course";
import FacultySchema from "./Faculty";
import ProgrammeSchema from "./Programme";
import SchoolSchema from "./School";
import UserSchema from "./User";

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
  ${CollegeSchema}
  ${SchoolSchema}
  ${FacultySchema}
`;

export default schema;
