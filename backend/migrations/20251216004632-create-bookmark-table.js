
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.createTable('bookmarks', {
      bookmark_Id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    job_Id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: 'job', // name of Target model
            key: 'job_Id', // key in Target model that we're referencing
        },

    },
    jobseeker_Id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: 'jobseeker', // name of Target model
            key: 'jobseeker_Id', // key in Target model that we're referencing
        },
     
    },
    created_at: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW,
    },
},
    );

  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.dropTable('bookmarks');
  }
};