var http        = require('http')

function HttpReader(urlString){
    this.urlString = urlString;
}

HttpReader.prototype.toString = function(){
    console.log(this.urlString)
};

HttpReader.prototype.getDataFromUrl = function(callback){
    var getStringFromHttpResponse = function(response){
        var body = '';
        response.on('data', handleData = function(data){
            body += data.toString();
        });

        response.on('end', endData = function(){
            callback(null, body)
        });
    };

    console.log("URL STRING :", this.urlString)
    var getRequest = http.get(this.urlString, getStringFromHttpResponse);

    getRequest.on('error', requestError = function(error){
        callback(error, null)
    })
};

//module.exports = HttpReader
module.exports.HttpReader = HttpReader;