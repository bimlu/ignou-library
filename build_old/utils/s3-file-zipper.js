"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.downloadFromS3AndZipToS3 = void 0;
const archiver_1 = __importDefault(require("archiver"));
const uuid_1 = require("uuid");
const aws_sdk_1 = __importDefault(require("aws-sdk"));
const stream = require('stream');
const s3_bucket_1 = require("./s3-bucket");
/**
 * download images from s3, zip them and upload back to s3 in different folder
 * @see https://stackoverflow.com/questions/51938654/how-to-pipe-an-archive-zip-to-an-s3-bucket
 */
aws_sdk_1.default.config.update({
    accessKeyId: process.env.AWS_ACCESS_ID,
    secretAccessKey: process.env.AWS_SECRET_KEY,
    region: process.env.AWS_REGION,
});
const s3 = new aws_sdk_1.default.S3({ region: process.env.AWS_REGION });
const downloadFromS3AndZipToS3 = async (files, folder) => {
    // Use promises to get all images from s3
    const promises = [];
    files.map((file) => {
        promises.push(s3
            .getObject({
            Bucket: process.env.S3_BUCKET_NAME,
            Key: file,
        })
            .promise());
    });
    // Define the ZIP target archive
    let archive = (0, archiver_1.default)('zip', {
        zlib: { lever: 9 }, // Sets the compression level
    });
    // upload stream pass
    const uploadStream = new stream.PassThrough();
    // Pipe!
    archive.pipe(uploadStream);
    archive.on('warning', function (err) {
        if (err.code === 'ENOENT') {
            // log warning
        }
        else {
            // throw error
            throw err;
        }
    });
    // Good practice to catch this error explicitly
    archive.on('error', function (err) {
        throw err;
    });
    // The actual archive is populated here
    Promise.all(promises).then((data) => {
        data.map((file, i) => {
            archive.append(file.Body, { name: `${(0, uuid_1.v4)()}.jpg` });
        });
        archive.finalize();
    });
    return (0, s3_bucket_1.uploadToS3BucketFromStream)(uploadStream, folder);
};
exports.downloadFromS3AndZipToS3 = downloadFromS3AndZipToS3;
