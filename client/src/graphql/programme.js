import { gql } from "@apollo/client";

/**
 * Gets specific programme by id
 */
export const GET_PROGRAMME = gql`
  query ($id: ID, $name: String) {
    getProgramme(id: $id, name: $name) {
      id
      code
      title
      image
      eligibility
      mediumOfInstruction
      duration
      feeStructure
    }
  }
`;

export const GET_PROGRAMME_STRUCTURE = gql`
  query ($id: ID, $name: String) {
    getProgrammeStructure(id: $id, name: $name) {
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
      }
    }
  }
`;

/**
 * Gets programmes for a specific college
 */
export const GET_COLLEGE_PROGRAMMES = gql`
  query ($collegeId: ID!, $skip: Int, $limit: Int) {
    getCollegeProgrammes(collegeId: $collegeId, skip: $skip, limit: $limit) {
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
      }
    }
  }
`;
