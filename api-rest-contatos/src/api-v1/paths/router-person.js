import { Router } from 'express';
import personModel from '../models/person-model';

const personRouter = Router();

// personRouter.use('/', function (req, res, next) {
//     res.send('Endpoint pessoa')
// })

personRouter.get('/', listPersons);

function listPersons(req, res, next) {
    personModel.list({}, (err, list) => {
        if (!err) {
            res.json(list)
        } else {
            res.status(400).send(err.message);
        }
    })
}

export { personRouter }