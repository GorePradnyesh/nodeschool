/// <reference path="./../declarations/node.d.ts" />

import http = require('http');

export function simpleServer(port:number){
    http.createServer((request, response)=>{
        response.write("\<h1\>Success\<\/h1\>");
        response.end();
    }).listen(port);
}