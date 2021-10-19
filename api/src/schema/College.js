import { gql } from "apollo-server-express";

/**
 * College schema
 */
const CollegeSchema = gql`
  # ---------------------------------------------------------
  # Model Objects
  # ---------------------------------------------------------
  type College {
    id: ID!
    name: String!
    fullName: String!
    description: String
    image: String
    imagePublicId: String
    verified: Boolean
    programmes: [Programme]
    programmesCount: Int
    studentsCount: Int
    createdAt: String
    updatedAt: String
  }

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

  # ---------------------------------------------------------
  # Return Payloads
  # ---------------------------------------------------------
  type CollegePayload {
    id: ID!
    image: String
    code: String
    title: String
    recognition: String
    importantLinks: [[String]]
    notes: [String]
    theUniversity: TheUniversity
  }

  type CollegesPayload {
    colleges: [CollegePayload]!
    count: String!
  }

  # ---------------------------------------------------------
  # Queries
  # ---------------------------------------------------------
  extend type Query {
    # Gets college by id or name
    getCollege(id: ID, name: String): CollegePayload
  }
`;

export default CollegeSchema;
