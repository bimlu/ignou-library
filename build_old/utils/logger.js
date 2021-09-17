"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.logger = void 0;
const winston_1 = __importDefault(require("winston"));
const options = {
    file: {
        level: 'info',
        filename: 'logs/app.log',
        handleExceptions: true,
        json: true,
        maxsize: 5242880,
        maxFiles: 5,
        colorize: false,
    },
    console: {
        level: 'debug',
        handleExceptions: true,
        json: false,
        colorize: true,
    },
};
exports.logger = winston_1.default.createLogger({
    levels: winston_1.default.config.npm.levels,
    transports: [new winston_1.default.transports.File(options.file), new winston_1.default.transports.Console(options.console)],
    exitOnError: false,
});
