
var duplexer    = require('duplexer')
var through     = require('through')

function counter(counter){
    var countryCounts = {};
    var input = through(writeCountryInfo, end);
    return duplexer(input, counter);

    function writeCountryInfo(jsonObj){
        countryCounts[jsonObj.country] = (countryCounts[jsonObj.country] || 0) + 1;
    }

    function end(){
        counter.setCounts(countryCounts);
    }
}

module.exports = counter;



