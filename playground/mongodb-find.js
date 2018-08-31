//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if(err) {
    return console.log('error in mongodb : ', err);
  }

  console.log('connected to mongodb server');

  // db.collection('Todos').find({_id: new ObjectID('5b868f0275b025a33778bb5f')}).toArray().then((docs) => {
  //   console.log('todos');
  //   console.log(JSON.stringify(docs, undefined, 2));
  // }, (err) => {
  //   console.log('unable to fetch todos', err)
  // });

  db.collection('Todos').find().count().then((count) => {
    console.log('todos');
    console.log('count: ', count);
  }, (err) => {
    console.log('unable to fetch todos', err)
  });


  db.collection('Users').find().count().then((count) => {
    console.log('count ', count);
  }, (err) => {
    console.log('error ', err);
  });
  //db.close();

});
