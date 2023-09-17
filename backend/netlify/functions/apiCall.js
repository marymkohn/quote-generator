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
const handleError_js_1 = require("../../helper/handleError.js");
const axios_1 = __importDefault(require("axios"));
exports.handler = function (event) {
    return __awaiter(this, void 0, void 0, function* () {
        const API_KEY = process.env.API_KEY;
        const userCategory = event.queryStringParameters.userCategory;
        try {
            let response = yield axios_1.default.get(`https://api.api-ninjas.com/v1/quotes?category=`, {
                headers: {
                    'Accept': 'application/json',
                    'Accept-Encoding': 'identity',
                    'X-Api-Key': API_KEY
                },
                params: { category: userCategory },
            });
            return {
                statusCode: 200,
                body: JSON.stringify(response.data),
            };
        }
        catch (err) {
            (0, handleError_js_1.handleError)(err);
            return {
                statusCode: 500,
                body: JSON.stringify({ error: err.message }),
            };
        }
    });
};
//# sourceMappingURL=apiCall.js.map