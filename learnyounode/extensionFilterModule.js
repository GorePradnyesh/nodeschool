var fs = require('fs')
var pathModule = require('path')

module.exports = function filterByExtension(dirname, extension, callback){		
	extension = "." + extension
	function getFilteredList(err, fileList){
		if(err){
			return callback(err, undefined)
		}
		var fileterdFileNameList = []
		for(i=0; i < fileList.length; i++){		
			ext = pathModule.extname(fileList[i])
			if(ext == extension){
				fileterdFileNameList.push(fileList[i])
			}
		}
		return callback(undefined, fileterdFileNameList)
	}

	fs.readdir(dirname, getFilteredList)
}

