import { gql } from "apollo-server-express";

const CourseSchema = gql`
  type Assignment {
    main: String
    hindi: String
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

  type Present {
    assignment: Boolean
    questionPaper: Boolean
    studyMaterial: Boolean
  }

  type Course {
    id: ID!
    code: String
    title: String
    discipline: String
    image: String
    courseLink: String
    courseBlocks: [Block]
    questionPapers: [String]
    programmes: [Programme]
    blocksCount: Int
    assignment: Assignment
    present: Present
  }

  type Courses {
    courses: [Course]
    count: String
  }

  extend type Query {
    # Gets course by id or code
    getCourse(id: ID, code: String): Course
  }
`;

export default CourseSchema;
