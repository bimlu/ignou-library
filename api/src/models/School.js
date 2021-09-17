import mongoose from "mongoose";

const Schema = mongoose.Schema;

/**
 * School schema that has references to College schema
 */
const schoolSchema = Schema(
  {
    code: String,
    name: String,
    thumbnail: String,
    shortIntro: String,
    introduction: String,
    courses: [{ type: String, ref: "Course" }],
    programmes: [{ type: String, ref: "Programme" }],
    programmesUnderDev: [{ type: String, ref: "Programme" }],
    faculties: [{ type: String, ref: "Faculty" }],
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
