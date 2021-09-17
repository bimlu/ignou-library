"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
/**
 * Follow schema that has references to User schema
 */
const followSchema = Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    },
    follower: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    },
}, {
    timestamps: true,
});
exports.default = mongoose_1.default.model('Follow', followSchema);
