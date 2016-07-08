/**
 * Created by callum on 07/07/2016.
 */

var fs = require('fs');

fs.readFile(process.argv[2], function(error, data) {
    var contents = data.toString();
    var lines = contents.split('\n');

    console.log(lines.length - 1);
});