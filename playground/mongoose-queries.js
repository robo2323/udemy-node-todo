const { ObjectID } = require('mongodb');
const { mongoose } = require('../server/db/mongoose');

const { Todo } = require('../server/models/todo');
const { User } = require('../server/models/user');


// const id = '5a8bdbdc41a0ece00e66dad222';

// if (!ObjectID.isValid(id)) {
//   console.log('not valid');
// }

// Todo.find({
//   _id: id
// }).then(todos => {
//   console.log('Todos', todos);
// });

// Todo.findOne({
//   _id: id
// }).then(todo => {
//   console.log('Todo', todo);
// });

// Todo.findById(id)
//   .then(todoById => {
//     if (!todoById) {
//       return console.log('not found');
//     }
//     console.log('TodoByID', todoById);
//   })
//   .catch(e => console.log(e));

const id='5a796f42ddb5b2fc2940ec0b';

if (!ObjectID.isValid(id)) {
  console.log('not valid');
}

User.findById(id)
  .then(userById => {
    if (!userById) {
      return console.log('not found');
    }
    console.log('userByID', userById);
  })
  .catch(e => console.log(e));

