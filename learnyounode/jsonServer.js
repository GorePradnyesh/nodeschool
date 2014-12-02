http 				= require('http')
url					= require('url')

var portNumber 		= Number(process.argv[2])


function getJSONDate(requestedDate){
	var dateResponse = {
		hour 	: requestedDate.getHours(),
		minute 	: requestedDate.getMinutes(),
		second 	: requestedDate.getSeconds()
	}
	return JSON.stringify(dateResponse)
}

function getJSONUnixtime(requestedDate){
	var unixTimeObject = {
		unixtime : requestedDate.getTime()
	}
	return JSON.stringify(unixTimeObject)
}


function handleRequest(request, response){
	var urlObject = url.parse(request.url, true)

	var timeFormatString = urlObject.pathname.split('/')[2]


	var queryMap = urlObject.query
	var isoTime = queryMap.iso
	
	var requestedDate = new Date(isoTime)
	var formattedTimeString = ""
	switch(timeFormatString){
		case "parsetime" :
			formattedTimeString = getJSONDate(requestedDate)
			break;			
		case "unixtime" :
			formattedTimeString = getJSONUnixtime(requestedDate)
			break;
		default:
			formattedTimeString = ""
			break;
	}	
	response.write(formattedTimeString)
	response.end()
}

server = http.createServer(handleRequest)
server.listen(portNumber)