var express = require('express');
var app = express();
var request = require("request");



app.get('/', function(req, res){

var options = { method: 'GET',
  url: 'https://crypto-e6a5.restdb.io/rest/hashes',
  headers: 
   { 'cache-control': 'no-cache',
     'x-apikey': 'f37e09b9a39fff796b9d3f9a56e08d39fe11b' } };

request(options, function (error, response, body) {
  if (error) throw new Error(error);
   
   res.send([body]);
});
});
app.listen(3000);