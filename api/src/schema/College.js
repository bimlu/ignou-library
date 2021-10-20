import { gql } from "apollo-server-express";

const CollegeSchema = gql`
  type TheUniversity {
    introduction: [String]
    prominentFeatures: [String]
    importantAchievements: [String]
    theSchoolOfStudies: [String]
    academicProgrammes: [String]
    coursePreparation: String
    creditSystem: [[String]]
    supportServices: [String]
    programmeDelivery: [[String]]
    webEnabledAcademicSupport: String
    evaluationSystem: [String]
    TEEAndPaymentOfExamFee: [String]
    internationalStudentsResidingInIndia: String
    onlineAdmissionSystem: String
    eGyanKosh: String
    IGNOUeContentMobileApp: String
    vidyaLakshmiPortal: String
  }

  type College {
    id: ID
    image: String
    code: String
    title: String
    recognition: String
    importantLinks: [[String]]
    notes: [String]
    theUniversity: TheUniversity
    programmes: [Programme]
  }

  extend type Query {
    # Get IGNOU College
    getCollege: College
  }
`;

export default CollegeSchema;
