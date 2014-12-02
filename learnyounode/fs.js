
var fs = require('fs')
var fileNameString = process.argv[2] 
var lineCountInt = 0;

if(fs.existsSync(fileNameString)){
	var fileBuffer = fs.readFileSync(fileNameString)
	var bufferContentString = fileBuffer.toString()
	var lineArray = bufferContentString.split('\n')	
	console.log(lineArray)
	lineCountInt = lineArray.length - 1;	
}else{
	console.log("file does not exist")
}

console.log(lineCountInt)
