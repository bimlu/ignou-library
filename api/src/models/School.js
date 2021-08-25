import mongoose from "mongoose";

const Schema = mongoose.Schema;

/**
 * School schema that has references to College schema
 */
const schoolSchema = Schema(
  {
    title: String,
    introduction: String,
    programmes: [{ type: Schema.Types.ObjectId, ref: "Programme" }],
    programmesUnderDev: [{ type: Schema.Types.ObjectId, ref: "Programme" }],
    faculty: [{ type: Schema.Types.ObjectId, ref: "Faculty" }],
    activities: String,
    projects: String,
    publications: String,
    schoolBoards: String,
    minutesOfSchoolBoard: String,
    contactUs: String,
    photoGallery: [String],
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("School", schoolSchema);
