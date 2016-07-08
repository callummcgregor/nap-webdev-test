/**
 * Created by callum on 07/07/2016.
 */

var mymodule = require('./ex6_makeitmodular_module.js');

var dirPath = process.argv[2];
var extentionFilter = process.argv[3];

mymodule(dirPath, extentionFilter, function(error, data) {
    var contents = data;

    for (var i = 0; i < contents.length; i++) {
        console.log(contents[i]);
    }
});