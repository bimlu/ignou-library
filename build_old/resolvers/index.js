"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_1 = __importDefault(require("./user"));
const follow_1 = __importDefault(require("./follow"));
const post_1 = __importDefault(require("./post"));
const like_1 = __importDefault(require("./like"));
const comment_1 = __importDefault(require("./comment"));
const message_1 = __importDefault(require("./message"));
const notification_1 = __importDefault(require("./notification"));
const course_1 = __importDefault(require("./course"));
const college_1 = __importDefault(require("./college"));
const programme_1 = __importDefault(require("./programme"));
exports.default = [
    user_1.default,
    follow_1.default,
    post_1.default,
    like_1.default,
    comment_1.default,
    message_1.default,
    notification_1.default,
    course_1.default,
    college_1.default,
    programme_1.default,
];
