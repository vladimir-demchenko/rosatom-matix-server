'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    return await queryInterface.bulkInsert('Users', [
      {
        personalId: 1154,
        surname: 'Ivanov',
        name: 'Ivan',
        lastname: 'Ivanovich',
        phone: 790134,
        position: 1,
        subdivision: 1,
        department: 1,
        status: 1,
        comment: '',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        personalId: 34563,
        surname: 'Ivanov',
        name: 'Dmitry',
        lastname: 'Ivanovich',
        phone: 79015,
        position: 1,
        subdivision: 1,
        department: 1,
        status: 1,
        comment: '',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        personalId: 34511,
        surname: 'Ivanov',
        name: 'Vladimir',
        lastname: 'Ivanovich',
        phone: 7926,
        position: 1,
        subdivision: 1,
        department: 1,
        status: 1,
        comment: '',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {})
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return await queryInterface.bulkDelete('Users', null, {})
  }
};
