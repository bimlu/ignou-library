import { gql } from "apollo-server-express";

/**
 * Course schema
 */
const CourseSchema = gql`
  # ---------------------------------------------------------
  # Model Objects
  # ---------------------------------------------------------
  type Course {
    term: Int
    id: ID!
    name: String!
    fullName: String!
    description: String
    imagePublicId: String
    verified: Boolean
    college: College!
    programme: Programme!
    postsCount: Int
    studentsCount: Int
    createdAt: String
    updatedAt: String

    code: String
    title: String
    programmes: [Programme]
    discipline: String
    courseLink: String
    courseBlocks: [Block]
    questionPapers: [String]
  }

  type Block {
    blockCode: String
    blockName: String
    blockLink: String
    blockUnits: [Unit]
  }

  type Unit {
    unitCode: String
    unitName: String
    unitLink: String
    unitDownloadLink: String
  }

  # ---------------------------------------------------------
  # Return Payloads
  # ---------------------------------------------------------
  type CoursePayload {
    term: Int
    id: ID!
    name: String
    fullName: String
    description: String
    image: String
    imagePublicId: String
    verified: Boolean
    college: College
    programme: Programme
    postsCount: Int
    studentsCount: Int
    createdAt: String
    updatedAt: String
    courseLink: String
    courseBlocks: [Block]
    questionPapers: [String]
  }

  type CoursesPayload {
    courses: [CoursePayload]!
    count: String!
  }

  # ---------------------------------------------------------
  # Queries
  # ---------------------------------------------------------
  extend type Query {
    # Gets course by id or name
    getCourse(id: ID, name: String): CoursePayload

    # Gets all courses
    getCourses(skip: Int, limit: Int): CoursesPayload

    # Gets courses of a specific programme and college
    getCollegeProgrammeCourses(collegeId: ID!, programmeId: ID!, skip: Int, limit: Int): CoursesPayload
  }
`;

export default CourseSchema;
