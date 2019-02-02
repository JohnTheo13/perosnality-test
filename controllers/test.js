const mongoose = require('mongoose');
const Test = mongoose.model('Test');
const TestSession = mongoose.model('TestSession');
const { generateTest }= require('./helpers');

exports.getTests = async (ctx) => {
  const tests = await Test.find();
  ctx.body = tests
}

exports.getTestById = async (ctx) => { // NOTE: change to get by stlug
  let test = await Test.findById(ctx.params.testId).populate('steps'); // NOTE: check if we need this here
  const testSession = await TestSession.findById(test.id)
  ctx.body = {
    test,
    lastSessionId: testSession && testSession.id,
    state: testSession ? testSession.state : 'not-started',
  };
}

exports.resumeTestSession = async ctx => {
  const test = await TestSession
    .findById(ctx.params.sessionId)
    .populate({
      path: 'test',
      populate: { path: 'steps' }
    })
  ctx.body = test;
}

exports.createTestSession = async (ctx) => {
  const { testId } = ctx.params;
  ctx.body = await generateTest(testId);
}