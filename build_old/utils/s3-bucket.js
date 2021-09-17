"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deletePDFFromS3Bucket = exports.uploadPDFToS3Bucket = exports.uploadToS3BucketFromStream = exports.deleteFromS3Bucket = exports.uploadToS3Bucket = void 0;
const aws_sdk_1 = __importDefault(require("aws-sdk"));
const uuid_1 = require("uuid");
aws_sdk_1.default.config.update({
    accessKeyId: process.env.AWS_ACCESS_ID,
    secretAccessKey: process.env.AWS_SECRET_KEY,
    region: process.env.AWS_REGION,
});
const s3 = new aws_sdk_1.default.S3();
const uploadToS3Bucket = async (stream, folder, transformer) => {
    const options = {
        Bucket: process.env.S3_BUCKET_NAME,
        Key: `${folder}/${(0, uuid_1.v4)()}.jpg`,
        Body: stream.pipe(transformer),
        ContentType: 'image/jpeg',
    };
    return new Promise((resolve, reject) => {
        s3.upload(options, (error, result) => {
            if (result) {
                console.log('***', `Successfully uploaded image to S3 at ${result.Location}`);
                resolve(result);
            }
            else {
                console.log('***', `Failed to upload image to S3. ${error.message}`);
                reject(error);
            }
        });
    });
};
exports.uploadToS3Bucket = uploadToS3Bucket;
const deleteFromS3Bucket = (imagePublicId) => {
    const options = {
        Bucket: process.env.S3_BUCKET_NAME,
        Key: imagePublicId,
    };
    return new Promise((resolve, reject) => {
        s3.deleteObject(options, (error, result) => {
            if (result) {
                console.log('***', `Successfully deleted image from S3`);
                resolve(result);
            }
            else {
                console.log('***', `Failed to delete image from S3. ${error.message}`);
                reject(error);
            }
        });
    });
};
exports.deleteFromS3Bucket = deleteFromS3Bucket;
const uploadToS3BucketFromStream = (pass, folder) => {
    const options = {
        Bucket: process.env.S3_BUCKET_NAME,
        Key: `${folder}/${(0, uuid_1.v4)()}.zip`,
        Body: pass,
        ContentType: 'application/zip',
    };
    return s3.upload(options).promise();
};
exports.uploadToS3BucketFromStream = uploadToS3BucketFromStream;
const uploadPDFToS3Bucket = async (stream, folder, fileName) => {
    const fileExt = fileName.split('.').pop();
    const options = {
        Bucket: process.env.S3_BUCKET_NAME,
        Key: `${folder}/${(0, uuid_1.v4)()}.${fileExt}`,
        Body: stream,
        ContentType: 'application/pdf;application/msword',
        ContentDisposition: `attachment;filename=${fileName}`,
    };
    return new Promise((resolve, reject) => {
        s3.upload(options, (error, result) => {
            if (result) {
                console.log('***', `Successfully uploaded pdf to S3 at ${result.Location}`);
                resolve(result);
            }
            else {
                console.log('***', `Failed to upload pdf to S3. ${error.message}`);
                reject(error);
            }
        });
    });
};
exports.uploadPDFToS3Bucket = uploadPDFToS3Bucket;
const deletePDFFromS3Bucket = (pdfPublicId) => {
    const options = {
        Bucket: process.env.S3_BUCKET_NAME,
        Key: pdfPublicId,
    };
    return new Promise((resolve, reject) => {
        s3.deleteObject(options, (error, result) => {
            if (result) {
                console.log('***', `Successfully deleted pdf from S3`);
                resolve(result);
            }
            else {
                console.log('***', `Failed to delete pdf from S3. ${error.message}`);
                reject(error);
            }
        });
    });
};
exports.deletePDFFromS3Bucket = deletePDFFromS3Bucket;
