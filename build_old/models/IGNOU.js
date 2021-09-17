"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
/**
 * College schema
 */
const collegeSchema = Schema({
    name: String,
    fullName: String,
    preamble: String,
    visionAndMission: String,
    actAndStatutes: String,
    ordinanceAndRegulations: String,
    standardsOfExcellenceInODL: String,
    stratigies: String,
    gallery: [String],
    schools: [
        {
            type: String,
            ref: "School",
        },
    ],
    programmes: [
        {
            type: String,
            ref: "Programme",
        },
    ],
    users: [
        {
            type: String,
            ref: "User",
        },
    ],
}, {
    timestamps: true,
});
exports.default = mongoose_1.default.model("College", collegeSchema);
