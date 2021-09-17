"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const passport_1 = __importDefault(require("passport"));
const router = (0, express_1.Router)();
router.get('/auth/facebook', passport_1.default.authenticate('facebook', { scope: ['email'] }));
router.get('/auth/facebook/callback', passport_1.default.authenticate('facebook', {
    successRedirect: process.env.FRONTEND_URL,
    failureRedirect: process.env.FRONTEND_URL,
}));
router.get('/auth/google', passport_1.default.authenticate('google', { scope: 'profile email' }));
router.get('/auth/google/callback', passport_1.default.authenticate('google', { failureRedirect: process.env.FRONTEND_URL }), (req, res) => {
    res.redirect(process.env.FRONTEND_URL);
});
router.get('/auth/github', passport_1.default.authenticate('github', { scope: ['user:email'] }));
router.get('/auth/github/callback', passport_1.default.authenticate('github', { failureRedirect: process.env.FRONTEND_URL }), (req, res) => {
    res.redirect(process.env.FRONTEND_URL);
});
router.get('/auth/signout', (req, res) => {
    req.logout();
    res.redirect(process.env.FRONTEND_URL + '/auth');
});
exports.default = router;
