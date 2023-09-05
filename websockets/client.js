const WebSocket = require('websocket').w3cwebsocket;

const serverURL = 'ws://localhost:8001'

const client = new WebSocket(serverURL);

client.onerror = function (error) {
    console.error('Erro: ', error);
}

client.onopen = function () {
    console.log('Conexão aberta.');

    // Envia mensagem para o servidor quando a conexão estiver aberta
    client.send('Olá, servidor!!');
}

// client.onmessage = function (e) {
//     if (typeof e.data === 'string') {
//         console.log('Mensagem recebida: ', e.data);
//     }
// }

// client.onclose = function () {
//     console.log('Conexão fechada.');
// }