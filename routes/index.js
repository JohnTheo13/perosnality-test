module.exports = (router) => {
  router.prefix('/test-provider/v1');
  router.use('/tests', require('./test'));
  // router.use('/users', require('./users'));
  router.use('/answer', require('./answer')); // post answer
  // router.use('/result', require('./result')); 
}
