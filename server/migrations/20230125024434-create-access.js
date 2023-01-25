'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Accesses', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      dateRequest: {
        type: Sequelize.DATE
      },
      document: {
        type: Sequelize.STRING
      },
      name: {
        type: Sequelize.INTEGER,
        onDelete: 'SET NULL',
        references: {
          model: 'Users',
          key: 'id',
          as: 'name'
        }
      },
      personalId: {
        type: Sequelize.INTEGER,
        onDelete: 'SET NULL',
        references: {
          model: 'Users',
          key: 'id',
          as: 'personalId'
        }
      },
      is: {
        type: Sequelize.INTEGER,
        onDelete: 'SET NULL',
        references: {
          model: 'Is',
          key: 'id',
          as: 'is'
        }
      },
      resource: {
        type: Sequelize.INTEGER,
        onDelete: 'SET NULL',
        references: {
          model: 'Resources',
          key: 'id',
          as: 'resource'
        }
      },
      role: {
        type: Sequelize.INTEGER,
        onDelete: 'SET NULL',
        references: {
          model: 'Roles',
          key: 'id',
          as: 'role'
        }
      },
      typeOfAccess: {
        type: Sequelize.STRING
      },
      comment: {
        type: Sequelize.TEXT
      },
      disableAccess: {
        type: Sequelize.STRING
      },
      dateDisableAccess: {
        type: Sequelize.DATE
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
    await queryInterface.dropTable('Accesses');
  }
};