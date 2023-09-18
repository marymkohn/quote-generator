/**
 * Fetches a random quote based on the user's chosen category.
 * @param userCategory - The category chosen by the user.
 */
import { handleError } from "./handleError.js";
export async function fetchQuotes(userCategory) {
    try {
        let response = await axios.get(`/.netlify/functions/apiCall`, {
            params: { userCategory: userCategory },
        });
        return response.data[0];
    }
    catch (err) {
        handleError(err);
        return err.message;
    }
}
//# sourceMappingURL=fetchQuotes.js.map