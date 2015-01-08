var crypto      = require('crypto');
var zlib        = require('zlib');
var tar         = require('tar');
var through     = require('through');

var cipherName  = process.argv[2];
var passPhrase  = process.argv[3];


var tarParser       = tar.Parse();
var cryptoStream    = crypto.createDecipher(cipherName, passPhrase);

function printUnzippedData(entry){

    if(entry.type !== 'File') {
        return;
    }

    function write(data) {
        this.queue(data.toString() + ' ' + entry.path + '\n');
    }

    entry
        .pipe(crypto.createHash('md5', { encoding : 'hex' }))
        .pipe(through(write))
        .pipe(process.stdout);
}

tarParser.on('entry', printUnzippedData);

process.stdin
    .pipe(cryptoStream)
    .pipe(zlib.createGunzip())
    .pipe(tarParser);
