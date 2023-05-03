// displays the quote
export function showQuote(randomQuote) {
		const quoteContent = document.getElementById('quote');
		quoteContent.innerHTML = '';

		const authorContent = document.getElementById('author');
		authorContent.innerHTML = '';

		// Types the quote (animation)
		const typedQuote = new Typed('#quote', {
				strings: [`"${randomQuote.quote}"`],
				typeSpeed: 25,
				onComplete: () => {
						// Types the author (animation)
						const typedAuthor = new Typed('#author', {
								strings: [`-${randomQuote.author}`],
								typeSpeed: 25,
						});
				},
		});
}

