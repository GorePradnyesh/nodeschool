/**
 * Created by pgore on 1/6/15.
 */

var concat = require('concat-stream');

function getStreamContents(body){
    var bodyString = body.toString();
    bodyString = bodyString.split("").reverse().join("");
    console.log(bodyString);
}

process.stdin.pipe(concat(getStreamContents));
