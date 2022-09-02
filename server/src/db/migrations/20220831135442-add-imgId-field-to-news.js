'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    // logic for transforming into the new state
    return queryInterface.addColumn(
      'news',
      'imgId',
     Sequelize.STRING
    );
  },

  async down (queryInterface, Sequelize) {
    // logic for reverting the changes
    return queryInterface.removeColumn(
      'news',
      'img'
    );
  }
};
