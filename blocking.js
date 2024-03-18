const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === "/") {
        res.end(`<h1>home page</h1>`)
    }
    else if (req.url === "/about") {
        for (i = 0; i < 1000; i++) {
            for (j = 0; j < 1000; j++) {
                console.log(`${i} ${j}`)
            }
        }
        res.end(`<h1>about page</h1>`)
    }
    else res.end(`<h1>Eroor 404</h1>`)
}).listen(8080, () => {
    console.log('server is listening on port: 8080 ...')
})