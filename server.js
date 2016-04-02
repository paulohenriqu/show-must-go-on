var express = require('express');
var app = express();

app.use(express.static(__dirname + '/public'));


app.get('/', function(req, res){
  res.redirect('/index.html');
});

app.get('/*', function(req, res){
  res.sendFile(__dirname + '/public/index.html');
});


// listen (start app with node server.js) ======================================
    app.listen(8080);
    console.log("App listening on port 8080");