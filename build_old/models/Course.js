"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
const blockSchema = new Schema({
    blockName: String,
    blockLink: String,
});
/**
 * Course schema that has references to College and Programme schema
 */
const courseSchema = Schema({
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
    studyMaterial: [blockSchema],
    programmes: [{ type: String, ref: "Programme" }],
    discipline: String,
}, {
    timestamps: true,
});
exports.default = mongoose_1.default.model("Course", courseSchema);
