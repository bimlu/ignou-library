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
    level: String, // bachelor|master|doctoral
    termType: String, // semester|year
    termCount: Number, // 1-6
    image: String,
    imagePublicId: String,
    courses: [
      {
        type: Schema.Types.ObjectId,
        ref: "Course",
      },
    ],
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Programme", programmeSchema);
