/**
 * Created by callum on 07/07/2016.
 */

var fs = require('fs');
var path = require('path');

var dirPath = process.argv[2];

fs.readdir(dirPath, function(error, list) {
    //console.log(list);
    for (var i = 0; i < list.length; i++) {
        var extention = path.extname(dirPath + list[i]);

        if (extention == '.md') {
            console.log(list[i]);
        }
    }
});
