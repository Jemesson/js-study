var config = require('./config');

var express = require('express');
var request = require('request');
var url = require('url');

var app = express();

const host = '127.0.0.1';
const port = 3000;

app.get('/tweets/topic/:name', (req, response) => {
    var name = req.params.name;
    var options = {
        protocol: 'https',
        host: 'api.twitter.com',
        pathname: '/1.1/search/tweets.json',
        query: {q: name, result_type: 'popular'}    
    };
    var urlOptions = url.format(options);
    request(urlOptions, {oauth: config, json: true}, (err, res, data) => {
        var tweets = data.statuses.map(item => {
            return item.text;     
        });
        response.locals = {tweets: tweets, name: name};
        response.render('tweets.ejs');
    });
});

app.get('/tweets/:name', (req, response) => {
    var name = req.params.name;
    var options = {
        protocol: 'https',
        host: 'api.twitter.com',
        pathname: '/1.1/statuses/user_timeline.json',
        query: {screen_name: name, count: 2}    
    };
    var urlOptions = url.format(options);
    request(urlOptions, {oauth: config, json: true}, (err, res, data) => {        
        const tweets = data.map(item => {
            return item.text;
        });
        response.locals = {tweets: tweets, name: name};
        response.render("tweets.ejs");
    });
});

app.listen(port, host, () => {
    console.log(`I am alive on http://${host}:${port}`);
});