http = require('http')
var urlString = process.argv[2]

var dataStringQualifier = "data"
var errorStringQualifier = "error"

function readHttpResponse(response){	
	response.setEncoding("utf8")
	response.on(dataStringQualifier, onHttpResponseData)
	response.on(errorStringQualifier, console.error)
}

function onHttpResponseData(data){
	console.log(data)
}

http.get(urlString, readHttpResponse)
