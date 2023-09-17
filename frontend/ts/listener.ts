/**
 * Sets up event listeners for the quote application.
 */
import { fetchQuotes } from './fetchQuotes.js';
import { copyQuote } from "./copyQuote.js";
import {showQuote} from "./showQuote";

type Quote = {
    quote: string;
    author: string;
};

(function setupListeners(): void {
    const quoteButton = document.getElementById('quote-button');
    const copyButton = document.getElementById('copy-button');
    const categorySelection = document.getElementById('category-selection') as HTMLSelectElement;
    let randomQuote: Quote = { quote: '', author: '' };

    if (quoteButton && categorySelection) {
        quoteButton.addEventListener('click', () => {
            const userCategory: string = categorySelection.value;
            fetchQuotes(userCategory)
                .then(fetchedQuote => {
                    randomQuote = fetchedQuote;
                    showQuote(randomQuote);
                    if (copyButton) {
                        copyButton.onclick = () => copyQuote(randomQuote);
                    }
                })
                .catch(error => {
                    console.error('Error fetching quotes:', error);
                });
        });
    }
})();