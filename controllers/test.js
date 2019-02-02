const mongoose = require('mongoose');
const Test = mongoose.model('Test');
const TestSession = mongoose.model('TestSession');
const { generateTest }= require('./helpers');

exports.getTests = async (ctx) => {
  const tests = await Test.find();
  ctx.body = tests
}

exports.getTestById = async (ctx) => {
  let test = await Test.findById(ctx.params.testId).populate('steps'); // NOTE: check if we need this here
  const testSession = await TestSession.findById(test.id)
  ctx.request.test = test;
  ctx.body = {
    test,
    lastSessionId: testSession && testSession.id,
    state: testSession ? testSession.state : 'not-started',
  };
}

exports.createTestSession = async (ctx) => {
  const { testId } = ctx.params;
  ctx.body = await generateTest(testId);
}