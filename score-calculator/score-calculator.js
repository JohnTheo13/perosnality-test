const testHandlers = {
    short: require('./short-test-compute'),
    long: require('./long-test-compute')
};

class ScoreCalculator {

  constructor(testType) {
    this.testType = testType;
  }

  calculateScore(answers) {
    return testHandlers.short(answers);
  }
}

module.exports = ScoreCalculator;