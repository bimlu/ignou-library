"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendEmail = void 0;
const nodemailer_1 = __importDefault(require("nodemailer"));
const { MAIL_SERVICE, MAIL_USER, MAIL_PASS } = process.env;
/**
 * Creates transporter object that will help us to send emails
 */
const transporter = nodemailer_1.default.createTransport({
    service: MAIL_SERVICE,
    auth: {
        user: MAIL_USER,
        pass: MAIL_PASS,
    },
});
/**
 *  Sends an email to user
 *
 * @param {string} to email address where to send mail
 * @param {string} subject of the email
 * @param {string} html content of the email
 */
const sendEmail = ({ to, subject, html }) => {
    return new Promise((resolve, reject) => {
        const options = { from: MAIL_USER, to, subject, html };
        return transporter
            .sendMail(options)
            .then((response) => {
            resolve(response.data);
        })
            .catch((error) => {
            reject(error);
        });
    });
};
exports.sendEmail = sendEmail;
