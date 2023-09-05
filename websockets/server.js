const webSocketServer = require('websocket').server;
const http = require('http');
const webSocketServerPort = 8001;

// Start http server and the websocket server
const server = http.createServer();

server.listen(webSocketServerPort);

// Association websocket with server http
const wsServer = new webSocketServer({
    httpServer: server
})

module.exports = wsServer; // Exporta o objeto wsServerss