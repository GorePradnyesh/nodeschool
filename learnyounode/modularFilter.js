filefilter = require('./extensionFilterModule')

var dirNameString = process.argv[2] 
var extensionString = process.argv[3]

function printFilteredFiles(error, fileList){
	//console.log(fileList)
	for(i = 0; i < fileList.length; i++){
		console.log(fileList[i])
	}
}

filefilter(dirNameString, extensionString, printFilteredFiles)

