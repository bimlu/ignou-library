import { gql } from "apollo-server-express";

const ProgrammeSchema = gql`
  type Programme {
    id: ID
    code: String
    title: String
    image: String
    eligibility: String
    mediumOfInstruction: String
    duration: String
    feeStructure: String
    programmeStructure: [ProgrammeStructure]
    degree: Int
    termType: Int
    termsCount: Int
    totalCredits: Int
    courses: [Course]
    coursesCount: Int
    cbcs: Boolean
    disciplines: [Int]
    assignment: Assignment
    assignmentTermwise: AssignmentTermwise
    present: Present2
  }

  type Present2 {
    assignment: Boolean
  }

  type ProgrammeStructure {
    term: Int
    courseCode: String
    course: Course
    credit: Int
    category: Int
    discipline: Int
  }

  type AssignmentTermURL {
    term: Int
    url: String
  }

  type AssignmentTermwise {
    main: [AssignmentTermURL]
    hindi: [AssignmentTermURL]
  }

  type Programmes {
    programmes: [Programme]
    count: String
  }

  extend type Query {
    # Gets programme by id or code
    getProgramme(id: ID, code: String): Programme

    getProgrammeStructure(id: ID, code: String): Programme

    # Gets all programmes
    getProgrammes(skip: Int, limit: Int): Programmes

    # Get Assignment Tree
    getAssignmentTree(skip: Int, limit: Int): Programmes
  }
`;

export default ProgrammeSchema;
