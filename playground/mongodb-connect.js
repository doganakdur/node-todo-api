//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if(err) {
    return console.log('error in mongodb : ', err);
  }

  console.log('connected to mongodb server');

  // db.collection('Todos').insertOne({
  //     text: 'something to do',
  //     completed: false
  // }, (err, result) => {
  //   if(err) {
  //     return console.log('unable to insert todo ', err);
  //   }
  //
  //   console.log(JSON.stringify(result.ops, undefined, 2));
  //
  // });

  // db.collection('Users').insertOne({
  //   name: 'Dogan Akdur',
  //   age: 25,
  //   location: 'Izmir'
  // }, (err, result) => {
  //   if(err) {
  //     return console.log('unable to insert : ', err);
  //   }
  //   console.log(JSON.stringify(result.ops[0]._id.getTimestamp()));
  // });

  db.close();

});
