import {quotes} from './dummyAPI.js';

// Utility Function: generates a random quote from the quotes array
const getRandom = (array) => {
		let index = Math.floor(Math.random() * array.length);
		return {
				text: array[index].text, author: array[index].author
		};
};

// DOM Functions
// generates the random quote
function showQuote() {
		const randomQuote = getRandom(quotes);
		document.getElementById('quote-text').innerHTML = `"${randomQuote.text}"`;
		document.getElementById('quote-author').innerHTML = `- ${randomQuote.author}`;
}
// copies the random quote

// event listener for generate button
const button = document.getElementById('quote-button');
button.addEventListener('click',showQuote);

// event listener for copy button
const copyButton = document.getElementById('copy-button');
copyButton.addEventListener('click',copyQuote);