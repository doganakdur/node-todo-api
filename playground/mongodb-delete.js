//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if(err) {
    return console.log('error in mongodb : ', err);
  }

  console.log('connected to mongodb server');

  //deleteMany
  // db.collection('Todos').deleteMany({text: 'eat lunch'}).then((result) => {
  //   console.log(result);
  // });

  //deleteOne - finds that matches the criteria and delete the first one
  // db.collection('Todos').deleteOne({text: 'eat lunch'}).then((result) => {
  //   console.log(result);
  // })

  //findOneAndDelete -- find first one delete it and returns deleted one which is awesome
  // db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
  //   console.log(result);
  // });

  db.collection('Users').deleteOne({age:27}).then((result) => {
    console.log('delted');
  });

  //db.close();

});
