import { gql } from "apollo-server-express";

/**
 * Student schema
 */
const StudentSchema = gql`
  type User {
    firstName: String
    lastName: String
    enrollmentNumber: String
    enrollmentDate: String
    dateOfBirth: String
    mobileNumber: String
    email: String
    password: String
    address: String
    district: String
    state: String
    pincode: String
    country: String
    programmes: [Programme]
    courses: [Course]
    studyCenter: String
    username: String
  }

  type Users {
    users: [User]
    count: String
  }

  extend type Query {
    # Gets the currently logged in user
    getAuthUser: User

    # Gets user by enrollmentNumber
    getUser(enrollmentNumber: String): User

    # Gets all users
    getUsers(enrollmentNumber: String, skip: Int, limit: Int): Users

    # Searches users by enrollmentNumber or firstName
    searchUsers(searchQuery: String): [User]

    # Gets Suggested people for user
    suggestPeople(enrollmentNumber: String): [User]
  }
`;

export default StudentSchema;
