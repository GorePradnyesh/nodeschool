
var http    = require('http');
var fs      = require('fs');
var through = require('through')

var serverPort  = process.argv[2];

function transformRequestStream(requestBuffer){
    var requestString = requestBuffer.toString();
    requestString = requestString.toUpperCase();
    this.queue(requestString)
}

function handleHttpServerRequest(request, response){
    if(request.method == 'POST'){
        request.pipe(through(transformRequestStream))
            .pipe(response)
    }else{
        response.end("Need a POST request");
    }
}

var server = http.createServer(handleHttpServerRequest);
server.listen(serverPort)
