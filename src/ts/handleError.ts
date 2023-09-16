import {showMessage} from "./showMessage";

/**
 * Centralized error handling function.
 * @param error - The error object to be handled.
 */

export function handleError(error: unknown): void {
    if (error instanceof Error) {
        console.error('An error occurred:', error.message);
    } else {
        console.error('An unknown error occurred:', error);
    }
    console.error('An error occurred:', error);
    showMessage('error-message', 'An error occurred. Please try again.', 3000);
}