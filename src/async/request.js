const request = require('request');

const options = {
    url: 'https://www.reddit.com/r/funny.json',
    method: 'GET',
    headers: {
        'Accept': 'application/json',
        'Accept-Charset': 'utf-8',
        'User-Agent': 'my-reddit-client'        
    }
};

const make_request = () => {
    request(options, (err, response, body) => {
        const json = JSON.parse(body);
        console.log(json);
    });
};

exports.redditRequest = make_request;
