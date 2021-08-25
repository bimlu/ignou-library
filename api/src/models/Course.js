import mongoose from "mongoose";

const Schema = mongoose.Schema;

/**
 * Course schema that has references to College and Programme schema
 */
const courseSchema = Schema(
  {
    code: String,
    title: String,
    category: String, // compulsory|elective
    credits: Number,
    image: String,
    imagePublicId: String,
    programmes: [{ type: Schema.Types.ObjectId, ref: "Programme" }],
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Course", courseSchema);
