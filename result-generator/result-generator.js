

const testHandlers = {
  short: require('./short-test-result'),
  long: require('./long-test-result')
};

class ResultGenerator {

  constructor(testType) {
    this.testType = testType;
  }

  async generateResult(score) {
    return testHandlers.short(score);
  }
}

module.exports = ResultGenerator;
