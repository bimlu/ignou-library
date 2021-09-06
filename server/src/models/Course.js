import mongoose from "mongoose";

const Schema = mongoose.Schema;

/**
 * Course schema that has references to College and Programme schema
 */
const courseSchema = Schema(
  {
    code: String,
    title: String,
    numOfBlocks: Number,
    school: { type: String, ref: "School" },
    // category: String, // compulsory|elective
    // credits: Number,
    programmes: [{ type: String, ref: "Programme" }],
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Course", courseSchema);
