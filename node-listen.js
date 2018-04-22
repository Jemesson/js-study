const http = require('http');

const host  = '127.0.0.1';
const port = 3000;

const server = http.createServer((request, response) => {
    response.statusCode = 200;
    response.setHeader('Content-type', 'text/plain');
    response.end('Hello world =)');
});

server.listen(port, host, () => {
    console.log(`Server running at: http://${host}:${port}`);
});