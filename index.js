import quotes from "./dummyAPI.js";

// you can access individual quotes from the quotes array like this:
// console.log(quotes[0].text); // outputs the text of the quote
// console.log(quotes[0].author); // outputs the author of the quote


// your job is to use DOM manipulation to display a random quote in the index.html page that is retrieved from the quotes array


// generates a random number
const getRandom = (array) => {
		return Math.floor(Math.random() * array.length);
};
// gets a random index
const randomIndex = getRandom(quotes);

const index = randomIndex;
console.log(quotes[index].text);
console.log(quotes[index].author);


