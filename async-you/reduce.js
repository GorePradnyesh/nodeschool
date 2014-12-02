/**
 * Created by pgore on 12/2/14.
 */
var http = require('http');
var async = require('async');

var urlString = process.argv[2];

function getDataFromUrl(memo, item, callback){
    var getStringFromHttpResponse = function(response){
        var body = ''
        response.on('data', handleData = function(data){
            body += data.toString();
        });

        response.on('end', endData = function(){
            callback(null, memo + Number(body))
        });
    }

    var customUrl = urlString + "?number=" + item;
    var getRequest = http.get(customUrl, getStringFromHttpResponse);

    getRequest.on('error', requestError = function(error){
        callback(error, null)
    })
}


function printResults(error, result){
    if(error){
        console.error(error);
        return;
    }
    console.log(result);
}

async.reduce(['one', 'two', 'three'], 0, getDataFromUrl, printResults)


