//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if(err) {
    return console.log('error in mongodb : ', err);
  }

  console.log('connected to mongodb server');

  // db.collection('Todos').findOneAndUpdate({
  //   _id: new ObjectID('5b892aae321280a0364c232a')
  // }, {
  //   $set: {
  //     completed: true
  //   }
  // }, {
  //   returnOriginal: false
  // }).then((result) => {
  //   console.log(result);
  // });

  // db.collection('Users').findOneAndUpdate({
  //   name: 'doan Akdur'}, {
  //     $set: {
  //       name: 'Dogan Akdur'
  //     }
  //   }, {
  //     returnOriginal: false
  //   }).then((result) => {
  //     console.log(result);
  //   });

  db.collection('Users').findOneAndUpdate({
    _id: new ObjectID('5b869005a9bfc3a357198e08')
  },{ 
    $set: {
    name: 'doooan'
    },
    $inc: {
      age: 1
    }
  } , {
    returnOriginal: false
  }).then((result) => {
    console.log(result);
  });
  //db.close();

});
