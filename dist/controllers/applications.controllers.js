"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.postApplication = exports.getApplicationsByUserId = void 0;
const applications_models_1 = require("../models/applications.models");
function getApplicationsByUserId(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        console.log(req);
        try {
            const applications = yield (0, applications_models_1.fetchApplicationsByUserId)(req.cognito.sub);
            res.status(200).send({ applications });
        }
        catch (error) {
            res.status(500).json({
                message: "An error occurred while fetching the data.",
            });
        }
    });
}
exports.getApplicationsByUserId = getApplicationsByUserId;
function postApplication(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        console.log(req.body, req.cognito.sub);
        try {
            yield (0, applications_models_1.addUserApplication)(req.cognito.sub, req.body.application);
            res.status(204).send();
        }
        catch (error) {
            res.status(500).json({
                status: "error",
                message: "An error occurred while fetching the data.",
            });
        }
    });
}
exports.postApplication = postApplication;
