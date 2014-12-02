concatStream = require('concat-stream')
http = require('http')

var urlString = process.argv[2]
var dataStringQualifier = "data"
var errorStringQualifier = "error"

function readHttpResponse(response){	
	response.setEncoding("utf8")
	response.pipe(concatStream(onHttpResponseData))
}

function onHttpResponseData(data){
	var dataLinesString = data.toString().split("\n")	
	console.log(dataLinesString[0])
}

http.get(urlString, readHttpResponse)