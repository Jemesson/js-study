var app = require("express")();
var http = require("http").Server(app);
var io = require("socket.io")(http);
var port = 3000;

app.get('/', (req, res) => {
   res.sendFile(__dirname + '/index.html');
});

io.on('connection', client => {
    client.on("join", name => {
        client.nickname = name;
    });
    client.on("messages", msg => {
        var nickname = client.nickname;
        var message = nickname + ":" + msg;
        client.emit('message-name', message);
        client.broadcast.emit("messages", message);
    })
});

http.listen(port, () => {
    console.log("I am alive on port 3000");
});