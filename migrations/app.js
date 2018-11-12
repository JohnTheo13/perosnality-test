const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const steps = require('./steps');
const roles = require('./roles');
const rolewords = require('./role-words');

// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'perosnalityTests';

// Create a new MongoClient
const client = new MongoClient(url);

const insertDocuments = function(db, callback) {
  // Insert some documents
  db.collection('steps').find().toArray((err, items) => {
    if (items.length) {
      console.log('steps table exists');
      return;
    }
    const step = db.collection('steps');

    step.insertMany([
      ...steps
    ], function(err, result) {
      assert.equal(err, null);
      assert.equal(steps.length, result.result.n);
      assert.equal(steps.length, result.ops.length);
      console.log(`Inserted ${result.ops.length} steps into the collection`);
      callback(result);
    });
  })

  db.collection('roles').find().toArray((err, items) => {
    if (items.length) {
      console.log('roles table exists');
      return;
    }
    const role = db.collection('roles');

    role.insertMany([
      ...roles
    ], function(err, result) {
      assert.equal(err, null);
      assert.equal(roles.length, result.result.n);
      assert.equal(roles.length, result.ops.length);
      console.log(`Inserted ${result.ops.length} roles into the collection`);
      callback(result);
    });
  })

  db.collection('rolewords').find().toArray((err, items) => {
    if (items.length) {
      console.log('roleswords table exists');
      return;
    }
    const roleword = db.collection('rolewords');

    roleword.insertMany([
      ...rolewords
    ], function(err, result) {
      assert.equal(err, null);
      assert.equal(rolewords.length, result.result.n);
      assert.equal(rolewords.length, result.ops.length);
      console.log(`Inserted ${result.ops.length} rolewords into the collection`);
      callback(result);
    });
  })
}

// Use connect method to connect to the Server
client.connect(function(err) {
  assert.equal(null, err);
  console.log("Connected successfully to server");

  const db = client.db(dbName);

  insertDocuments(db, function() {
    client.close();
  });
});
