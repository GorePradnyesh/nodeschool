/**
 * Created by pgore on 12/2/14.
 */
var fs				= require('fs')
var http 			= require('http')
var async 			= require('async');

var fileName 		= process.argv[2]

function readUrlFromFile(callback){
    var onReadFileResult = function (error, data){
        var urlString = data.toString().trim()
        callback(null, urlString)
    }
    fs.readFile(fileName, onReadFileResult)
}


exports.getDataFromUrl = function getDataFromUrl(urlString, callback){
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


exports.printString =function printString(error, data){
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


async.waterfall( [readUrlFromFile, getDataFromUrl], printString)

