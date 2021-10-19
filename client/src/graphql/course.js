import { gql } from "@apollo/client";

/**
 * Gets specific course by id
 */
export const GET_COURSE = gql`
  query ($id: ID, $name: String) {
    getCourse(id: $id, name: $name) {
      id
      code
      title
      image
      courseLink
      courseBlocks {
        blockCode
        blockName
        blockLink
        blockUnits {
          unitCode
          unitName
          unitLink
          unitDownloadLink
        }
      }
      questionPapers
    }
  }
`;
