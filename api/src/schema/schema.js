import { gql } from "apollo-server-express";
import CollegeSchema from "./College";
import CommentSchema from "./Comment";
import CourseSchema from "./Course";
import FacultySchema from "./Faculty";
import FollowSchema from "./Follow";
import IGNOUSchema from "./IGNOU";
import LikeSchema from "./Like";
import MessageSchema from "./Message";
import NotificationSchema from "./Notification";
import PostSchema from "./Post";
import ProgrammeSchema from "./Programme";
import SchoolSchema from "./School";
import StudentSchema from "./Student";
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
  ${FollowSchema}
  ${PostSchema}
  ${LikeSchema}
  ${CommentSchema}
  ${MessageSchema}
  ${NotificationSchema}
  ${CollegeSchema}
  ${CourseSchema}
  ${ProgrammeSchema}
  ${FacultySchema}
  ${IGNOUSchema}
  ${SchoolSchema}
  ${StudentSchema}
`;

export default schema;
