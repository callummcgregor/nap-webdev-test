/**
 * Created by callum on 07/07/2016.
 */


module.exports = function(dirPath, extFilter, callback) {
    var fs = require('fs');
    var path = require('path');

    fs.readdir(dirPath, function(error, list) {
        if (error) {
            return callback(error);
        }

        var filteredFileNames = [];

        for (var i = 0; i < list.length; i++) {
            var fileName = list[i];
            var extention = path.extname(dirPath + fileName);

            if (extention == '.' + extFilter) {
                filteredFileNames.push(fileName);
            }
        }

        callback(null, filteredFileNames);
    });
}