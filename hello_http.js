var http = require('http');
var PORT = 1337;  //Can be any open port
var IP = '127.0.0.1'; //for localhost
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World\n');
}).listen(PORT, IP);
console.log('Server running at http://'+ IP + ':'+ PORT + '/');