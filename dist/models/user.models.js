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
exports.addUser = void 0;
const connection_1 = __importDefault(require("../connection"));
function addUser(user) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const res = yield connection_1.default.query("INSERT INTO users(uid, first_name, second_name, email) VALUES($1, $2, $3, $4)", [user.sub, user.first_name, user.second_name, user.email]);
        }
        catch (error) {
            console.log(error);
            throw new Error("Error adding user to DB");
        }
    });
}
exports.addUser = addUser;
