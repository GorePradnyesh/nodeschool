var net = require('net')
var strftime = require('strftime')

var portNumber = Number(process.argv[2])


function handleSocket(socket){
	console.log("Received request on socket : " , socket.address())
	socket.write(strftime('%Y-%m-%d %H:%M'))
	socket.end()
}

var server = net.createServer(handleSocket)
server.listen(portNumber)