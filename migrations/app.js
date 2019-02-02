require('dotenv').config();
const mongoose = require('mongoose');

mongoose.connect(process.env.DATABASE);
// Models
const RoleWord = require('../models/RoleWord');
const Role = require('../models/Role');
const Step = require('../models/Step')
const Test = require('../models/Test')

// DATA
const roleWords = require('./role-words');
const roles = require('./roles');
const steps = require('./steps');
const tests = require('./test');

async function deleteData() {
  console.log('😢😢 Goodbye Data...');
  await RoleWord.remove();
  await Role.remove();
  await Step.remove();
  await Test.remove();
  console.log('Data Deleted. To load sample data, run\n\n\t npm run sample\n\n');
  process.exit();
}

async function loadData() {
  try {
    await RoleWord.insertMany(roleWords);
    await Role.insertMany(roles);
    await Step.insertMany(steps);
    await Test.insertMany(tests) 
    console.log('👍👍👍👍👍👍👍👍 Done!');
    process.exit();
  } catch(e) {
    console.log('\n👎👎👎👎👎👎👎👎 Error! The Error info is below but if you are importing sample data make sure to drop the existing database first with.\n\n\t npm run blowitallaway\n\n\n');
    console.log(e);
    process.exit();
  }
}
if (process.argv.includes('--delete')) {
  deleteData();
} else {
  loadData();
}