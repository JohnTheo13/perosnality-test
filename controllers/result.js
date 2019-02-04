const mongoose = require('mongoose');
const Answer = mongoose.model('Answer');
const TestSession = mongoose.model('TestSession');
const ScoreCalculator = require('../score-calculator/score-calculator');
const ResultGenerator = require('../result-generator/result-generator');

const getResult = async ctx => {
  const { sessionId } = ctx.params;
  const testSession = await TestSession.findById(sessionId);
  if (!testSession) {
    ctx.throw(404, 'Not Found');
  }

  const answers = await Answer.find({ testSessionId: sessionId });

  const scoreCalculator = new ScoreCalculator(testSession.test.type);
  const resultGenerator = new ResultGenerator(testSession.test.type);
  const score = await scoreCalculator.calculateScore(answers);
  const result = await resultGenerator.generateResult(score);

  ctx.body = {
    testType: testSession.test.type,
    data: result
  };
}

module.exports = getResult;
