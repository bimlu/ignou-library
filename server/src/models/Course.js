import mongoose from "mongoose";

const Schema = mongoose.Schema;

const blockSchema = new Schema({
  blockName: String,
  blockLink: String,
});

/**
 * Course schema that has references to College and Programme schema
 */
const courseSchema = Schema({
  code: String,
  title: String,
  studyMaterial: [blockSchema],
  programmes: [{ type: String, ref: "Programme" }],
  discipline: String,
});

export default mongoose.model("Course", courseSchema);
