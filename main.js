require('colors');

var express = require('express'),
  api = require('./routes/api');

var app = express();

app.configure(function(){
  this.use(express.errorHandler({dumpException: true, showStack: true}));
});

app.configure(function(){
  this.use(express.static(__dirname + '/public'));
  this.use(app.router);
});


app.get('/stats', api.stats);

var port = process.env.NPMJSPT_PORT || 1337;
console.log('Listening on %d'.green, port);

app.listen(port);