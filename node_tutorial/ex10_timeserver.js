/**
 * Created by callum on 07/07/2016.
 */

var net = require('net');

var port = process.argv[2];

var server = net.createServer(function(socket) {
    var date = new Date();
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    var day = date.getDate();
    var hours = date.getHours();
    var minutes = date.getMinutes();

    socket.write(year + '-' + padNumber(month, 2) + '-' + padNumber(day, 2) + ' ' + padNumber(hours, 2) + ':' + padNumber(minutes, 2) + '\n');
    socket.end();
});

server.listen(port);

function padNumber(number, size) {
    var s = number + '';
    while (s.length < size) {
        s = '0' + s;
    }

    return s;
}