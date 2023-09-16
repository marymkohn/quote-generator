import { handleError } from "./handleError";
import { showQuote } from "./showQuote";

// TODO: store the API key in a .env file
const apiUrl = "https://api.api-ninjas.com/v1/quotes?category=";
const apiKey = "REPLACE_WITH_API_KEY";

/**
 * Fetches a random quote based on the user's chosen category.
 * @param userCategory - The category chosen by the user.
 */

export async function fetchQuotes(userCategory: string): Promise<void> {
    let randomQuote = { quote: '', author: '' };

    try {
        const quotesResponse = await fetch(apiUrl + userCategory, {
            headers: {
                'X-Api-Key': apiKey,
            },
        });

        const quotesData = await quotesResponse.json();
        const randomIndex = Math.floor(Math.random() * quotesData.length);
        randomQuote = quotesData[randomIndex];
        showQuote(randomQuote);
    } catch (err) {
        handleError(err);
    }
}
