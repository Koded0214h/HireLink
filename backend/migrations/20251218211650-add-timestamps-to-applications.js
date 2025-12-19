'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const table = await queryInterface.describeTable('applications');
    if (!table.createdAt) {
      await queryInterface.addColumn('applications', 'createdAt', {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      });
    }
    if (!table.updatedAt) {
      await queryInterface.addColumn('applications', 'updatedAt', {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      });
    }
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('applications', 'createdAt');
    await queryInterface.removeColumn('applications', 'updatedAt');
  }
};
