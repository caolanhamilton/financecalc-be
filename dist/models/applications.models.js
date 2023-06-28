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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addUserApplication = exports.fetchApplicationsByUserId = void 0;
const connection_1 = __importDefault(require("../connection"));
function fetchApplicationsByUserId(sub) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const res = yield connection_1.default.query("SELECT * FROM public.applications WHERE user_id = $1", [sub]);
            return res.rows;
        }
        catch (error) {
            console.log("Error fetching applications from DB:", error);
            throw new Error("Error fetching applications from DB");
        }
    });
}
exports.fetchApplicationsByUserId = fetchApplicationsByUserId;
function addUserApplication(uid, application) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const res = yield connection_1.default.query("INSERT INTO applications(treatment_cost, deposit, loan_amount, monthly_payments, payment_length, apr, user_id) VALUES($1, $2, $3, $4, $5, $6, $7)", [
                application.treatment_cost,
                application.deposit,
                application.loan_amount,
                application.monthly_payments,
                application.payment_length,
                application.apr,
                uid,
            ]);
        }
        catch (error) {
            throw new Error("Error adding application to DB");
        }
    });
}
exports.addUserApplication = addUserApplication;
