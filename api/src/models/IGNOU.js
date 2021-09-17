import mongoose from "mongoose";

const Schema = mongoose.Schema;

/**
 * College schema
 */
const collegeSchema = Schema(
  {
    name: String,
    fullName: String,
    preamble: String,
    visionAndMission: String,
    actAndStatutes: String,
    ordinanceAndRegulations: String,
    standardsOfExcellenceInODL: String,
    stratigies: String,
    gallery: [String],
    schools: [
      {
        type: String,
        ref: "School",
      },
    ],
    programmes: [
      {
        type: String,
        ref: "Programme",
      },
    ],
    users: [
      {
        type: String,
        ref: "User",
      },
    ],
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("College", collegeSchema);
