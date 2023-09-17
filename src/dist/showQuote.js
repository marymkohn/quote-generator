// import Typed from "typed.js";
import Typed from "../../node_modules/typed.js/index";
/**
 * Displays the fetched quote and author on the page with typing animation.
 * @param randomQuote - An object containing quote and author.
 */
export function showQuote(randomQuote) {
    var quoteElement = document.getElementById('quote');
    var authorElement = document.getElementById('author');
    if (quoteElement && authorElement) {
        quoteElement.innerHTML = '';
        authorElement.innerHTML = '';
        new Typed('#quote', {
            strings: ["\"".concat(randomQuote.quote, "\"")],
            typeSpeed: 25,
            onComplete: function () {
                new Typed('#author', {
                    strings: ["-".concat(randomQuote.author)],
                    typeSpeed: 25,
                });
            },
        });
    }
}
//# sourceMappingURL=showQuote.js.map