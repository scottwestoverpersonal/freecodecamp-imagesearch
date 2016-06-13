var express = require('express');
var app = express();
var request = require('request');
var mongodb = require('mongodb');
var uri = 'mongodb://heroku_0sldpjhc:j597cfd7ob5c5bkl61qgul02hi@ds013574.mlab.com:13574/heroku_0sldpjhc';

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function(req, res) {
  res.render('pages/index');
});

app.get('/latest', function(req, res) {
  res.render('pages/index');
});

app.get('/search', function(req, res) {
  var terms = req.query.term;
  var pageNum = req.query.offset;
  if(terms == undefined) {
    res.render('pages/index');
  }
  else {
    if(pageNum == undefined) {
      pageNum = 0;
    }
    var options = {
      url: 'https://api.imgur.com/3/gallery/search/?q_any='+terms+'&page='+pageNum,
      headers: {
        'Authorization': 'Client-ID d0f288d1e1c3f22',
        'Content-Type': 'application/json'
      }
    };
    request(options, function (error, response, body) {
      if (!error && response.statusCode == 200) {
        res.json(body);
      }
      else {
         res.json(error);
      }
    });
  }
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});