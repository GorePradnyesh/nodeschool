/*
Prints the contents of the urls asynchronously, in order
*/
http = require('http')
concatStream = require('concat-stream')

var urlString1 = process.argv[2]
var urlString2 = process.argv[3]
var urlString3 = process.argv[4]

var urlArray = []
urlArray.push(urlString1)
urlArray.push(urlString2)
urlArray.push(urlString3)


function readHttpResponse(response){	
	response.setEncoding("utf8")
	response.pipe(concatStream(onHttpResponseData))
}

function onHttpResponseData(data){
	var dataLinesString = data.toString().split("\n")	
	console.log(dataLinesString[0])
	getUrlContents()	
}

function getUrlContents(){
	var urlString = urlArray.shift()
	if(urlString == undefined){
		return
	}
	
	http.get(urlString, readHttpResponse)
}


getUrlContents()
