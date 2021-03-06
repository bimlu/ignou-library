import { gql } from "@apollo/client";

// Gets specific programme by id
export const GET_PROGRAMME = gql`
  query ($id: ID, $code: String) {
    getProgramme(id: $id, code: $code) {
      id
      code
      title
      image
      eligibility
      mediumOfInstruction
      duration
      feeStructure
      assignment {
        main
        hindi
      }
      assignmentTermwise {
        main {
          term
          url
        }
        hindi {
          term
          url
        }
      }
      termType
    }
  }
`;

export const GET_PROGRAMME_STRUCTURE = gql`
  query ($id: ID, $code: String) {
    getProgrammeStructure(id: $id, code: $code) {
      programmeStructure {
        term
        courseCode
        course {
          id
          code
          title
        }
        credit
        category
        discipline
      }
    }
  }
`;

// Get assignment tree
export const GET_ASSIGNMENT_TREE = gql`
  query ($skip: Int, $limit: Int) {
    getAssignmentTree(skip: $skip, limit: $limit) {
      count
      programmes {
        id
        code
        title
        degree
        termType
        termsCount
        image
        totalCredits
        cbcs
        disciplines
        programmeStructure {
          term
          courseCode
          course {
            id
            code
            title
          }
          credit
          category
          discipline
        }
      }
    }
  }
`;

// Get all programmes
export const GET_PROGRAMMES = gql`
  query ($skip: Int, $limit: Int) {
    getProgrammes(skip: $skip, limit: $limit) {
      count
      programmes {
        id
        code
        title
        degree
        termType
        termsCount
        image
        totalCredits
        cbcs
        disciplines
      }
    }
  }
`;
