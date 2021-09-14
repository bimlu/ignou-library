import mongoose from "mongoose";

const Schema = mongoose.Schema;

const programmmeDetailSchema = new Schema({
  1: [[{ type: String, ref: "Course" }, Number]],
  2: [[{ type: String, ref: "Course" }, Number]],
  3: [[{ type: String, ref: "Course" }, Number]],
  4: [[{ type: String, ref: "Course" }, Number]],
  5: [[{ type: String, ref: "Course" }, Number]],
  6: [[{ type: String, ref: "Course" }, Number]],
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
    code: String,
    name: String,
    programmmeDetail: programmmeDetailSchema,
    courseList: courseListSchema,
    school: { type: String, ref: "School" },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Programme", programmeSchema);
