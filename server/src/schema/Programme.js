import { gql } from "apollo-server-express";

/**
 * Programme schema
 */
const ProgrammeSchema = gql`
  type Programme {
    code: String
    name: String
    programmeDetail: ProgrammeDetail
    courseList: CourseList
    school: School
  }

  type CourseList {
    ALL: [Course]
    CC: [Course]
    DSE: [Course]
    AECC: [Course]
    SEC: [Course]
    GE: [Course]
    LA: [Course]
  }

  type ProgrammeDetail {
    first: [CourseCreditPair]
    second: [CourseCreditPair]
    third: [CourseCreditPair]
    fourth: [CourseCreditPair]
    fifth: [CourseCreditPair]
    sixth: [CourseCreditPair]
  }

  type CourseCreditPair {
    course: Course
    credit: Int
  }

  type Programmes {
    programmes: [Programme]
    count: String
  }

  extend type Query {
    # Gets programme by code
    getProgramme(code: String): Programme

    # Gets all programmes
    getProgrammes(skip: Int, limit: Int): Programmes
  }
`;

export default ProgrammeSchema;
