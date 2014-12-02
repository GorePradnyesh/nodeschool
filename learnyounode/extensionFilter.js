var fs = require('fs')
var pathModule = require('path')
var dirNameString = process.argv[2] 
var extensionString = process.argv[3]
extensionString = "." + extensionString

function printDirectories(error, fileList){
	for(i=0; i < fileList.length; i++){		
		ext = pathModule.extname(fileList[i])
		if(ext == extensionString){
			console.log(fileList[i])
		}
	}
}

fs.readdir(dirNameString, printDirectories)

	