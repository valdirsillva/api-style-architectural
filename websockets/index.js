const wsServer = require('./server')

const clients = {}

const generateUniqueID = () => {
    const s4 = () => Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
    return s4() + '_' + s4() + '_' + s4();
}

wsServer.on('request', function (request) {
    const userID = generateUniqueID();

    console.log((new Date()), 'Conexão de ' + request.host);

    const connection = request.accept(null, request.host);

    clients[userID] = connection;
    console.log('Conectado: ' + userID);
})