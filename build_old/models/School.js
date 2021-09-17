"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
/**
 * School schema that has references to College schema
 */
const schoolSchema = Schema({
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
}, {
    timestamps: true,
});
exports.default = mongoose_1.default.model("School", schoolSchema);
