/**
 * Displays the fetched quote and author on the page with typing animation.
 * @param randomQuote - An object containing quote and author.
 */
export function showQuote(randomQuote: { quote: string; author: string; }): void {
    const quoteElement = document.getElementById('quote');
    const authorElement = document.getElementById('author');

    if (quoteElement && authorElement) {
        quoteElement.innerHTML = '';
        authorElement.innerHTML = '';

        // @ts-ignore
        new Typed('#quote', { // Types the quote (animation)
            strings: [`"${randomQuote.quote}"`],
            typeSpeed: 25,
            onComplete: () => {
                // @ts-ignore
                new Typed('#author', { // Types the author (animation)
                    strings: [`-${randomQuote.author}`],
                    typeSpeed: 25,
                });
            },
        });
    }
}