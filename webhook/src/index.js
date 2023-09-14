import express from "express";
import winston from 'winston'

const app = express()
const PORT = 3001

app.use(express.json())

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  transports: [
    new winston.transports.File({ filename: './logger/log_info.log', level: 'info' }),
    new winston.transports.File({ filename: './logger/log_error.log', level: 'error' }),
  ],
})

//Rota para receber op payload JSON do webhook 
app.post('/notify', (req, res) => {
  const data = req.body
  
  try {
    const payload = {
      user: data.user,
      message: data.user,
      createdAt: new Date()
    }

    if (!data.user) {
      res.status(400).send('Necessario informar o usuário')
    }

    logger.info(`Route ::: /notify => ${JSON.stringify(payload)} `)
    sendNotification(payload);
    res.status(200).send('webhook recebido');

  } catch(err) {
    logger.error('Erro ao notificar usuário');
  }
})

// Dispara notificação para o usuário
function sendNotification(payload) {
  console.log('Nova notificação: ', payload)
}

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`)
})
