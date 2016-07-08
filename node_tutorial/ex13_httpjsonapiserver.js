/**
 * Created by callum on 07/07/2016.
 */

var http = require('http');
var url = require('url');

var port = process.argv[2];

var server = http.createServer(function(request, response) {
    if (request.method != 'GET') {
        return response.end('I only accept GET requests\n');
    }

    var reqUrl = url.parse(request.url, true);
    var pathname = reqUrl.pathname;

    var result;

    var date = new Date(reqUrl.query.iso);

    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();

    if (pathname == '/api/parsetime') {
        var isoTimeJson = {
            'hour': hours,
            'minute': minutes,
            'second': seconds
        };

        result = JSON.stringify(isoTimeJson);
    } else if (pathname == '/api/unixtime') {

        var unixTimeJson = {
            'unixtime': date.getTime()
        };

        result = JSON.stringify(unixTimeJson);
    }

    response.writeHead(200, {'Content-Type': 'application/json'});
    response.write(result);
    response.end();
});

server.listen(port);