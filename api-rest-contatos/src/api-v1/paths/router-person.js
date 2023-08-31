import { Router } from 'express';
import personModel from '../models/person-model';

const personRouter = Router();

personRouter.get('/', listPersons);
personRouter.post('/', insertPersons);

function listPersons(req, res, next) {
    personModel.list({}, (err, list) => {
        if (!err) {
            res.json(list)
        } else {
            res.status(400).send(err.message);
        }
    })
}

function insertPersons(req, res, next) {
    personModel.insert(req.body, (err, newObj) => {
        if (!err) {
            res.json(newObj)
        } else {
            res.status(400).send(err.message);
        }
    })
}

export { personRouter }