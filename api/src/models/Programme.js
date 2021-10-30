import mongoose from "mongoose";
import { Category, Degree, Discipline, TermType } from "../constants/types";

const Schema = mongoose.Schema;

const programmeStructureSchema = new Schema({
  term: Number,
  courseCode: String,
  course: { type: Schema.Types.ObjectId, ref: "Course" },
  credit: Number,
  category: { type: Category, default: Category.NONE },
  discipline: { type: Discipline, default: Discipline.None },
});

const assignmentSchema = new Schema({
  main: String,
  hindi: String,
});

const assignmentTermwiseSchema = new Schema({
  main: [{ term: Number, url: String }],
  hindi: [{ term: Number, url: String }],
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
  coursesCount: Number,
  cbcs: Boolean,
  disciplines: [Number],
  assignment: assignmentSchema,
  assignmentTermwise: assignmentTermwiseSchema,
});

export default mongoose.model("Programme", programmeSchema);
