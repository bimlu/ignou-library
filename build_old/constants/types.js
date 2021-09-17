"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Degree = exports.TermType = exports.UserRole = void 0;
var UserRole;
(function (UserRole) {
    UserRole[UserRole["User"] = 0] = "User";
    UserRole[UserRole["Moderator"] = 1] = "Moderator";
    UserRole[UserRole["Admin"] = 2] = "Admin";
    UserRole[UserRole["SuperAdmin"] = 3] = "SuperAdmin";
})(UserRole = exports.UserRole || (exports.UserRole = {}));
var TermType;
(function (TermType) {
    TermType[TermType["Quarter"] = 0] = "Quarter";
    TermType[TermType["Semester"] = 1] = "Semester";
    TermType[TermType["Year"] = 2] = "Year";
})(TermType = exports.TermType || (exports.TermType = {}));
var Degree;
(function (Degree) {
    Degree[Degree["Bachelor"] = 0] = "Bachelor";
    Degree[Degree["Master"] = 1] = "Master";
    Degree[Degree["Doctor"] = 2] = "Doctor";
    Degree[Degree["Diploma"] = 3] = "Diploma";
    Degree[Degree["Certificate"] = 4] = "Certificate";
})(Degree = exports.Degree || (exports.Degree = {}));
