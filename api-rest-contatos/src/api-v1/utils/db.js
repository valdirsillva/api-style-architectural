import Datastore from 'nedb';

// Instancia banco de dados em memória
const personsDB = new Datastore();
const organizationDB = new Datastore();


export default {
    personsDB,
    organizationDB
}
