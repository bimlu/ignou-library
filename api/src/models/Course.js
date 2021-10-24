import mongoose from "mongoose";

const Schema = mongoose.Schema;

const unitSchema = new Schema({
  unitCode: String,
  unitName: String,
  unitLink: String,
  unitDownloadLink: String,
});

const blockSchema = new Schema({
  blockCode: String,
  blockName: String,
  blockLink: String,
  blockUnits: [unitSchema],
});

const courseSchema = Schema({
  code: String,
  title: String,
  discipline: String,
  courseLink: String,
  courseBlocks: [blockSchema],
  questionPapers: [String],
  image: String,
  programmes: [{ type: Schema.Types.ObjectId, ref: "Programme" }],
  blocksCount: Number,
});

export default mongoose.model("Course", courseSchema);
