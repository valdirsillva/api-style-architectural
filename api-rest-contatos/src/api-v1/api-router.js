import { Router } from 'express';
import { personRouter } from './paths/router-person'

const apiRouter = Router();

apiRouter.use('/pessoas', personRouter);
apiRouter.use('/', (req, res, next) => res.send('API V1'));

export { apiRouter }