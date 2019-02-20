const testHandlers = {
    short: require('./short-test-compute'),
    long: require('./long-test-compute')
};

class ScoreCalculator {

  constructor(testType) {
    this.testType = testType;
  }

  calculateScore(answers) {
    return testHandlers[this.testType](answers);
  }
}

module.exports = ScoreCalculator;