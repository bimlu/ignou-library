import { gql } from "@apollo/client";

// Gets specific course by id or code
export const GET_COURSE = gql`
  query ($id: ID, $code: String) {
    getCourse(id: $id, code: $code) {
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
      assignment {
        main
        hindi
      }
    }
  }
`;
