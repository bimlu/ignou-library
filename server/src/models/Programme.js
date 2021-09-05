import mongoose from "mongoose";

const Schema = mongoose.Schema;

const programmmeDetailSchema = new Schema({
  overview: String,
  objectives: String,
  programmmeStructure: String,
  feeDetails: String,
  mediumOfInstruction: String, // e.g. English, Hindi
  programmeCoordinator: String,
});

/**
 * Programme schema that has references to College schema
 */
const programmeSchema = Schema(
  {
    code: String,
    name: String,
    deliveryMode: String, // distance | online | regular
    level: String, // doctoralDegree | mphilProgramme | bachelorsDegree | mastersDegree | diploma | pgDiploma | pgAndAdvanceDiploma | pgAndAdvanceCertificate | pgAndAdvanceDiploma | pgAndAdvanceCertificate | certificate | nonCreditProgrammes | onlineProgrammes
    termType: String, // semester|year
    termCount: Number, // 1-6
    minDuration: Number, // in months
    maxDuration: Number, // in months
    fee: String,
    minAge: Number, // in years
    maxAge: Number, // in years
    eligibility: String,
    detail: programmmeDetailSchema,
    courses: [
      {
        type: String, // course code
        ref: "Course",
      },
    ],
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Programme", programmeSchema);
