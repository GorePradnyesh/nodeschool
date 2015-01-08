
var crypto      = require('crypto');

var passphraseString = process.argv[2];

var cryptoStream = crypto.createDecipher('aes256', passphraseString);
process.stdin.pipe(cryptoStream).pipe(process.stdout)