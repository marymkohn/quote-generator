"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.showMessage = void 0;
/**
 * Utility function to display messages to the user.
 * @param elementId - The id of the HTML element where the message will be displayed.
 * @param message - The message to display.
 * @param duration - The time in milliseconds the message will be displayed for.
 */
function showMessage(elementId, message, duration) {
    const element = document.getElementById(elementId);
    if (element) {
        element.innerHTML = message;
        element.style.display = 'inline';
        setTimeout(() => {
            element.style.display = 'none';
        }, duration);
    }
}
exports.showMessage = showMessage;
//# sourceMappingURL=showMessage.js.map