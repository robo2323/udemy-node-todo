// const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');

// const obj = new ObjectID();
// console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('cannot connect to DB');
  }
  console.log('connected to DB');

  // db.collection('Todos').insertOne(
  //   {
  //     text: 'Something to do',
  //     completed: false
  //   },
  //   (err, result) => {
  //     if (err) {
  //       return console.log('unable to insert data', err);
  //     }
  //     console.log(JSON.stringify(result.ops, undefined, 2));
  //   }
  // );

  // db.collection('Users').insertOne(
  //   {
  //     name: 'rob',
  //     age: '35',
  //     location: 'sydney'
  //   },
  //   (err, res) => {
  //     if (err) {
  //       return console.log('cannot insert data', err);
  //     }
  //     console.log(JSON.stringify(res.ops, undefined, 2));
  //     console.log(res.ops[0]._id.getTimestamp());

  //   }
  // );

  db.close();
});
