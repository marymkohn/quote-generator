const apiUrl = "https://api.api-ninjas.com/v1/quotes?category=";
const apiKey = "TpCqkPr8iaHZUb/bUXKmBA==QQzQ2STCuoPv9TDt";

// calls the API, gets a random quote from the API
export function showQuote(randomQuote) {
    if (randomQuote) {
        const typingContainer = document.getElementById('typing-container');
        typingContainer.innerHTML = '';

        const fullText = `"${randomQuote.quote}" - ${randomQuote.author}`;
        
        // animation
        fullText.split('').forEach((char, index) => {
            const span = document.createElement('span');
            if (char === ' ') {
                span.innerHTML = '&nbsp;';
            } else if (char === '-') {
                span.innerHTML = '<br>';
            } else {
                span.classList.add('char');
                span.innerText = char;
                span.style.animationDelay = `${index * 50}ms`;
                setTimeout(() => {
                    span.style.display = 'inline-block';
                }, index * 50);

                // add the last-char class to the last character
                if (index === fullText.length - 1) {
                    span.classList.add('last-char');
                }
            }
            typingContainer.appendChild(span);
        });
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