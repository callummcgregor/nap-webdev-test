/**
 * Created by callum on 07/07/2016.
 */

var http = require('http');

var url = process.argv[2];

http.get(url, function(response) {
    response.setEncoding('utf8');

    var dataCollectionArray = [];

    response.on('data', function(data) {
        //console.log(data);
        dataCollectionArray.push(data);
    });

    response.on('end', function() {
        var dataCollection = "";

        for (var i = 0; i < dataCollectionArray.length; i++) {
            dataCollection = dataCollection + dataCollectionArray[i];
        }

        console.log(dataCollection.length);
        console.log(dataCollection);
    });
});