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

/**
 * Gets all avilable colleges with programmes and courses populated
 */
export const GET_COLLEGES_WITH_PROGRAMMES_COURSES = gql`
  query ($skip: Int, $limit: Int) {
    getColleges(skip: $skip, limit: $limit) {
      count
      colleges {
        id
        code
        title
        programmes {
          id
          code
          title
          termType
          termsCount
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
  }
`;
