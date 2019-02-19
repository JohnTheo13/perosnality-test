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
    .findOneAndUpdate(
      { _id: sessionId },
      { step: body.stepId },
      { upsert: true, new: true }
    )
    .populate({
      path: 'test',
      populate: { path: 'steps', populate: { path: 'words' } },
    })
    .populate('answers')
    .populate('step');

  if (testSession.answers && testSession.test.steps.length === testSession.answers.length) {
    testSession.state = 'finished';
  } else {
    testSession.state = 'started'
  }
  testSession.lastStep = body.stepId;
  await testSession.save();
  console.log(testSession.test.steps)
  ctx.body = testSession;
}

module.exports = saveAnswer;