// const MongoClient = require('mongodb').MongoClient;
const {MongoClient} = require('mongodb');
// const ObjectId = require('mongodb').ObjectId;
const {ObjectId} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {

    if(err) {
        return console.log('Unbale to connect to mongo server');
    } 
    console.log('Connected to MongoDB server.');

    const db = client.db('TodoApp');

    // console.log('Todos doc: ');
    // db.collection('Todos').find({ _id: new ObjectId("5afbb770856e860c0814540c") }).toArray().then((docs) => {
    //     console.log(JSON.stringify(docs, undefined, 2));
    // }, (err) => {
    //     console.log('Error in fetching docs:', err);
    // });
    
    db.collection('Todos').find().count().then((count) => {
        console.log('Todos count: ' + count);
    }, (err) => {
        console.log('Error in fetching docs:', err);
    });
    
    

    client.close();

});




