// const MongoClient = require('mongodb').MongoClient;
const {MongoClient} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {

    if(err) {
        return console.log('Unbale to connect to mongo server');
    } 
    console.log('Connected to MongoDB server.');

    const db = client.db('TodoApp');

    db.collection('Todos').insertOne({
        text: 'Walk the dog',
        completed: false
    }, (err, result) => {
        if(err) {
            return console.log('Inable to insert: ' + err);
        }
        console.log(JSON.stringify(result.ops, undefined, 2));
    });
    
    db.collection('Users').insertOne({
        name: 'Pankaj Shinde',
        age: 25,
        location: 'Pune'
    }, (err, result) => {
        if(err) {
            return console.log('Inable to insert: ' + err);
        }
        console.log(JSON.stringify(result.ops, undefined, 2));
    });
    

    client.close();

});




