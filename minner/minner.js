  
const fs = require('fs');

var request = require("request");

function fetchBlock(){
var options = { method: 'GET',
  url: 'https://crypto-e6a5.restdb.io/rest/hashes',
  headers: 
   { 'cache-control': 'no-cache',
     'x-apikey': 'f37e09b9a39fff796b9d3f9a56e08d39fe11b' } };

request(options, function (error, response, body) {
  if (error) throw new Error(error);



   fs.writeFile('message.txt', [body], (err) =>{
   	if (err) throw err;
   	console.log('Don save her')
   } )
});
}
setInterval(fetchBlock, 1500);
