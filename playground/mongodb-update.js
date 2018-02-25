const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('cannot connect to DB');
  }
  console.log('connected to DB');
  db
    .collection('Users')
    .findOneAndUpdate(
      { _id: new ObjectID('5a78fc551766432cc4e95823') },
      {
        $set: {
          name: 'rob'
        },
        $inc: {
          age: 2
        }
      },
      {
        returnOriginal: false
      }
    )
    .then(
      res => {
        console.log(res);
      },
      err => {
        return console.log(err);
      }
    );

  //db.close();
});
