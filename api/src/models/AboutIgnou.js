import mongoose from "mongoose";

const Schema = mongoose.Schema;

/**
 * aboutIgnou schema
 */
const aboutIgnouSchema = Schema(
  {
    preamble: String,
    visionAndMission: String,
    actAndStatutes: String,
    ordinanceAndRegulations: String,
    standardsOfExcellenceInODL: String,
    stratigies: String,
    gallery: [String],
    schools: [
      {
        type: Schema.Types.ObjectId,
        ref: "School",
      },
    ],
    programmes: [
      {
        type: Schema.Types.ObjectId,
        ref: "Programme",
      },
    ],
    students: [
      {
        type: Schema.Types.ObjectId,
        ref: "Student",
      },
    ],
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("AboutIgnou", aboutIgnouSchema);
