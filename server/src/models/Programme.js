import mongoose from "mongoose";

const Schema = mongoose.Schema;

const courseCreditPairSchema = {
  course: { type: String, ref: "Course" },
  credit: Number,
};

const programmmeDetailSchema = {
  first: [courseCreditPairSchema],
  second: [courseCreditPairSchema],
  third: [courseCreditPairSchema],
  fourth: [courseCreditPairSchema],
  fifth: [courseCreditPairSchema],
  sixth: [courseCreditPairSchema],
};

const courseListSchema = {
  ALL: [{ type: String, ref: "Course" }],
  CC: [{ type: String, ref: "Course" }],
  DSE: [{ type: String, ref: "Course" }],
  AECC: [{ type: String, ref: "Course" }],
  SEC: [{ type: String, ref: "Course" }],
  GE: [{ type: String, ref: "Course" }],
  LA: [{ type: String, ref: "Course" }],
};

/**
 * Programme schema that has references to College schema
 */
const programmeSchema = Schema({
  code: String,
  name: String,
  programmmeDetail: programmmeDetailSchema,
  courseList: courseListSchema,
  school: { type: String, ref: "School" },
});

export default mongoose.model("Programme", programmeSchema);
