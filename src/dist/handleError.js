import { showMessage } from "./showMessage.js";
/**
 * Centralized error handling function.
 * @param error - The error object to be handled.
 */
export function handleError(error) {
    if (error instanceof Error) {
        console.error('An error occurred:', error.message);
    }
    else {
        console.error('An unknown error occurred:', error);
    }
    console.error('An error occurred:', error);
    showMessage('error-message', 'An error occurred. Please try again.', 3000);
}
//# sourceMappingURL=handleError.js.map