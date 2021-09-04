import mongoose from "mongoose";

const Schema = mongoose.Schema;

/**
 * Programme schema that has references to College schema
 */
const programmeSchema = Schema(
  {
    code: String,
    title: String,
    type: String, // degree|certificate|diploma
    deliveryMode: String, // distance|online|regular
    level: String, // bachelor|master|diploma|pgDiploma|pgCertificate
    termType: String, // semester|year
    termCount: Number, // 1-6
    courses: [
      {
        type: Schema.Types.ObjectId,
        ref: "Course",
      },
    ],
    fee: String,
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Programme", programmeSchema);
