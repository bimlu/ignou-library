import { gql } from "@apollo/client";

/**
 * Gets specific programme by id
 */
export const GET_PROGRAMME = gql`
  query ($id: ID, $name: String) {
    getProgramme(id: $id, name: $name) {
      id
      name
      fullName
      degree
      termType
      termsCount
      verified
      totalCredits
      createdBy {
        id
        username
        fullName
      }
      description
      image
      thumbnail
      imagePublicId
      createdAt
      college {
        id
        name
      }
      students {
        id
      }
      courses {
        id
      }
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
      id
      name
      fullName
      degree
      termType
      termsCount
      verified
      totalCredits
      createdBy {
        id
        username
        fullName
      }
      description
      image
      thumbnail
      imagePublicId
      createdAt
      college {
        id
        name
      }
      students {
        id
      }
      courses {
        id
      }
      programmeStructure {
        term
        courseCode
        course {
          id
          name
          fullName
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
        name
        fullName
        degree
        termType
        termsCount
        description
        verified
        image
        thumbnail
        totalCredits
        studentsCount
        coursesCount
      }
    }
  }
`;
