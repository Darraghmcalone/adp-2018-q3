const request = require('request');
let postsurl = 'https://jsonplaceholder.typicode.com/posts';
let albumurl= 'https://jsonplaceholder.typicode.com/albums';

request(postsurl, (error, response, body) => {
    const json = JSON.parse(body);
    console.log("First 10 Posts");
    json.forEach((item, index) => {
    if(index < 10){
         console.log(index + 1, item.title);
         }
    });
   });   

 request(albumurl, (error, response, body) => {
    const json = JSON.parse(body);
    console.log("First 10 Albums");
    json.forEach((item, index) => {
        if(index < 20){
            console.log(index + 1, item.title);
        }   
    });
    console.log("Done!");
   });   

