import { Router } from 'express';
import personModel from '../models/person-model';
import { validate } from 'jsonschema'
import { personsSchema } from '../models/schemas'

const personRouter = Router();

personRouter.get('/', listPersons);
personRouter.post('/', insertPersons);
personRouter.put('/:id', updatePerson);

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
    // Validação do documento JSON recebido
    const result = validate(req.body, personsSchema);

    console.log(personsSchema)

    if (result.errors.length > 0) {
        res.status(400).send('Erro no formato do objeto JSON');
        return;
    }

    personModel.insert(req.body, (err, newObj) => {
        if (!err) {
            res.json(newObj)
        } else {
            res.status(400).send(err.message);
        }
    })
}

function updatePerson(req, res, next) {
    const id = req.params.id
    const personObj = req.body

    personModel.update(id, personObj, (err, newObj) => {
        if (!err) {
            res.json(newObj)
        } else {
            res.status(400).send(err.message)
        }
    })
}

export { personRouter }