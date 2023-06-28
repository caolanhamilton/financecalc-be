"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkCognitoObjectExists = void 0;
const checkCognitoObjectExists = (req, res, next) => {
    if (!req.cognito || !req.cognito.sub) {
        return res.status(401).send({
            message: "Unauthorized",
        });
    }
    next();
};
exports.checkCognitoObjectExists = checkCognitoObjectExists;
