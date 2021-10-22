import mongoose from "mongoose";

const Schema = mongoose.Schema;

const collegeSchema = Schema({
  code: String,
  title: String,
  recognition: String,
  importantLinks: [[String]],
  notes: [String],
  theUniversity: {
    introduction: [String],
    prominentFeatures: [String],
    importantAchievements: [String],
    theSchoolOfStudies: [String],
    academicProgrammes: [String],
    coursePreparation: String,
    creditSystem: [[String]],
    supportServices: [String],
    programmeDelivery: [[String]],
    webEnabledAcademicSupport: String,
    evaluationSystem: [String],
    TEEAndPaymentOfExamFee: [String],
    internationalStudentsResidingInIndia: String,
    onlineAdmissionSystem: String,
    eGyanKosh: String,
    IGNOUeContentMobileApp: String,
    vidyaLakshmiPortal: String,
  },
  image: String,
});

export default mongoose.model("College", collegeSchema);
