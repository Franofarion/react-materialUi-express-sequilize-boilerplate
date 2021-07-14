const { sequelize, Sequelize } = require('../../models');

const Example = sequelize.define('example', {
  title: {
    type: Sequelize.STRING,
  },
  description: {
    type: Sequelize.STRING,
  },
});

// force: true will drop the table if it already exists
Example.sync({ force: false }).then(() => {
  // Table created
  return Example.create({
    title: 'First example',
    description: 'this is the first description',
  });
});

const findAll = async () => {
  try {
    const result = await Example.findAll();
    return result;
  } catch (e) {
    throw new Error(e);
  }
};

module.exports = {
  findAll,
};
