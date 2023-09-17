"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleError = void 0;
/**
 * Centralized error handling function.
 * @param error - The error object to be handled.
 */
const showMessage_js_1 = require("./showMessage.js");
function handleError(error) {
    if (error instanceof Error) {
        console.error('An error occurred:', error.message);
        alert(error.message);
    }
    else {
        console.error('An unknown error occurred:', error);
    }
    console.error('An error occurred:', error);
    (0, showMessage_js_1.showMessage)('error-message', 'An error occurred. Please try again.', 3000);
}
exports.handleError = handleError;
//# sourceMappingURL=handleError.js.map