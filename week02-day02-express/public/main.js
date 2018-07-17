console.log('in main.js');

function appendQuote(quote) {
    const quotesListElement = document.getElementById('quotes-list');
    const quoteHtml = `
        <li>
            <strong>${quote.name}</strong>: ${quote.text}
        </li>
    `;

    quotesListElement.innerHTML += quoteHtml;
}

document.addEventListener('DOMContentLoaded', () => {
    const quotesButtonElement = document.getElementById('quotes');

    quotesButtonElement.addEventListener('click', () => {
        fetch('/quotes').then(
            (response) => response.json()
        ).then((quotes) => {
            console.log('quotes:', quotes);
            quotes.map(appendQuote);
        });
    });
});
