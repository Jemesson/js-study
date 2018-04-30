var express = require('express');
var app = express();

app.get('/', (request, response) => {
    response.sendFile(__dirname + '/file.yml');
});

app.listen(3000, () => {
    console.log('I am alive!!!');
});