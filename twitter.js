var express = require('express');
var request = require('request');
var url = require('url');

var app = express();

app.get('/tweets/:username', (req, res) => {
    var username = req.param.username;
    options = {
        protocol: 'https',
        host: 'api.twitter.com',
        pathname: '/1.1/statuses/user_timeline.json',
        query: {screen_name: username, count: 10}    
    }
    var twitterUrl = url.format(options);
    request(twitterUrl).pipe(res);
});

app.listen(3000, () => {
    console.log(`I am alive on port: 3000`);
})