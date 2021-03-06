// Reply with two static messages

const express = require('express')
const bodyParser = require('body-parser')
const request = require('request')
const app = express()
const port = process.env.PORT || 4000
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.post('/webhook', (req, res) => {
//    let reply_token = req.body.events[0].replyToken;
    let reply_token = "test";
    reply(reply_token)
    res.sendStatus(200)
})

app.listen(port, function () {
    console.log('CORS-enabled web server listening on port ' + port);
});

function reply(reply_token) {
    let headers = {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer VgU9LxKNhw9VqVVZpxLzYZfW9dgkjUKk/Zb6JXvitj1oNeWmmumzIGmW56AwKsGtQ9ra/ZE2sUtBge2xMNpvqBQEVb6ouN+XWWM+seWuABim3sK+GRnKmdlNonkq1cpx2RKXlNEc7SMdRteH3ZyqHAdB04t89/1O/w1cDnyilFU='
    }
    let body = JSON.stringify({
        replyToken: reply_token,
        messages: [{
            type: 'text',
            text: 'Hello'
        },
        {
            type: 'text',
            text: 'How are you?'
        }]
    })
    request.post({
        url: 'https://api.line.me/v2/bot/message/reply',
        headers: headers,
        body: body
    }, (err, res, body) => {
        console.log('status = ' + res.statusCode);
    });
}