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

    // // deleteMany
    // db.collection('Todos').deleteMany({ text: '1111111111' }).then((result) => {
    //     console.log('result: ' + result);
    // });

    // // deleteOne
    // db.collection('Todos').deleteOne({ text: '11111' }).then((result) => {
    //     console.log('result: ' + result);
    // });

    // // findOneAndDelete
    // db.collection('Todos').findOneAndDelete({ completed: false }).then((result) => {
    //     console.log('result: ' + result);
    // });
    

    // // findOneAndDelete
    db.collection('Todos').findOneAndDelete({ _id: new ObjectId('5afbd06c3a44d9f43b9c96b6') }).then((result) => {
        console.log('result: ' + result);
    });
    
    client.close();

});




