"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.initPassport = void 0;
const passport_1 = __importDefault(require("passport"));
const passport_facebook_1 = require("passport-facebook");
const passport_google_oauth20_1 = require("passport-google-oauth20");
const passport_github2_1 = require("passport-github2");
const social_profile_1 = require("./utils/social-profile");
const user_1 = __importDefault(require("./models/user"));
var SocialProvider;
(function (SocialProvider) {
    SocialProvider["Facebook"] = "facebook";
    SocialProvider["Google"] = "google";
    SocialProvider["Github"] = "github";
})(SocialProvider || (SocialProvider = {}));
const createOrUpdateUser = async (profile, provider) => {
    if (profile.email || profile.username) {
        const user = await user_1.default.findOne({ $or: [{ email: profile.email }, { username: profile.username }] });
        if (user) {
            user[`${provider}Id`] = profile.id;
            await user.save();
            return user;
        }
    }
    const user = new user_1.default(profile);
    await user.save();
    return user;
};
const initPassport = async () => {
    passport_1.default.serializeUser((user, done) => {
        done(null, user);
    });
    passport_1.default.deserializeUser(async (user, done) => {
        if (user && user._id && user.createdAt) {
            return done(null, user);
        }
        try {
            const authUser = await user_1.default.findById(user._id, (err, user) => done(err, user));
            return done(null, authUser);
        }
        catch (error) {
            return done(error);
        }
    });
    passport_1.default.use(new passport_facebook_1.Strategy({
        clientID: process.env.FACEBOOK_APP_ID,
        clientSecret: process.env.FACEBOOK_APP_SECRET,
        callbackURL: `${process.env.API_URL}/auth/facebook/callback`,
        profileFields: [
            'id',
            'displayName',
            'email',
            'picture.type(large)',
            'about',
            'cover',
            'first_name',
            'last_name',
            'website',
        ],
    }, async (accessToken, refreshToken, profile, done) => {
        const user = await user_1.default.findOne({ facebookId: profile.id });
        if (user) {
            return done(null, user);
        }
        try {
            const userProfile = await (0, social_profile_1.getUserInfoFromFacebook)(profile);
            const user = await createOrUpdateUser(userProfile, SocialProvider.Facebook);
            done(null, user);
        }
        catch (error) {
            done(error);
        }
    }));
    passport_1.default.use(new passport_google_oauth20_1.Strategy({
        clientID: process.env.GOOGLE_APP_ID,
        clientSecret: process.env.GOOGLE_APP_SECRET,
        callbackURL: `${process.env.API_URL}/auth/google/callback`,
    }, async (accessToken, refreshToken, profile, done) => {
        const user = await user_1.default.findOne({ googleId: profile.id });
        if (user) {
            done(null, user);
            return;
        }
        try {
            const userProfile = await (0, social_profile_1.getUserInfoFromGoogle)(profile);
            const user = await createOrUpdateUser(userProfile, SocialProvider.Google);
            done(null, user);
        }
        catch (error) {
            done(error);
        }
    }));
    passport_1.default.use(new passport_github2_1.Strategy({
        clientID: process.env.GITHUB_APP_ID,
        clientSecret: process.env.GITHUB_APP_SECRET,
        callbackURL: `${process.env.API_URL}/auth/github/callback`,
        scope: ['user'],
    }, async (accessToken, refreshToken, profile, done) => {
        const user = await user_1.default.findOne({ githubId: profile.id });
        if (user) {
            done(null, user);
            return;
        }
        try {
            const userProfile = await (0, social_profile_1.getUserInfoFromGithub)(profile);
            const user = await createOrUpdateUser(userProfile, SocialProvider.Github);
            done(null, user);
        }
        catch (error) {
            done(error);
        }
    }));
};
exports.initPassport = initPassport;
