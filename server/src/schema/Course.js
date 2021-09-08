import { gql } from "apollo-server-express";

/**
 * Course schema
 */
const CourseSchema = gql`
  type Course {
    code: String
    title: String
    numOfBlocks: Int
    school: School
    programmes: [Programme]
  }

  type Courses {
    courses: [Course]
    count: String!
  }

  extend type Query {
    # Gets course by code
    getCourse(code: String): Course

    # Gets all courses
    getCourses(skip: Int, limit: Int): Courses
  }
`;

export default CourseSchema;
