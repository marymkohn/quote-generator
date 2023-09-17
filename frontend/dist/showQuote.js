/**
 * Displays the fetched quote and author on the page with typing animation.
 * @param randomQuote - An object containing quote and author.
 */
export function showQuote(randomQuote) {
    const quoteElement = document.getElementById('quote');
    const authorElement = document.getElementById('author');
    if (quoteElement && authorElement) {
        quoteElement.innerHTML = '';
        authorElement.innerHTML = '';
        // @ts-ignore
        new Typed('#quote', {
            strings: [`"${randomQuote.quote}"`],
            typeSpeed: 25,
            onComplete: () => {
                // @ts-ignore
                new Typed('#author', {
                    strings: [`-${randomQuote.author}`],
                    typeSpeed: 25,
                });
            },
        });
    }
}
//# sourceMappingURL=showQuote.js.map