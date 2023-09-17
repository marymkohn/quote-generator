/**
 * Utility function to display messages to the user.
 * @param elementId - The id of the HTML element where the message will be displayed.
 * @param message - The message to display.
 * @param duration - The time in milliseconds the message will be displayed for.
 */
export function showMessage(elementId, message, duration) {
    var element = document.getElementById(elementId);
    if (element) {
        element.innerHTML = message;
        element.style.display = 'inline';
        setTimeout(function () {
            element.style.display = 'none';
        }, duration);
    }
}
//# sourceMappingURL=showMessage.js.map