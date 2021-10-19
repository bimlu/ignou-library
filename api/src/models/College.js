import mongoose from "mongoose";

const Schema = mongoose.Schema;

/**
 * College schema
 */
const collegeSchema = Schema(
  {
    name: {
      type: String,
      required: true,
    },
    fullName: {
      type: String,
      required: true,
    },
    description: String,
    image: String,
    imagePublicId: String,
    verified: Boolean,
    programmes: [
      {
        type: Schema.Types.ObjectId,
        ref: "Programme",
      },
    ],
    programmesCount: {
      type: Number,
      default: 0,
    },
    studentsCount: {
      type: Number,
      default: 0,
    },
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
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("College", collegeSchema);
