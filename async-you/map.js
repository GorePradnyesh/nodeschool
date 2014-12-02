/**
 * Created by pgore on 12/2/14.
 */
var http = require('http')
var async = require('async')

var urlOne = process.argv[2]
var urlTwo = process.argv[3]

function getDataFromUrl(urlString, callback){
    var getStringFromHttpResponse = function(response){
        var body = ''
        response.on('data', handleData = function(data){
            body += data.toString();
        });

        response.on('end', endData = function(){
            callback(null, body)
        });
    }

    var getRequest = http.get(urlString, getStringFromHttpResponse);

    getRequest.on('error', requestError = function(error){
        callback(error, null)
    })
}


function printString(error, data){
    if(error){
        console.error("Final Error :", error);
        return;
    }
    console.log(data)
}

async.map([urlOne, urlTwo], getDataFromUrl, printString)

