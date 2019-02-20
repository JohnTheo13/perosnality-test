const mongoose = require('mongoose');
const Answer = mongoose.model('Answer');
const TestSession = mongoose.model('TestSession');
const ScoreCalculator = require('../score-calculator/score-calculator');
const ResultGenerator = require('../result-generator/result-generator');

const getResult = async ctx => {
  const { sessionId } = ctx.params;
  const testSession = await TestSession.findById(sessionId).populate('test');
  if (!testSession) {
    ctx.throw(404, 'Not Found');
  }

  const answers = await Answer.find({ testSessionId: sessionId });

  const scoreCalculator = new ScoreCalculator(testSession.test.type);
  const resultGenerator = new ResultGenerator(testSession.test.type);
  const score = await scoreCalculator.calculateScore(answers);
  const result = await resultGenerator.generateResult(score);
console.log(testSession.test)
  ctx.body = {
    testType: testSession.test.type,
    result
  };
}

module.exports = getResult;
