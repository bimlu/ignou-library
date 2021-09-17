"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_express_1 = require("apollo-server-express");
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
const schema = (0, apollo_server_express_1.gql) `
  type Query {
    _empty: String
  }

  type Mutation {
    _empty: String
  }

  type Subscription {
    _empty: String
  }

  ${user_1.default}
  ${Follow_1.default}
  ${Post_1.default}
  ${Like_1.default}
  ${Comment_1.default}
  ${Message_1.default}
  ${Notification_1.default}
  ${College_1.default}
  ${Course_1.default}
  ${Programme_1.default}
  ${Faculty_1.default}
  ${IGNOU_1.default}
  ${School_1.default}
  ${Student_1.default}
`;
exports.default = schema;
