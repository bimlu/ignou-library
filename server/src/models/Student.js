import mongoose from "mongoose";

const Schema = mongoose.Schema;

/**
 * Student schema that has references to Programme, Course schemas
 */
const studentSchema = new Schema(
  {
    firstName: String,
    middlename: String,
    lastName: String,
    enrollmentNumber: String,
    enrollmentDate: Date,
    dateOfBirth: Date,
    mobileNumber: String,
    email: { type: String, unique: true },
    password: String,
    address: String,
    district: String,
    state: String,
    pincode: Number,
    country: String,
    programmes: [{ type: Schema.Types.ObjectId, ref: "Programme" }],
    courses: [{ type: Schema.Types.ObjectId, ref: "Course" }],
    studyCenter: String,
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("User", schemaSchema);
