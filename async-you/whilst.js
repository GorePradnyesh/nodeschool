/**
 * Created by pgore on 12/2/14.
 */

var http = require('http');
var async = require('async');

var urlString = process.argv[2];
var searchString = "meerkat";

var body = '';
var callCount = 0;

function getDataFromUrl(callback){
    body = '';
    var getStringFromHttpResponse = function(response){
        response.on('data', handleData = function(data){
            body += data.toString();
        });

        response.on('end', endData = function(){
            body = body.trim();
            callCount++;
            callback()
        });
    }
    var getRequest = http.get(urlString, getStringFromHttpResponse);

    getRequest.on('error', requestError = function(error){
        callback(error)
    })

}

async.whilst(
    function(){
        return (body.indexOf(searchString) <= -1);
    },
    getDataFromUrl,
    function(error){
        if(error) {
            console.error(error)
            return;
        }
        console.log(callCount)
    }
);


