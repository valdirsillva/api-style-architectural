function insert() {

}

function list(params, callback) {
    const objFake = [
        {
            "nome": "Valdir Silva",
            "email": "valdirpiresba@gmail.com",
            "telefone": "11-9999-0001",
            "tags": [
                "amigos",
                "trabalho"
            ]
        }
    ];
    const err = null;
    callback(err, objFake)
}

function update() {

}

function deleteItem() {

}

export default { insert, list, update, deleteItem }