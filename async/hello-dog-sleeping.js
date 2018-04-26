const http = require('http');

const host = '127.0.0.1'
const port = 3000;
const timeout = 500;

const server = http.createServer((req, res) => {
    res.setHeader('Content-type', 'text/plain');
    res.write('Hello =). I am a dog ruuf ruuf');
    setTimeout(() => {
        res.write('I am here');
        res.end();
    }, timeout);
});

server.listen(port, host, () => {
    console.log(`Server running at: http://${host}:${port}`);
});