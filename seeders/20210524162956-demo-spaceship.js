'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Spaceships', [
      {
        name: "UNSC Infinity"
      },
      {
        name: "Battlestar Galactica"
      },
      {
        name: "Millennium Falcon"
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
