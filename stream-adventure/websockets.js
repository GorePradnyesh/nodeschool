/**
 * Created by pgore on 1/7/15.
 */

websocket   = require('websocket-stream');

wsStream = websocket("ws://localhost:8000");
wsStream.write("hello\n");
wsStream.end();

