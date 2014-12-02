/**
 * Created by pgore on 12/2/14.
 */
var http = require('http');
var async = require('async');

var host = process.argv[2];
var port = process.argv[3];

var basePath= "/users";
var postPath = basePath + "/create";

function makeHttpPost(postOptions, writeData, callback){
    function onResponse(response){
        response.setEncoding('utf-8');
        response.on('data', onData = function(chunk){
            _ = chunk
        })
    }

    var postRequest = http.request(postOptions, onResponse);
    postRequest.write(writeData);
    postRequest.end();
    callback(null, writeData)
}

function getDataFromUrl(error, users){
    urlString = "http://" + host + ":" + port + basePath
    var getStringFromHttpResponse = function(response){
        var body = '';
        response.on('data', handleData = function(data){
            body += data.toString();
        });

        response.on('end', endData = function(){
            printString(null, body)
        });
    };

    var getRequest = http.get(urlString, getStringFromHttpResponse);

    getRequest.on('error', requestError = function(error){
        printString(error, null);
    })
}

function printString(error, results){
    console.log(results)
}


async.times(5, postReqIterator = function(n, next){
        var postData = JSON.stringify({ user_id: n + 1})
        var postOptions = {
        host: host,
        port: port,
        path: postPath,
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Content-Length': postData.length
            }
        };
        makeHttpPost(postOptions, postData, next)
    }, getDataFromUrl)


