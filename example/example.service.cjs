const sleep = (ms) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
  };
  
  module.exports = {
    doTest: async () => {
      await sleep(Math.floor(Math.random() * 1000));
    },
  };
  