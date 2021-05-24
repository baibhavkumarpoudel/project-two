'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Warriors', [
      {
        name: 'Edwin Aldrin',
        username: 'buzz',
        password: 'apollo'
    },
    {
        name: 'Charles Conrad',
        username: 'pete',
        password: 'earth'
    },
    {
        name: 'Neil Armstrong',
        username: 'myspace',
        password: 'moonwalk'
    }
    ], {})
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
