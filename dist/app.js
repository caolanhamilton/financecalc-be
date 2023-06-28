"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const users_controllers_1 = require("./controllers/users.controllers");
const applications_controllers_1 = require("./controllers/applications.controllers");
const aws_cognito_express_1 = require("aws-cognito-express");
const checkCognitoObjectExists_1 = require("./custommiddleware/checkCognitoObjectExists");
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
app.options("/applications", (0, cors_1.default)());
const authConfig = {
    region: "us-east-1",
    userPoolId: "us-east-1_kvmvO3mcG",
    tokenUse: ["id", "access"],
    audience: ["33bt19dahld5eq9b8t9qavno6o"],
};
app.use((req, res, next) => {
    req.path === "/users" && req.method == "GET"
        ? next()
        : (0, aws_cognito_express_1.authenticate)(authConfig)(req, res, next);
});
app.use(checkCognitoObjectExists_1.checkCognitoObjectExists);
app.get("/applications", applications_controllers_1.getApplicationsByUserId);
app.post("/applications", applications_controllers_1.postApplication);
app.post("/users", users_controllers_1.postUser); // setup cors for this to only allow calls from la
app.use((0, aws_cognito_express_1.authenticationError)());
exports.default = app;
