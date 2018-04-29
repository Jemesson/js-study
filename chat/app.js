var app = require("express")();
var http = require("http").Server(app);
var io = require("socket.io")(http);

var redis = require("redis");
var redisClient = redis.createClient();

var messagesKey = "messages";
var chatterKey = "chatters";

var host = "localhost";
var port = 3000;

app.get("/", (request, response) => {
   response.send("Hello =). Please visit the /chatroom page."); 
});

app.get("/chatroom", (request, response) => {
    response.sendFile(__dirname + '/index.html');
});

var storeMessage = (name, data) => {
    var message = JSON.stringify({name: name, data: data});
    redisClient.lpush(messagesKey, message, (err, response) => {
        redisClient.ltrim(messagesKey, 0, 9);
    });
}

io.on('connection', client => {
    
    client.on("join", name => {
        client.name = name;
        client.broadcast.emit("add-chatter", name);
        redisClient.sadd(chatterKey, name);
        
        // list the chatters
        redisClient.smembers(chatterKey, (err, names) => {
            names.forEach(name => {
                client.emit("add-chatter", name);
            });
        });

        // list the chat messages
        redisClient.lrange(messagesKey, 0, -1, (err, messages) => {
            messages = messages.reverse();
            messages.forEach(message => {
                var message = JSON.parse(message);
                client.emit("messages", message.name + ": " + message.data);
            });
        });
    });

    client.on("messages", msg => {
        storeMessage(client.name, msg);
        var message = client.name + ": " + msg;
        client.emit("messages", message);
        client.broadcast.emit("messages", message);
    });

    client.on('disconnect', (name) => {
        client.broadcast.emit("remove-chatter", client.name);
        redisClient.srem(chatterKey, client.name);
    });

    client.on("flushall", () => {
        redisClient.flushall();
    });
});

http.listen(port, host, () => {
    console.log(`I am alive on port ${host} ${port}`);
});