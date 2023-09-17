import { fetchQuotes } from './fetchQuotes.js';
import { copyQuote } from "./copyQuote.js";
(function setupListeners() {
    var quoteButton = document.getElementById('quote-button');
    var copyButton = document.getElementById('copy-button');
    var categorySelection = document.getElementById('category-selection');
    var randomQuote = { quote: '', author: '' };
    if (quoteButton && categorySelection) {
        quoteButton.addEventListener('click', function () {
            var userCategory = categorySelection.value;
            fetchQuotes(userCategory)
                .then(function (fetchedQuote) {
                randomQuote = fetchedQuote;
                if (copyButton) {
                    copyButton.onclick = function () { return copyQuote(randomQuote); };
                }
            })
                .catch(function (error) {
                console.error('Error fetching quotes:', error);
            });
        });
    }
})();
//# sourceMappingURL=listener.js.map