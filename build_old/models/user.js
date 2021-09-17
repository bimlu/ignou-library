"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const types_1 = require("../constants/types");
const Schema = mongoose_1.default.Schema;
/**
 * User schema that has references to Post, Like, Comment, Follow schemas
 */
const userSchema = new Schema({
    role: {
        type: types_1.UserRole,
        required: true,
        default: types_1.UserRole.User,
    },
    fullName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        lowercase: true,
        trim: true,
        unique: true,
    },
    username: {
        type: String,
        lowercase: true,
        trim: true,
        unique: true,
    },
    facebookId: String,
    googleId: String,
    githubId: String,
    twitterId: String,
    image: String,
    imagePublicId: String,
    about: String,
    website: String,
    coverImage: String,
    coverImagePublicId: String,
    isOnline: {
        type: Boolean,
        default: false,
    },
    posts: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Post',
        },
    ],
    likes: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Like',
        },
    ],
    comments: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Comment',
        },
    ],
    followers: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Follow',
        },
    ],
    following: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Follow',
        },
    ],
    notifications: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Notification',
        },
    ],
    messages: [
        {
            type: Schema.Types.ObjectId,
            ref: 'User',
        },
    ],
    college: {
        type: Schema.Types.ObjectId,
        ref: 'College',
    },
    programme: {
        type: Schema.Types.ObjectId,
        ref: 'Programme',
    },
    courses: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Course',
        },
    ],
}, {
    timestamps: true,
});
exports.default = mongoose_1.default.model('User', userSchema);
