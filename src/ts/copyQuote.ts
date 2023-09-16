import { showMessage } from './showMessage';
import {handleError} from "./handleError";

/**
 * Copies the displayed quote to the clipboard.
 * @param randomQuote - An object containing quote and author.
 */
export function copyQuote(randomQuote: { quote: string; author: string; }) {
    const fullText = `"${randomQuote.quote}" -${randomQuote.author}`;
    navigator.clipboard.writeText(fullText).then(() => {
        showMessage('copy-message', 'Quote copied to clipboard!!', 2000);
    }).catch(err => {
        handleError(err);
    });
}


