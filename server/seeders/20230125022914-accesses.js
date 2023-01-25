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
    return await queryInterface.bulkInsert('Accesses', [
      {
        dateRequest: new Date(),
        document: '1244N354',
        name: 1,
        personalId: 1,
        is: 1,
        resource: 1,
        role: 1,
        typeOfAccess: 'Access',
        comment: '',
        disableAccess: '',
        dateDisableAccess: null,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        dateRequest: new Date(),
        document: '23434A1',
        name: 2,
        personalId: 2,
        is: 1,
        resource: 1,
        role: 1,
        typeOfAccess: 'Access',
        comment: '',
        disableAccess: '',
        dateDisableAccess: null,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        dateRequest: new Date(),
        document: '54646Q1',
        name: 3,
        personalId: 3,
        is: 1,
        resource: 1,
        role: 1,
        typeOfAccess: 'Access',
        comment: '',
        disableAccess: '',
        dateDisableAccess: null,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return await queryInterface.bulkDelete('Accesses', null, {});
  }
};
