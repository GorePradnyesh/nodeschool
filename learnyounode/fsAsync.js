
var fs = require('fs')
var fileNameString = process.argv[2] 


function onRead(error, finleContents){
	var bufferContentString = finleContents.toString()
	var lineArray = bufferContentString.split('\n')	
	console.log(lineArray.length - 1);	
}


function readAndPrintLineCount(fileNameString){
	fs.readFile(fileNameString, onRead)
}

/*
if(fs.existsSync(fileNameString)){
	readAndPrintLineCount(fileNameString)	
}else{
	console.log("file does not exist")
}*/

readAndPrintLineCount(fileNameString)