import { handleError } from "./handleError";
import { showQuote } from "./showQuote";

/**
 * Fetches a random quote based on the user's chosen category.
 * @param userCategory - The category chosen by the user.
 */

export async function fetchQuotes(userCategory: string): Promise<void> {
    let randomQuote = { quote: '', author: '' };

    try {
        const quotesResponse = await fetch('/api/quotes?category=' + userCategory);
        const quotesData = await quotesResponse.json();
        const randomIndex = Math.floor(Math.random() * quotesData.length);
        randomQuote = quotesData[randomIndex];
        showQuote(randomQuote);
    } catch (err) {
        handleError(err);
    }
}