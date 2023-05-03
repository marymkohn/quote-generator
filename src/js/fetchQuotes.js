const apiUrl = "https://api.api-ninjas.com/v1/quotes?category=";
const apiKey = "TpCqkPr8iaHZUb/bUXKmBA==QQzQ2STCuoPv9TDt";

// Connecting to API
export async function getQuotes(userCategory) {
    let randomQuote;
    try {
        const categoryUrl = `${userCategory}`;
        const quoteJSON = await fetch(`${apiUrl}${categoryUrl}`, {
            headers: {
                'X-Api-Key': apiKey,
            },
        });
        const response = await quoteJSON.json();
        randomQuote = response[0];
        return randomQuote;
    } catch (err) {
        console.error(err);
    }
}