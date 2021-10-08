import mongoose from "mongoose";

const Schema = mongoose.Schema;

const unitSchema = new Schema({
  unitCode: String,
  unitName: String,
  unitLink: String,
});

const blockSchema = new Schema({
  blockCode: String,
  blockName: String,
  blockLink: String,
  blockUnits: [unitSchema],
});

/**
 * Course schema that has references to College and Programme schema
 */
const courseSchema = Schema(
  {
    // name can only contain lowercase words separated by '-'
    name: {
      type: String,
      required: true,
    },
    fullName: {
      type: String,
      required: true,
    },
    createdBy: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    updatedBy: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    description: String,
    image: String,
    imagePublicId: String,
    verified: Boolean,
    college: {
      type: Schema.Types.ObjectId,
      ref: "College",
    },
    programme: {
      type: Schema.Types.ObjectId,
      ref: "Programme",
    },
    // term e.g. 1, 2, 3... (semester/year)
    term: {
      type: Number,
      required: true,
      default: 1,
    },
    posts: [
      {
        type: Schema.Types.ObjectId,
        ref: "Post",
      },
    ],
    postsCount: {
      type: Number,
      default: 0,
    },
    students: [
      {
        type: Schema.Types.ObjectId,
        ref: "User",
      },
    ],
    studentsCount: {
      type: Number,
      default: 0,
    },

    code: String,
    title: String,
    programmes: [{ type: Schema.Types.ObjectId, ref: "Programme" }],
    discipline: String,
    collegeCode: String,
    programmeCode: String,
    programmeCodes: [String],
    courseLink: String,
    courseBlocks: [blockSchema],
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Course", courseSchema);
