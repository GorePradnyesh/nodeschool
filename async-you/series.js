/**
 * Created by pgore on 12/2/14.
 */
var async       = require('async')
var http        = require('http')

var urlOne      = process.argv[2]
var urlTwo      = process.argv[3]

function getDataFromUrl1(callback){
    var urlString = urlOne;
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

function getDataFromUrl2(callback){
    var urlString = urlTwo
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
        if(error.stack) {
            console.error("Final Error :", error.stack);
        }else{
            console.error("Final Error :", error);
        }
        return;
    }
    console.log(data)
}

async.series({requestOne: getDataFromUrl1, requestTwo: getDataFromUrl2}, printString)