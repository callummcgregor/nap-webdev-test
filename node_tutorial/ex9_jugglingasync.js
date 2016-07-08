/**
 * Created by callum on 07/07/2016.
 */

var http = require('http');

var urls = [process.argv[2], process.argv[3], process.argv[4]];
var finishedUrls = [];

for (var i = 0; i < urls.length; i++) {
    gatherData(urls[i], i);
}

function gatherData(url, noInSeq) {
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

            dataEnded(dataCollection, noInSeq);
        });
    });
}

function dataEnded(data, noInSeq) {
    finishedUrls[noInSeq] = data;

    var finished = true;
    for (var i = 0; i < urls.length; i++) {
        if (!finishedUrls[i]) {
            finished = false;
        }
    }

    if (finished) {
        for (var i = 0; i < finishedUrls.length; i++) {
            console.log(finishedUrls[i]);
        }
    }
}