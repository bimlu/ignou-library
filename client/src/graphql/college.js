import { gql } from "@apollo/client";

/**
 * Gets specific college by id
 */
export const GET_COLLEGE = gql`
  query ($id: ID, $name: String) {
    getCollege(id: $id, name: $name) {
      id
      name
      fullName
      verified
      createdBy {
        id
        username
        fullName
      }
      description
      image
      imagePublicId
      createdAt
      students {
        id
      }
      programmes {
        id
      }
      code
      title
      recognition
      importantLinks
      notes
      theUniversity {
        introduction
        prominentFeatures
        importantAchievements
        theSchoolOfStudies
        academicProgrammes
        coursePreparation
        creditSystem
        supportServices
        programmeDelivery
        webEnabledAcademicSupport
        evaluationSystem
        TEEAndPaymentOfExamFee
        internationalStudentsResidingInIndia
        onlineAdmissionSystem
        eGyanKosh
        IGNOUeContentMobileApp
        vidyaLakshmiPortal
      }
    }
  }
`;
