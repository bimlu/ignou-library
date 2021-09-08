import mongoose from "mongoose";

const Schema = mongoose.Schema;

/**
 * Faculty schema
 */
const facultySchema = Schema(
  {
    code: String,
    name: String,
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Faculty", facultySchema);
