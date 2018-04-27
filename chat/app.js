var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', (req, res) => {
   res.sendFile(__dirname + '/index.html');
});

io.on('connection', client => {
    console.log('You are connected');
});

http.listen(3000, () => {
    console.log('I am alive on port 3000');
});