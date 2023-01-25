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
   return await queryInterface.bulkInsert('Resources', [
    {
      name: 'Доступ к корпоративному порталу',
      idIS: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Доступ к сетевым ресурсам',
      idIS: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Защищенная электронная почта VIPNET',
      idIS: 1,
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
    return await queryInterface.bulkDelete('Resources', null, {});
  }
};
