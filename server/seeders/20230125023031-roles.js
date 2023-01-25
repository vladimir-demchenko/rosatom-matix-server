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
    return await queryInterface.bulkInsert('Roles', [
      {
        name: 'Доступ к корпоративному порталу',
        idResource: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Доступ к сетевому файловому ресурсу',
        idResource: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Сетевой доступ',
        idResource: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Защищенная электронная почта VIPNET',
        idResource: 3,
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
    return await queryInterface.bulkDelete('Roles', null, {});
  }
};
