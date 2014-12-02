fs 		= require('fs')
http 	= require('http')

var portNumber 		= Number(process.argv[2])
var filePathString 	= process.argv[3]

var openAction 		= "open"

function handleRequest(request, response){
	// Create Src file Stream
	var srcFileStream = fs.createReadStream(filePathString)
	// Add the on Open function which would connect the src file stream to the 
	// response stream.
	srcFileStream.on(openAction, function(){
		srcFileStream.pipe(response)
	})	
}

var server = http.createServer(handleRequest)
server.listen(portNumber)
