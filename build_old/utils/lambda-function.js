"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.invokeLambdaToZipImages = void 0;
const aws_sdk_1 = __importDefault(require("aws-sdk"));
aws_sdk_1.default.config.update({
    accessKeyId: process.env.AWS_ACCESS_ID,
    secretAccessKey: process.env.AWS_SECRET_KEY,
    region: 'ap-south-1',
});
const lambda = new aws_sdk_1.default.Lambda();
const invokeLambdaToZipImages = async (images) => {
    const params = {
        FunctionName: 'test-function',
        Payload: JSON.stringify(images),
    };
    return new Promise((resolve, reject) => {
        lambda.invoke(params, (error, result) => {
            if (result) {
                console.log('***', 'Invoked lambda server');
                resolve(result);
            }
            else {
                console.log(error);
                reject(error);
            }
        });
    });
};
exports.invokeLambdaToZipImages = invokeLambdaToZipImages;
