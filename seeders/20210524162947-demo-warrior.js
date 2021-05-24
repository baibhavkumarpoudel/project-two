'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Warriors', [
      {
        name: 'Edwin Aldrin',
        username: 'buzz',
        password: 'apollo',
        spaceshipId: 1
    },
    {
        name: 'Charles Conrad',
        username: 'pete',
        password: 'earth',
        spaceshipId: 2
    },
    {
        name: 'Neil Armstrong',
        username: 'myspace',
        password: 'moonwalk',
        spaceshipId: 3
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
