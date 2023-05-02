const apiUrl = "https://api.api-ninjas.com/v1/quotes";
// Selects page elements
const inputField = document.querySelector('#input');
const submit = document.querySelector('#submit');
const apiResponse = document.querySelector('#apiResponse');

// Asynchronous function
async function getQuotes () {
    try {
        const endpoint = `${apiUrl}${inputField.value}`;
        const quotesJSON = await fetch(endpoint);
        let data = await endpoint.json();

    } catch(err) {
        console.error(err);
    }
}

