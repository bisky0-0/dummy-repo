const http = require('http');

const server = http.createServer((req, res) => {

    if (req.url === "/") {
        res.end('<h1>welcome to our homepage</h1>');
    }
    else if (req.url === "/about") {
        res.end('<h1>here is our short history</h1>');
    }
    else {
        res.end(`
    <h1>Oops!</h1>
    <p> we can't seem to find the page you're looking for</p>
    <a href="/" > back to home pahe </a>
    `)
    }
}).listen(8080)
