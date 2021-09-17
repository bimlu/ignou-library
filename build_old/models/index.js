"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const College_1 = __importDefault(require("./College"));
const Comment_1 = __importDefault(require("./Comment"));
const Course_1 = __importDefault(require("./Course"));
const Faculty_1 = __importDefault(require("./Faculty"));
const Follow_1 = __importDefault(require("./Follow"));
const IGNOU_1 = __importDefault(require("./IGNOU"));
const Like_1 = __importDefault(require("./Like"));
const Message_1 = __importDefault(require("./Message"));
const Notification_1 = __importDefault(require("./Notification"));
const Post_1 = __importDefault(require("./Post"));
const Programme_1 = __importDefault(require("./Programme"));
const School_1 = __importDefault(require("./School"));
const Student_1 = __importDefault(require("./Student"));
const user_1 = __importDefault(require("./user"));
exports.default = {
    User: user_1.default,
    Follow: Follow_1.default,
    Post: Post_1.default,
    Like: Like_1.default,
    Comment: Comment_1.default,
    Message: Message_1.default,
    Notification: Notification_1.default,
    College: College_1.default,
    Programme: Programme_1.default,
    Course: Course_1.default,
    Faculty: Faculty_1.default,
    School: School_1.default,
    IGNOU: IGNOU_1.default,
    Student: Student_1.default,
};
