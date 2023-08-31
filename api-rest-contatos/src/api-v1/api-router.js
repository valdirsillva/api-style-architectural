import { Router } from 'express';
import { personRouter } from './paths/router-person'
import { organizationRouter } from './paths/router-organization'

const apiRouter = Router();

apiRouter.use('/pessoas', personRouter);
apiRouter.use('/organizacoes', organizationRouter);
apiRouter.use('/', (req, res, next) => res.send('API V1'));

export { apiRouter }