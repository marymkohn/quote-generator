import {getQuotes} from "./fetchQuotes.js";
import {showQuote} from "./fetchQuotes.js";

// event listener - takes category selection on 'generate quote' click
const generateQuote = document.getElementById('quote-button');
generateQuote.addEventListener('click', () => {
		const selectedCategory = document.getElementById('category-selection');
		const userCategory = selectedCategory.value;
		getQuotes(userCategory).then(randomQuote => {
				console.log('Random Quote: ', randomQuote);
				showQuote(randomQuote);
	});
});

// event listener - copies the quote and author
const copyButton = document.getElementById('copy-button');
copyButton.addEventListener('click',copyQuote);

// copies the displayed quote
function copyQuote() {
		const quote = document.getElementById('quote').innerText;
		const author = document.getElementById('author').innerText;
		const fullQuote = `${quote} ${author}`;

		// alerts user that the quote was copied
		navigator.clipboard.writeText(fullQuote).then(() => {
				const copyMessage = document.getElementById('copy-message');
				copyMessage.innerHTML = 'Copied!';
				copyMessage.style.display = 'inline';

				// Hide the alert after 2 seconds
				setTimeout(() => {
						copyMessage.style.display = 'none';
				}, 2000);
		}).catch(err => {
				console.error('Error: ', err);
		});
}