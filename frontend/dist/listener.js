/**
 * Sets up event listeners for the quote application.
 */
import { fetchQuotes } from './fetchQuotes.js';
import { copyQuote } from "./copyQuote.js";
import { showQuote } from "./showQuote.js";

(function setupListeners() {
    const quoteButton = document.getElementById('quote-button');
    const copyButton = document.getElementById('copy-button');
    const categorySelection = document.getElementById('category-selection');
    let randomQuote = { quote: '', author: '' };
    if (quoteButton && categorySelection) {
        quoteButton.addEventListener('click', () => {
            const userCategory = categorySelection.value;
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
//# sourceMappingURL=listener.js.map