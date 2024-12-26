const http = require('http');

const server = http.createServer((req, res) => {
    console.log(req.url);
    if(req.url === '/home') {
        res.end('Welcome to home');
    } else {
        res.end('Hello World');
    }
}); // 12.3.8.9:3000 -> ip:port -> socket address

// client and server in the same local machine -> localhost(127.0.0.1)

server.listen(3000, () => {
    console.log("Server is running on http://localhost:3000");
});