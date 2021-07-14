const exampleRouter = require('./services/example/example.router');

module.exports = (app) => {
  app.use('/examples', exampleRouter);
};