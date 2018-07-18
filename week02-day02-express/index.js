const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3300;
const quotes = [
    {
        name: 'Fred Brooks',
        text: 'Nine people can’t make a baby in a month.',
    },
    {
        name: 'Paul Ford',
        text: 'A computer is a clock with benefits.',
    },
    {
        name: 'Linus Torvalds',
        text: 'Talk is cheap. Show me the code.',
    },
];

app.use((request, response, next) => {
    console.log(`RECEIVED ${request.method} ${request.path}`);
    next();
});

app.use(express.static('public'));


app.get('/quotes', (request, response) => {
    response.send(quotes);
});
app.get('/quotes/:name', function (request, response) {
    response.send(request.params.name);
});
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
function diyLogger(request, response, next) {
    const startDate = new Date();
    const startTime = startDate.getTime();
    const { url, method } = request;
    const { statusCode } = response;

    app.get('/quotes/:name', (request, response) => {
        const { name } = request.params;
        const matchedQuote = quotes.find((quote) => {
            return name === quote.name;
        });
    
        if (!matchedQuote) {
            response.status(404).json('That person isn\'t quote-worthy.');
        } else {
            response.json(matchedQuote.text);
        }
    });



    app.post('/quotes', bodyParser.json(), function(request, response) {
        const newQuote = request.body;
        // Add your new quote to the quotes array
        // Then send back a 201 status
        // And also send the new quote as JSON in the response
      });

      document.getElementById("create-quote").addEventListener("submit", myFunction);

      function myFunction() {
          alert("The form was submitted");
      }


    response.on('finish', () => {
        const finishDate = new Date();
        const finishTime = finishDate.getTime();
        const timeDelta = finishTime - startTime;

        console.log(`${method} ${url} ${statusCode} ${timeDelta}ms`);
    });
    next();
}

app.use(diyLogger);
