import { Router } from 'express';

const organizationRouter = Router();

organizationRouter.use('/', function (req, res, next) {
    res.send('Endpoint organizações')
})

export { organizationRouter }