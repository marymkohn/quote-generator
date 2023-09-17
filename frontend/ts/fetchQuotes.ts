/**
 * Fetches a random quote based on the user's chosen category.
 * @param userCategory - The category chosen by the user.
 */

import {handleError} from "./handleError.js";
import axios from "axios";

type Quote = {
    quote: string;
    author: string;
};

export async function fetchQuotes(userCategory: string): Promise<Quote> {
    try {
        let response = await axios.get(`/.netlify/functions/apiCall`, {
            params: { userCategory: userCategory },
        });
        return response.data;
    } catch (err: any) {
        handleError(err);
        return err.message;
    }
}
