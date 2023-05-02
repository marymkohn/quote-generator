const apiUrl = "https://api.api-ninjas.com/v1/quotes?category=";
const apiKey = "TpCqkPr8iaHZUb/bUXKmBA==QQzQ2STCuoPv9TDt";

// calls the API, gets a random quote from the API
export function showQuote(randomQuote) {
    if (randomQuote) {
        const showText = document.getElementById('quote');
        const showAuthor = document.getElementById('author');
        showText.innerHTML = randomQuote.quote;
        showAuthor.innerHTML = randomQuote.author;
    } else {
        console.log("Error: randomQuote is undefined");
    }
}

// calling the quotes API
export async function getQuotes (userCategory) {
    let randomQuote;
    try {
        const categoryUrl = `${userCategory}`;
        const quoteJSON = await fetch(`${apiUrl}${categoryUrl}`, {
            headers: {
                "X-Api-Key": apiKey,
            },
        });
        const response = await quoteJSON.json();
        console.log('API Response: ', response);
        randomQuote = response[0];
        console.log('Random Quote: ', randomQuote);
        return randomQuote;
    } catch (err) {
        console.error(err);
    }
}