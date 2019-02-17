const mongoose = require('mongoose');
const Answer = mongoose.model('Answer');
const TestSession = mongoose.model('TestSession');

saveAnswer = async ctx => {
  const { params: { sessionId }, request: { body }} = ctx;
  await Answer
    .findOneAndUpdate(
      { testSessionId: sessionId, stepId: body.stepId },
      { ...body },
      { upsert: true, new: true }
    );

  const testSession = await TestSession
    .findById(sessionId)
    .populate({
      path: 'test',
      populate: { path: 'steps' },
    })
    .populate('answers');

  if (testSession.answers && testSession.test.steps.length === testSession.answers.length) {
    testSession.state = 'finished';
  } else {
    testSession.state = 'started'
  }

  await testSession.save();
  console.log(testSession)
  ctx.body = testSession;
}

module.exports = saveAnswer;