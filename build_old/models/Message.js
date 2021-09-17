"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
/**
 * Message schema that has reference to user schema
 */
const messageSchema = Schema({
    sender: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    },
    receiver: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    },
    message: String,
    seen: {
        type: Boolean,
        default: false,
    },
}, { timestamps: true });
exports.default = mongoose_1.default.model('Message', messageSchema);
