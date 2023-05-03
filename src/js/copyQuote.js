// Copies the displayed quote
export function copyQuote(randomQuote) {
    const fullText = `"${randomQuote.quote}" -${randomQuote.author}`;

    // Alerts user that the quote was copied
    navigator.clipboard.writeText(fullText).then(() => {
        const copyMessage = document.getElementById('copy-message');
        copyMessage.innerHTML = 'Copied!';
        copyMessage.style.display = 'inline';

        // Hide the alert after 2 seconds
        setTimeout(() => {
            copyMessage.style.display = 'none';
        }, 2000);
    }).catch(err => {
        console.error('Error: ', err);
    });
}