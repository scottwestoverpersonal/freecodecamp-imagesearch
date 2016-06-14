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
  mongodb.MongoClient.connect(uri, function(err, db) {
    if(err){
      console.log(err);
    }
    else {
    findSearches(db, function(searches) {
        res.json(searches);
        db.close();
    });
    }
  });
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
        'Authorization': 'Client-ID d0f288d1e1c3f22'
      }
    };
    request(options, function (error, response, body) {
      if (!error && response.statusCode == 200) {
          mongodb.MongoClient.connect(uri, function(err, db) {
          if(err){
            console.log(err);
          }
          else {
            insertDocument(db, terms, function() {
                db.close();
                 res.json(JSON.parse(body));
            });
          }
        });
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


var insertDocument = function(db, terms, callback) {
   db.collection('searches').insertOne( {
      "name" : terms,
      "date" : Date()
   }, function(err, result) {
      if(err){
      console.log(err);
    }
    else {
    console.log("Inserted a document into the searches collection.");
    }
    callback();
  });
};

var findSearches = function(db, callback) {
  var searches = [];
   var cursor =db.collection('searches').find( );
   cursor.each(function(err, doc) {
      if(err){
      console.log(err);
    }
    else {
      if (doc != null) {
         searches.push(doc.name);
      } else {
         callback(searches);
      }}
   });
};