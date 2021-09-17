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
        ref: 'User',
    },
    updatedBy: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    },
    description: String,
    image: String,
    imagePublicId: String,
    verified: Boolean,
    programmes: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Programme',
        },
    ],
    programmesCount: {
        type: Number,
        default: 0,
    },
    students: [
        {
            type: Schema.Types.ObjectId,
            ref: 'User',
        },
    ],
    studentsCount: {
        type: Number,
        default: 0,
    },
}, {
    timestamps: true,
});
exports.default = mongoose_1.default.model('College', collegeSchema);
