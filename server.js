const http = require('http');

const server = http.createServer((req, res) => {
    console.log('request event');
    res.end('<h1>hello world</h1>');
}).listen(8080, () => {
    console.log(`server is listening on port :  8080.....`);
})