const mongoose = require('mongoose');
const Answer = mongoose.model('Answer');
const TestSession = mongoose.model('TestSession');

saveAnswer = async ctx => {
  const { params: { sessionId }, request: { body }} = ctx;
console.log(body)
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
    .populate('answers', { $project: '-data -testSessionId' });

  const [answer, testSession] = await Promise.all([answerPromise, testSessionPromise]);

  if (testSession.answers && testSession.test.steps.length === testSession.answers.length) {
    testSession.state = 'finished';
    await testSession.save();
  }
  
  testSession.state = 'started'
  await testSession.save();
  console.log(testSession)
  ctx.body = testSession;
}

module.exports = saveAnswer;