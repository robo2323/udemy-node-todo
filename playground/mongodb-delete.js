const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('cannot connect to DB');
  }
  console.log('connected to DB');

  // db
  //   .collection('Users')
  //   .deleteMany({ name: 'rob' })
  //   .then(result => {
  //     console.log(result);
  //   });

  //  db
  //   .collection('Todos')
  //   .deleteOne({ text: 'eat' })
  //   .then(result => {
  //     console.log(result);
  //   });

  db
    .collection('Users')
    .findOneAndDelete({ _id: new ObjectID('5a78fb9fefc6781664baa06b') })
    .then(result => {
      console.log(result);
    });

  //db.close();
});
