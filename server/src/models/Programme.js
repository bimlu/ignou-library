import mongoose from "mongoose";

const Schema = mongoose.Schema;

const programmmeDetailSchema = new Schema({
  overview: String,
  objectives: String,
  programmmeStructure: String,
  programmeCoordinator: String,
  eligibility: String,
  mediumOfInstruction: String,
  duration: String,
  feeStructure: String,
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
    termCount: String, // 1-6
    minDuration: String, // 3y or 48m
    maxDuration: String,
    fee: String, // for full programme
    minAge: String, // 18 or nobar
    maxAge: String,
    detail: programmmeDetailSchema,
    school: { type: String, ref: "School" },
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
