'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('team', [
      {
        name: 'Red',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Blue",
        createdAt: new Date(),
        updatedAt: new Date() , 
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
