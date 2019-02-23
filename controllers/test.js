const mongoose = require('mongoose');
const Test = mongoose.model('Test');
const TestSession = mongoose.model('TestSession');
const Role = mongoose.model('Role');
const { generateTest }= require('./helpers');

exports.getTests = async (ctx) => {
  const tests = await Test.find();
  ctx.body = tests
}

exports.getTestById = async ctx => { // NOTE: change to get by stlug
  let test = await Test.findById(ctx.params.testId); // NOTE: check if we need this here
  const testSession = await TestSession.findOne({ test: test.id })
  // ctx.request.testSession = testSession ? testSession : undefined 
  ctx.body = {
    test,
    lastSessionId: testSession && testSession.id,
    state: testSession ? testSession.state : 'not-started',
  };
}

exports.resumeTestSession = async ctx => {
  const test = await TestSession
    .findOne({ userId: ctx.params.userId })
    .populate({
      path: 'test',
      populate: { path: 'steps', populate: { path: 'words' } },
    })
    .populate('answers')
    .populate('step');
  ctx.body = test;
}

exports.createTestSession = async (ctx) => {
  const { testId, userId } = ctx.params;
  ctx.body = await generateTest(testId, userId);
}

exports.restartTest = async (ctx) => {
  const { sessionId } = ctx.params;
  ctx.body = await generateTest(null, null, sessionId);
}


exports.resumeShort = async (ctx) => {
  const { params: { userId, testId } } = ctx;
  const testSession = await TestSession
    .findOne({ userId, test: testId })
    .populate({
      path: 'test',
      populate: { path: 'steps' },
    })
    .populate('answers');
  const { answers } = testSession;
  console.log(answers[0].data.mostRepresentativeTypes)
  if (answers[0].data && answers[0].data.mostRepresentativeTypes) {
    const roles = await Role
      .find({
        'roleId': { $in: [...answers[0].data.mostRepresentativeTypes] },
      }, {
        descriptionStrong: 0,
        descriptionPit: 0
      });
    console.log(roles)
    ctx.body = { testSession, roles };
  }
}