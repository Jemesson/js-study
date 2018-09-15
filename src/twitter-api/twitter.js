var config = require('./config');

var express = require('express');
var request = require('request');
var url = require('url');

var app = express();

const host = '127.0.0.1';
const port = 3000;

const showTweets = (name, pathUrl, query, response) => {
    const options = {
        protocol: 'https',
        host: 'api.twitter.com',
        pathname: pathUrl,
        query: query    
    };
    const urlOptions = url.format(options);
    
    request(urlOptions, {oauth: config, json: true}, (err, res, data) => {
        var tweets = [];

        if (pathUrl.includes("search")) {
            tweets = data.statuses.map(item => item.text)        
        } else if (pathUrl.includes("statuses")) {
            tweets = data.map(item => item.text);
        }

        response.locals = {tweets: tweets, name: name};
        response.render('tweets.ejs');
    });
}

app.get('/tweets/topic/:name', (req, response) => {
    const name = req.params.name;
    showTweets(name, "/1.1/search/tweets.json", {q: name, result_type: "popular"}, response);
});

app.get('/tweets/:name', (req, response) => {
    const name = req.params.name;
    showTweets(name, "/1.1/statuses/user_timeline.json", {screen_name: name, count: 10}, response);
});

app.listen(port, host, () => {
    console.log(`I am alive on http://${host}:${port}`);
});