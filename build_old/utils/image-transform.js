"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.transformer = void 0;
const sharp_1 = __importDefault(require("sharp"));
// https://sharp.pixelplumbing.com/api-resize
// https://medium.com/javascript-in-plain-english/using-sharp-in-nodejs-to-output-resize-and-crop-images-on-the-fly-f8b150989760
const transformer = ({ width = 600, quality = 85 }) => {
    return (0, sharp_1.default)().resize({ width }).toFormat('jpg', { quality });
};
exports.transformer = transformer;
