'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      personalId: {
        type: Sequelize.INTEGER
      },
      surname: {
        type: Sequelize.STRING
      },
      name: {
        type: Sequelize.STRING
      },
      lastname: {
        type: Sequelize.STRING
      },
      phone: {
        type: Sequelize.INTEGER
      },
      position: {
        type: Sequelize.INTEGER,
        onDelete: 'SET NULL',
        references: {
          model: 'Positions',
          key: 'id',
          as: 'position'
        }
      },
      subdivision: {
        type: Sequelize.INTEGER,
        onDelete: 'SET NULL',
        references: {
          model: 'Subdivisions',
          key: 'id',
          as: 'subdivision'
        }
      },
      department: {
        type: Sequelize.INTEGER,
        onDelete: 'SET NULL',
        references: {
          model: 'Departments',
          key: 'id',
          as: 'department'
        }
      },
      status: {
        type: Sequelize.INTEGER
      },
      comment: {
        type: Sequelize.TEXT
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Users');
  }
};