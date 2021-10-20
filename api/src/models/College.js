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
  programmes: [{ type: Schema.Types.ObjectId, ref: "Programme" }],
});

export default mongoose.model("College", collegeSchema);
