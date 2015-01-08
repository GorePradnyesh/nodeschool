
var duplexer    = require('duplexer')
var childProc   = require('child_process')

function launcher(cmd, args){
    childProcess = childProc.spawn(cmd, args)
    var combinedStream = duplexer(childProcess.stdin, childProcess.stdout);
    return combinedStream;
}

module.exports = launcher

