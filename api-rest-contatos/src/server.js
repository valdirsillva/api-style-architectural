import http from 'http';
import express from 'express';
import bodyParser from 'body-parser';
import { apiRouter } from './api-v1/api-router';

const app = express();
const port = 5500;

// Associa o JSON ao ojeto req.body
app.use(bodyParser.json());

// Associa os parametros  de URL e Body com formato urlEncoded
// ao objeto req.paramss
app.use(bodyParser.urlencoded({ extended: false }));

// Middleware intercepta as requisições para fazer algum tipo de processamento
app.use('/api/v1', apiRouter);
app.use('/', (req, res) => res.send('-- Api contatos --'))

http.createServer(app).listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`)
}); 