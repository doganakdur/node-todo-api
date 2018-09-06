const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((result) => {
//   console.log(result);
// });

//we can get removed item back and print
// Todo.findOneAndRemove({_id: ''}).then((todo) => {
//
// });

Todo.findByIdAndRemove('5b90ed41321280a0364c2372').then((todo) => {
  console.log(todo);
});
