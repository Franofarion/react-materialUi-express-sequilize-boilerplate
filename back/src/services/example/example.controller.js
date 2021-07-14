const { findAll } = require('./example.model');

const getAll = async (req, res) => {
  try {
    const rawData = await findAll();
    res.json(rawData);
  } catch (err) {
    res.status(500).send(err);
  }
};

module.exports = {
  getAll,
  // getOne,
  // createOne,
  // updateOne,
  // deleteOne
};
