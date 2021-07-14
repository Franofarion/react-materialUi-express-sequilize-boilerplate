const exampleRouter = require('express').Router();

const {
  getAll,
//   getOne,
//   createOne,
//   updateOne,
//   deleteOne
} = require('./example.controller');

exampleRouter.get('/', getAll);
// exampleRouter.get('/:exampleId', getOne);
// exampleRouter.post('/', createOne);
// exampleRouter.put('/:exampleId', updateOne);
// exampleRouter.delete('/:exampleId', deleteOne);

module.exports = exampleRouter;