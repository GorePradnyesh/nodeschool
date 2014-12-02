modifier 	= require('through2-map')
http 		= require('http')

var portNumber 		= Number(process.argv[2])

function streamModifier(data){	
	return data.toString().toUpperCase()
}

function handleRequest(request, response){
	request.pipe(modifier(streamModifier)).pipe(response)
}

server = http.createServer(handleRequest)
server.listen(portNumber)