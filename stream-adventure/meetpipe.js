/**
 * Created by pgore on 1/3/15.
 */

var fs = require('fs')
var fileName = process.argv[2]

fs.createReadStream(fileName).pipe(process.stdout)


