const mongoose = require('mongoose');
const Answer = mongoose.model('Answer');
const TestSession = mongoose.model('TestSession');

saveAnswer = async ctx => {
  const { params: { sessionId }, request: { body }} = ctx;

  const answerPromise = Answer
    .findOneAndUpdate(
      { testSessionId: sessionId, stepId: body.stepId },
      { ...body },
      { upsert: true, new: true }
    );

  const testSessionPromise = TestSession
    .findById(sessionId)
    .populate({
      path: 'test',
      populate: { path: 'steps' },
    })
    .populate('answers', { project: '-data' });

  const [answer, testSession] = await Promise.all([answerPromise, testSessionPromise]);

  if (testSession.answers && testSession.test.steps.length === testSession.answers.length) {
    testSession.state = 'finished';
    await testSession.save();
  }

  ctx.body = testSession;
}

module.exports = saveAnswer;