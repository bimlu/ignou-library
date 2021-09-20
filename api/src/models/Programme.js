import mongoose from "mongoose";
import { Degree, TermType } from "../constants/types";

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

/**
 * Programme schema that has references to College schema
 */
const programmeSchema = Schema(
  {
    degree: {
      type: Degree,
      required: true,
      default: Degree.Bachelor,
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
    createdBy: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    updatedBy: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    description: String,
    image: String,
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
    students: [
      {
        type: Schema.Types.ObjectId,
        ref: "User",
      },
    ],
    studentsCount: {
      type: Number,
      default: 0,
    },

    code: String,
    programmeDetail: programmmeDetailSchema,
    courseList: courseListSchema,
    school: { type: String, ref: "School" },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Programme", programmeSchema);
