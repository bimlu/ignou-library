"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_express_1 = require("apollo-server-express");
/**
 * Course schema
 */
const CourseSchema = (0, apollo_server_express_1.gql) `
  # ---------------------------------------------------------
  # Model Objects
  # ---------------------------------------------------------
  type Course {
    term: Int
    id: ID!
    name: String!
    fullName: String!
    createdBy: User!
    description: String
    image: File
    imagePublicId: String
    verified: Boolean
    college: College!
    programme: Programme!
    posts: [Post]
    postsCount: Int
    students: [User]
    studentsCount: Int
    createdAt: String
    updatedAt: String

    code: String
    title: String
    studyMaterial: [Block]
    programmes: [Programme]
    discipline: String
  }

  type Block {
    blockName: String
    blockLink: String
  }

  # ---------------------------------------------------------
  # Input Objects
  # ---------------------------------------------------------
  input CreateCourseInput {
    term: Int
    name: String!
    fullName: String!
    createdBy: ID!
    description: String
    image: Upload
    imagePublicId: String
    collegeId: ID!
    programmeId: ID!
  }

  input DeleteCourseInput {
    id: ID!
    imagePublicId: String
  }

  input UpdateCourseInput {
    term: Int
    id: ID!
    updatedBy: ID!
    name: String
    fullName: String
    description: String
    image: Upload
    imagePublicId: String
  }

  # ---------------------------------------------------------
  # Return Payloads
  # ---------------------------------------------------------
  type CoursePayload {
    term: Int
    id: ID!
    name: String
    fullName: String
    createdBy: User
    description: String
    image: String
    imagePublicId: String
    verified: Boolean
    college: College
    programme: Programme
    posts: [Post]
    postsCount: Int
    students: [User]
    studentsCount: Int
    createdAt: String
    updatedAt: String
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
    getCollegeProgrammeCourses(
      collegeId: ID!
      programmeId: ID!
      skip: Int
      limit: Int
    ): CoursesPayload
  }

  # ---------------------------------------------------------
  # Mutations
  # ---------------------------------------------------------
  extend type Mutation {
    # Creates a Course
    createCourse(input: CreateCourseInput!): CoursePayload

    # Deletes a Course
    deleteCourse(input: DeleteCourseInput!): CoursePayload

    # Updates a Course
    updateCourse(input: UpdateCourseInput!): CoursePayload

    # Toggles verification of a Course
    toggleCourseVerification(id: ID!): CoursePayload
  }
`;
exports.default = CourseSchema;
