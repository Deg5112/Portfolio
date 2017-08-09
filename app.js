var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var domain = 'davidgoodman.club';
var mailgun = require('mailgun-js')({apiKey: 'my-key', domain: domain});


//init app
var app = express();
var server = require('http').createServer(app);

app.all('/', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
});

app.use(bodyParser.json());   //including bodyParser dependency method
app.use(bodyParser.urlencoded({extended: false}));  //parses out ?name=

app.post('/send', function(req,res){
    console.log(req.body);
    var name = req.body.name;
    var email = req.body.email;
    var message = req.body.message;
    
    var html =
         '<p>'
        + 'Hello '+name+',<br><br>'

        + 'Thank you for getting in touch, I\'ll reach out as soon as I am able to. <br><br>'

        + 'Have a great day, <br><br>'

        + '-Dave'
        + '</p>'
        +'<br>'
        + '<h5>Your Message:</h5>'
        + '<p>'+message+'</p>';


    var data = {
        from: 'David Goodman <noreply@dgoody.mailgun.org>',
        to: email,
        subject: 'Thank you for getting in touch',
        html: html
    };

    mailgun.messages().send(data, function (error, body) {
        if(typeof error == 'undefined'){
            console.log(body);
            console.log('sent!');
            res.json({success:true});
        }
    });
});

app.set('port', (process.env.PORT || 3002));

server.listen(app.get('port'), function(){
    console.log('Server started on port '+ app.get('port'));
});



