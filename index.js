import {quotes} from './dummyAPI.js';

// Utility Function: generates a random quote from the quotes array
const getRandom = (array) => {
		let index = Math.floor(Math.random() * array.length);
		return {
				text: array[index].text, author: array[index].author
		};
};

// DOM Function
// generates the random quote
function showQuote() {
		const randomQuote = getRandom(quotes);
		document.getElementById('quote-text').innerHTML = `"${randomQuote.text}"`;
		document.getElementById('quote-author').innerHTML = `- ${randomQuote.author}`;
}
// event listener
// button - generate quote 
const generateButton = document.getElementById('quote-button');
generateButton.addEventListener('click',showQuote);

//DOM Function
// copies generated quote
function copyQuote() {
		const quoteText = document.getElementById('quote-text').innerText;
		const quoteAuthor = document.getElementById('quote-author').innerText;
		const fullQuote = `${quoteText} ${quoteAuthor}`;
		navigator.clipboard.writeText(fullQuote).then(() => {
				console.log('copied');
		}).catch(err => {
				console.error('Error: ', err);
		});
}
// copy quote button
const copyButton = document.getElementById('copy-button');
let copy= `${getRandom.toString()}`;
copyButton.addEventListener('click',copyQuote);
