import { gql } from "@apollo/client";

// Gets college 'IGNOU'
export const GET_COLLEGE = gql`
  query {
    getCollege {
      id
      image
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
