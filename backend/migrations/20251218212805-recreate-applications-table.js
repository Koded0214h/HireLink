'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.dropTable('applications');
    await queryInterface.createTable('applications', {
      application_Id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      job_Id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'job',
          key: 'job_Id'
        },
        onDelete: 'CASCADE'
      },
      jobseeker_Id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'jobseeker',
          key: 'jobseeker_Id'
        }
      },
      resume_url: {
        type: Sequelize.STRING,
        allowNull: false
      },
      cover_letter: {
        type: Sequelize.TEXT,
        allowNull: true
      },
      applied_date: {
        type: Sequelize.DATE,
        allowNull: false
      },
      status: {
        type: Sequelize.ENUM("Applied", "Under Review", "Interview Scheduled", "Offered", "Rejected"),
        allowNull: false,
        defaultValue: "Applied"
      },
      reviewed_at: {
        type: Sequelize.DATE,
        allowNull: false
      },
      notes: {
        type: Sequelize.TEXT,
        allowNull: true
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      }
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('applications');
  }
};
