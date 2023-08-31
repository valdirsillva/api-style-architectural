import http from 'http';
import express from 'express';
import { apiRouter } from './api-v1/api-router';

const app = express();
const port = 5500;

// Middleware intercepta as requisições para fazer algum tipo de processamento
app.use('/api/v1', apiRouter);
app.use('/', (req, res) => res.send('-- Api contatos --'))

http.createServer(app).listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`)
}); 