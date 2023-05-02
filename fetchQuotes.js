import {showQuote} from "./index.js";

const apiUrl = "https://api.api-ninjas.com/v1/quotes/";
const apiKey = "";

// calling the quotes API async
export async function getQuotes (userCategory) {
    let randomQuote;

    try {
        const categoryUrl = `?category=${userCategory}`;
        const quoteJSON = await fetch(`${apiUrl}${categoryUrl}${apiKey}`);
        randomQuote = await quoteJSON.json();
        return randomQuote;

    } catch (err) {
        console.error(err);
    }
}