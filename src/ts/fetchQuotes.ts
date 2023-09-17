import { handleError } from "./handleError";
import { showQuote } from "./showQuote";

/**
 * Fetches a random quote based on the user's chosen category.
 * @param userCategory - The category chosen by the user.
 */
type Quote = {
    quote: string;
    author: string;
};

export async function fetchQuotes(userCategory: string): Promise<Quote> {
    try {
        const quotesResponse = await fetch('/api/quotes?category=' + userCategory);
        const randomQuote: Quote = await quotesResponse.json();
        showQuote(randomQuote);
        return randomQuote;
    } catch (err) {
        handleError(err);
        throw err;
    }
}