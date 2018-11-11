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
  // Get the documents collection
  const step = db.collection('steps');
  const role = db.collection('roles');
  const roleWord = db.collection('rolewords')
  // Insert some documents
  step.insertMany([
    ...steps
  ], function(err, result) {
    assert.equal(err, null);
    assert.equal(steps.length, result.result.n);
    assert.equal(steps.length, result.ops.length);
    console.log(`Inserted ${result.ops.length} steps into the collection`);
    callback(result);
  });

  role.insertMany([
    ...roles
  ], function(err, result) {
    assert.equal(err, null);
    assert.equal(roles.length, result.result.n);
    assert.equal(roles.length, result.ops.length);
    console.log(`Inserted ${result.ops.length} roles into the collection`);
    callback(result);
  });

  roleWord.insertMany([
    ...rolewords
  ], function(err, result) {
    assert.equal(err, null);
    assert.equal(rolewords.length, result.result.n);
    assert.equal(rolewords.length, result.ops.length);
    console.log(`Inserted ${result.ops.length} rolewords into the collection`);
    callback(result);
  });
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
