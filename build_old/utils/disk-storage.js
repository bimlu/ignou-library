"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteImageFromDisk = exports.saveImageToDisk = void 0;
const uuid_1 = require("uuid");
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
// fs.mkdir recursively create any directories in a path that don't exist,
// and ignore ones that do.
// https://stackoverflow.com/questions/21194934/how-to-create-a-directory-if-it-doesnt-exist-using-node-js
const saveImageToDisk = (stream, folder, filename, imagePublicId) => {
    let imageDir;
    // if imagePublicId param is presented we should overwrite the image
    if (imagePublicId) {
        imageDir = path_1.default.resolve(__dirname, '../uploads');
        stream.pipe(fs_1.default.createWriteStream(`${imageDir}/${imagePublicId}`));
    }
    else {
        imageDir = path_1.default.resolve(__dirname, '../uploads', folder);
        filename = `${(0, uuid_1.v4)()}.${filename}`;
        fs_1.default.mkdir(imageDir, { recursive: true }, (err) => {
            if (err)
                throw err;
            // pipe stream to imagePath
            stream.pipe(fs_1.default.createWriteStream(`${imageDir}/${filename}`));
        });
        imagePublicId = `${folder}/${filename}`;
    }
    // return image url string and public_id for database to save
    return {
        secure_url: `${process.env.API_URL}/uploads/${imagePublicId}`,
        public_id: imagePublicId,
    };
};
exports.saveImageToDisk = saveImageToDisk;
const deleteImageFromDisk = (imagePublicId) => {
    const imagePath = path_1.default.resolve(__dirname, '../uploads', imagePublicId);
    fs_1.default.unlink(imagePath, (err) => {
        if (err)
            throw err;
    });
    return {
        result: 'ok',
    };
};
exports.deleteImageFromDisk = deleteImageFromDisk;
