/**
 * Copies the displayed quote to the clipboard.
 * @param randomQuote - An object containing quote and author.
 */
import { showMessage } from './showMessage.js';
import { handleError } from "./handleError.js";
export function copyQuote(randomQuote) {
    const fullText = `"${randomQuote.quote}" -${randomQuote.author}`;
    navigator.clipboard.writeText(fullText).then(() => {
        showMessage('copy-message', 'Quote copied to clipboard!!', 2000);
    }).catch(err => {
        handleError(err);
    });
}
//# sourceMappingURL=copyQuote.js.map