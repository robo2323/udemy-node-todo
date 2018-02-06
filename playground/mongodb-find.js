const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('cannot connect to DB');
  }
  console.log('connected to DB');

  // db
  //   .collection('Todos')
  //   .find({
  //     _id: new ObjectID('5a78f9ff53e61229a87ccc60')
  //   })
  //   .toArray()
  //   .then(
  //     docs => {
  //       console.log('Todos:');
  //       console.log(JSON.stringify(docs, undefined, 2));
  //     },
  //     err => {
  //       console.log('cannot fetch data', err);
  //     }
  //   );

  // db
  //   .collection('Todos')
  //   .find()
  //   .count()
  //   .then(
  //     count => {
  //       console.log(`Todos: ${count}`);
  //     },
  //     err => {
  //       console.log('cannot fetch data', err);
  //     }
  //   );

  db
    .collection('Users')
    .find({ name: 'rob' })
    .toArray()
    .then(
      docs => {
        console.log(JSON.stringify(docs, undefined, 2));
      },
      err => {
        console.log(err);
      }
    );

  db.close();
});
