const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// let id = '5b8d0ff756e9cb26b94b273111';
//
// if(!ObjectID.isValid(id)) {
//   console.log('ID not valid');
// }

// Todo.find({
//   _id: id
// }).then((todos) => {
//   console.log('Todos: ', todos);
// });
//
// Todo.findOne({
//   _id: id
// }).then((todo) => {
//   console.log('Todo: ', todo);
// });

// Todo.findById(id).then((todo) => {
//   if(!todo) {
//     return console.log('id not found');
//   }
//   console.log('todo findbyid: ', todo);
// }).catch((e) => console.log(e));

let id = '5b8944b6f3856a50b24903b6';

if(!ObjectID.isValid(id)) {
  console.log('ID not valid');
}
User.findById(id).then((todo) => {
  console.log('todo: ', todo);
});
