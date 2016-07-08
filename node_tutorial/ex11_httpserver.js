/**
 * Created by callum on 07/07/2016.
 */

var http = require('http');
var fs = require('fs');

var port = process.argv[2];
var filePath = process.argv[3];

var server = http.createServer(function(request, response) {
    response.writeHead(200, {'content-type': 'text/plain'});

    var src = fs.createReadStream(filePath);
    src.pipe(response);
});

server.listen(port);