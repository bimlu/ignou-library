import mongoose from "mongoose";
import { Category, Degree, TermType } from "../constants/types";

const Schema = mongoose.Schema;

const courseCreditPairSchema = new Schema({
  course: { type: String, ref: "Course" },
  credit: Number,
});

const programmmeDetailSchema = new Schema({
  first: [courseCreditPairSchema],
  second: [courseCreditPairSchema],
  third: [courseCreditPairSchema],
  fourth: [courseCreditPairSchema],
  fifth: [courseCreditPairSchema],
  sixth: [courseCreditPairSchema],
});

const courseListSchema = new Schema({
  ALL: [{ type: String, ref: "Course" }],
  CC: [{ type: String, ref: "Course" }],
  DSE: [{ type: String, ref: "Course" }],
  AECC: [{ type: String, ref: "Course" }],
  SEC: [{ type: String, ref: "Course" }],
  GE: [{ type: String, ref: "Course" }],
  LA: [{ type: String, ref: "Course" }],
});

const programmeStructureSchema = new Schema({
  term: Number,
  courseCode: String,
  course: { type: Schema.Types.ObjectId, ref: "Course" },
  credit: Number,
  category: { type: Category, default: Category.NONE },
});

/**
 * Programme schema that has references to College schema
 */
const programmeSchema = Schema(
  {
    code: String,
    title: String,
    programmeDetail: programmmeDetailSchema,
    courseList: courseListSchema,
    collegeCode: String,
    schoolCode: String,
    totalCredits: Number,
    programmeStructure: [programmeStructureSchema],
    eligibility: String,
    mediumOfInstruction: String,
    duration: String,
    feeStructure: String,
    degree: { type: Degree, default: Degree.bachelors },
    termType: { type: TermType, default: TermType.Semester },
    termsCount: { type: Number, default: 6 },
    image: String,
    college: { type: Schema.Types.ObjectId, ref: "College" },
    courses: [{ type: Schema.Types.ObjectId, ref: "Course" }],
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Programme", programmeSchema);
