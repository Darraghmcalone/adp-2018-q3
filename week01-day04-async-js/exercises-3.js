const request = require('request');
const baseUrl = 'https://jsonplaceholder.typicode.com';
const postsUrl = `${baseUrl}/posts`;
const promise = new Promise((resolve, reject) => {
    request(postsUrl, (error, response, body) => {
        if (error) {
            reject(`request to ${postsUrl} failed`);
            return;
        }
        resolve('response.body:' + response.body);
    });
});

promise
    .then((response) => {
        console.log('OK: response:', response);
    })
    .catch((error) => {
        console.log('ERROR:', error);
    });
