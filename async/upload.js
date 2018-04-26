const fs = require('fs');
const http = require('http');

const host = 'localhost';
const port = 3000;

const server = http.createServer((request, response) => {
    var fileStream = fs.createWriteStream('readme.md');
    request.pipe(fileStream);
    request.on('end', () => {
        response.end('uploaded');
    });
});

server.listen(port, host, () => {
    console.log(`Server running at: http://${host}:${port}`);
})