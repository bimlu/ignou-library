"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
/**
 * Notification schema that has references to User, Like, Follow and Comment schemas
 */
const notificationSchema = Schema({
    author: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    },
    post: Schema.Types.ObjectId,
    like: {
        type: Schema.Types.ObjectId,
        ref: 'Like',
    },
    follow: {
        type: Schema.Types.ObjectId,
        ref: 'Follow',
    },
    comment: {
        type: Schema.Types.ObjectId,
        ref: 'Comment',
    },
    seen: {
        type: Boolean,
        default: false,
    },
}, {
    timestamps: true,
});
exports.default = mongoose_1.default.model('Notification', notificationSchema);
