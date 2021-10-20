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

/**
 * Course schema that has references to College and Programme schema
 */
const courseSchema = Schema(
  {
    code: String,
    title: String,
    programmes: [{ type: Schema.Types.ObjectId, ref: "Programme" }],
    discipline: String,
    collegeCode: String,
    programmeCode: String,
    programmeCodes: [String],
    courseLink: String,
    courseBlocks: [blockSchema],
    questionPapers: [String],
    image: String,
    college: { type: Schema.Types.ObjectId, ref: "College" },
    programme: { type: Schema.Types.ObjectId, ref: "Programme" },
    // term e.g. 1, 2, 3... (semester/year)
    term: { type: Number, default: 1 },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Course", courseSchema);
