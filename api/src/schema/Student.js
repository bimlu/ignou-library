import { gql } from "apollo-server-express";

/**
 * Student schema
 */
const StudentSchema = gql`
  type Student {
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
    studentname: String
  }

  type Students {
    students: [Student]
    count: String
  }

  extend type Query {
    # Gets the currently logged in student
    getAuthStudent: Student

    # Gets student by enrollmentNumber
    getStudent(enrollmentNumber: String): Student

    # Gets all students
    getStudents(enrollmentNumber: String, skip: Int, limit: Int): Students

    # Searches students by enrollmentNumber or firstName
    searchStudents(searchQuery: String): [Student]
  }
`;

export default StudentSchema;
