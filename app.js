var http = require('http');
http.createServer(function (req, res) {
	  res.writeHead(200, {'Content-Type': 'text/plain'});
	  res.end('Super APP de Exemplo Ver 1.0.0');
}).listen(8080);
console.log('Atendendo em: http://localhost:8080/');
