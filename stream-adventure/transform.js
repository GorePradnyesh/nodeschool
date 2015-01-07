/**
 * Created by pgore on 1/6/15.
 */

var through = require('through');

function convertToUpperQueue(buffer){
    var stringBuffer = buffer.toString();
    var upperCaseString = stringBuffer.toUpperCase()
    this.queue(upperCaseString)
}

var thruFunction = through(convertToUpperQueue) // Using the default end function.

process.stdin.pipe(thruFunction).pipe(process.stdout)