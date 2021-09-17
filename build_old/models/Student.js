"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
/**
 * Student schema that has references to Programme, Course schemas
 */
const studentSchema = new Schema({
    firstName: String,
    lastName: String,
    enrollmentNumber: { type: String, unique: true },
    enrollmentDate: Date,
    dateOfBirth: Date,
    mobileNumber: String,
    email: { type: String, unique: true },
    password: String,
    address: String,
    district: String,
    state: String,
    pincode: String,
    country: String,
    programmes: [{ type: Schema.Types.ObjectId, ref: "Programme" }],
    courses: [{ type: Schema.Types.ObjectId, ref: "Course" }],
    studyCenter: String,
    username: { type: String, unique: true },
}, {
    timestamps: true,
});
exports.default = mongoose_1.default.model("Student", studentSchema);
