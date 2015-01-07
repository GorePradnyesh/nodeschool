
var through = require('through'),
    trumpet = require('trumpet'),
    tr = trumpet(),
    loud = tr.createStream('.loud');

function transform(buf) {
    this.queue(buf.toString().toUpperCase());
}

loud.pipe(through(transform)).pipe(loud);

process.stdin
    .pipe(tr)
    .pipe(process.stdout);