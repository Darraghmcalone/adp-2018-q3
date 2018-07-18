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
    const getQuotesButtonElement = document.getElementById('quotes');
    const createQuoteFormElement = document.getElementById('create-quote');
    const quotesListElement = document.getElementById('quotes-list');

    getQuotesButtonElement.addEventListener('click', () => {
        fetch('/quotes').then(
            (response) => response.json()
        ).then((quotes) => {
            console.log('quotes:', quotes);
            quotes.map(appendQuote);
        });
    });

    quotesListElement.addEventListener('click', (event) => {
        const { clickedElement } = event;

        if (clickedElement.tagName === 'BUTTON') {
            const name = clickedElement.getAttribute('name');

            fetch(`/quotes/${name}`, {
                method: 'DELETE',
            }).then(() => {
                const liElement = clickedElement.parentNode;
                liElement.parentNode.removeChild(liElement);
            });
        }
    });
    
    createQuoteFormElement.addEventListener('submit', (event) => {
        console.log('create quote: event:', event);
        const name = event.target.name.value;
        const text = event.target.text.value;
        const newQuote = { name, text };
        event.preventDefault();
        console.log('newQuote:', newQuote);

        fetch(
            '/quotes',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json; charset=utf-8',
                },
                body: JSON.stringify(newQuote),
            }
        ).then(
            (response) => response.json()
        ).then(
            (quote) => {
                appendQuote(quote);
                event.target.name.value = '';
                event.target.text.value = '';
            }
        ).catch(
            error => console.error(`Fetch Error =\n`, error)
        );
    });
});