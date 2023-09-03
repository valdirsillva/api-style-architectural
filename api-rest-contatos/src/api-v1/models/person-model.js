import db from '../utils/db'

function insert(obj, callback) {
    db.personsDB.insert(obj, callback);
}

function list(params, callback) {
    // const objFake = [
    //     {
    //         "nome": "Valdir Silva",
    //         "email": "valdirpiresba@gmail.com",
    //         "telefone": "11-9999-0001",
    //         "tags": [
    //             "amigos",
    //             "trabalho"
    //         ]
    //     }
    // ];


    // const err = null;
    // callback(err, objFake)

    db.personsDB.find({}, callback);
}

function update(id, obj, callback) {
    db.personsDB.update({ _id: id }, { $set: { data: { ...obj } } }, callback);
}

function deleteItem() {

}

export default { insert, list, update, deleteItem }