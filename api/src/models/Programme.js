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
    degree: {
      type: Degree,
      required: true,
      default: Degree.bachelors,
    },
    termType: {
      type: TermType,
      required: true,
      default: TermType.Semester,
    },
    termsCount: {
      type: Number,
      required: true,
      default: 6,
    },
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
    thumbnail: String,
    imagePublicId: String,
    verified: Boolean,
    college: {
      type: Schema.Types.ObjectId,
      ref: "College",
    },
    courses: [
      {
        type: Schema.Types.ObjectId,
        ref: "Course",
      },
    ],
    coursesCount: {
      type: Number,
      default: 0,
    },
    studentsCount: {
      type: Number,
      default: 0,
    },
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
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Programme", programmeSchema);
