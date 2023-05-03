import { getQuotes } from './fetchQuotes.js';
import { showQuote } from './showQuote.js';
import { copyQuote } from './copyQuote.js';

// Event listener - select category
const generateQuote = document.getElementById('quote-button');

// Event listener - copy
const copyButton = document.getElementById('copy-button');

// Event listener - generate quote
generateQuote.addEventListener('click', () => {
		const selectedCategory = document.getElementById('category-selection');
		const userCategory = selectedCategory.value;
		getQuotes(userCategory).then(randomQuote => {
				showQuote(randomQuote);
				copyButton.onclick = () => copyQuote(randomQuote);
		});
});




