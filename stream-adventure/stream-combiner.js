
var combiner    = require("stream-combiner");
var split       = require("split");
var through     = require("through");
var zlib        = require("zlib");

function compressor(){
    return combiner(split(), through(write, end), zlib.createGzip());

    var current;

    function write(line) {
        if (line.length === 0) return;
        var row = JSON.parse(line);

        if (row.type === 'genre') {
            if (current) {
                this.queue(JSON.stringify(current) + '\n');
            }
            current = { name: row.name, books: [] };
        }
        else if (row.type === 'book') {
            current.books.push(row.name);
        }
    }
    function end() {
        if (current) {
            this.queue(JSON.stringify(current) + '\n');
        }
        this.queue(null);
    }


}

module.exports = compressor;
