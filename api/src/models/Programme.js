import mongoose from "mongoose";
import { Category, Degree, TermType } from "../constants/types";

const Schema = mongoose.Schema;

const programmeStructureSchema = new Schema({
  term: Number,
  courseCode: String,
  course: { type: Schema.Types.ObjectId, ref: "Course" },
  credit: Number,
  category: { type: Category, default: Category.NONE },
});

const programmeSchema = Schema({
  code: String,
  title: String,
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
  courses: [{ type: Schema.Types.ObjectId, ref: "Course" }],
});

export default mongoose.model("Programme", programmeSchema);
