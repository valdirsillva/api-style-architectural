import { Router } from 'express';

const personRouter = Router();

personRouter.use('/', function (req, res, next) {
    res.send('Endpoint pessoa')
})

export { personRouter }