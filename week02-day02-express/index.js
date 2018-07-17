const express = require('express');
const app = express();
const PORT = 3300;
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
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
function diyLogger(request, response, next) {
    const startDate = new Date();
    const startTime = startDate.getTime();
    const { url, method } = request;
    const { statusCode } = response;

    response.on('finish', () => {
        const finishDate = new Date();
        const finishTime = finishDate.getTime();
        const timeDelta = finishTime - startTime;

        console.log(`${method} ${url} ${statusCode} ${timeDelta}ms`);
    });
    next();
}

app.use(diyLogger);
