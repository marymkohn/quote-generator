import { showMessage } from './showMessage.js';
import { handleError } from "./handleError.js";
/**
 * Copies the displayed quote to the clipboard.
 * @param randomQuote - An object containing quote and author.
 */
export function copyQuote(randomQuote) {
    var fullText = "\"".concat(randomQuote.quote, "\" -").concat(randomQuote.author);
    navigator.clipboard.writeText(fullText).then(function () {
        showMessage('copy-message', 'Quote copied to clipboard!!', 2000);
    }).catch(function (err) {
        handleError(err);
    });
}
//# sourceMappingURL=copyQuote.js.map