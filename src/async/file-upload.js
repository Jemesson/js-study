const http = require('http');
const fs = require('fs');

const host  = '127.0.0.1';
const port = 3000;

http.createServer((request, response) => {
    var fileStream = fs.createWriteStream('README.md');
    var fileLength = request.headers['content-length'];
    var uploadedBytes = 0;

    request.on('readable', () => {
        var buffer = null;
        while ((buffer = request.read()) !== null) {
            uploadedBytes += buffer.length;
            var progress = (uploadedBytes / fileLength) * 100;
            response.write('progress: ' + parseInt(progress, 10) + '%\n');
       }
    });
    request.pipe(fileStream);
    request.on('end', () => {
        response.end('uploaded');
    });
}).listen(port, host, () => {
    console.log(`Server running at: http://${host}:${port}`);
});