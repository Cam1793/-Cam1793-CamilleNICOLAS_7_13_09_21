'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [{
      firstName: 'Admin',
      lastName: 'Admin',
      email: 'camille.nicolas@groupomania.com',
      admin: true,
      deleted: false,
      password: '$2a$12$raNYWkyDJ9moOA1y3UABCuLvMfs7m7S5iuH5kJn5axDDbYKzvoF7a',
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
