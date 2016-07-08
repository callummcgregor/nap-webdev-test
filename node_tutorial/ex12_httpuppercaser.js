/**
 * Created by callum on 07/07/2016.
 */

var http = require('http');
var map = require('through2-map');

var port = process.argv[2];

var server = http.createServer(function(request, response) {
    if (request.method == 'POST') {
        request.pipe(map(function(chunk) {
            return chunk.toString().toUpperCase();
        })).pipe(response);
    } else {
        return response.end('I only accept POST request\n');
    }
});

server.listen(port);