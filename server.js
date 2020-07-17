const ws = require("ws");
const server = new ws.Server({port: 8080})
var clients = [];

function sendAll (msg) {
    clients.forEach(s=> {
       s.send(msg); 
    });
}

server.on("connection", s=> {
    clients.push(s);
    s.on("message", msg=> {
        sendAll(msg);   
    })
});