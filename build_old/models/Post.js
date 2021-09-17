"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
/**
 * Post schema that has references to Assignment, User, Like and Comment schemas
 */
const postSchema = Schema({
    title: String,
    pdf: String,
    pdfPublicId: String,
    images: [String],
    imagePublicIds: [String],
    thumbnail: String,
    college: {
        type: Schema.Types.ObjectId,
        ref: 'College',
    },
    programme: {
        type: Schema.Types.ObjectId,
        ref: 'Programme',
    },
    course: {
        type: Schema.Types.ObjectId,
        ref: 'Course',
    },
    author: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    },
    likes: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Like',
        },
    ],
    likesCount: {
        type: Number,
        default: 0,
    },
    viewsCount: {
        type: Number,
        default: 0,
    },
    downloadsCount: {
        type: Number,
        default: 0,
    },
    comments: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Comment',
        },
    ],
}, {
    timestamps: true,
});
exports.default = mongoose_1.default.model('Post', postSchema);
