const exampleService = require('./example.service.cjs')

module.exports = {
  doTest: async (req, res, next) => {
    try {
      await exampleService.doTest();
      return res.send('Hello World!');
    } catch (err) {
      return next(err);
    }
  },
};
