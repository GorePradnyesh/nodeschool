/**
 * Created by pgore on 1/6/15.
 */

var split = require('split')
var through = require('through')
var counter = 0;

function printThroughLines(line){
    if(counter % 2 != 0) {
        this.queue(line.toString().toUpperCase() + "\n");
    }else{
        this.queue(line.toString().toLowerCase() + "\n")
    }
    counter++;
}

var transformer = through(printThroughLines);

process.stdin
    .pipe(split())
    .pipe(transformer)
    .pipe(process.stdout);
