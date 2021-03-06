// import environmental variables from our variables.env file
require('dotenv').config();
const mongoose = require('mongoose');
const { port, database } = require('./config')

// Connect to our Database and handle any bad connections
mongoose.connect(database, { useNewUrlParser: true, useCreateIndex: true });
// mongoose.Promise = global.Promise; // Tell Mongoose to use ES6 promises
mongoose.connection.on('error', (err) => {
  console.error(`🙅 🚫 🙅 🚫 🙅 🚫 🙅 🚫 → ${err.message}`);
});

// READY?! Let's go!

// import MODELS
require('./models/Role');
require('./models/RoleWord');
require('./models/Step');
require('./models/Test');
require('./models/TestSession');
require('./models/Answer');
require('./models/Story');

const server = require('./server')
server.listen(port, () => console.log(`API server started on ${port}`))

module.exports =  server;
