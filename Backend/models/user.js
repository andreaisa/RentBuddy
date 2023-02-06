module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define('user', {
    Username: {
      type: Sequelize.STRING(20),
    },
    First_name: {
      type: Sequelize.STRING(20),
    },
    Last_name: {
      type: Sequelize.STRING(20),
    },
    Email: {
      type: Sequelize.STRING(100),
    },
    Password: {
      type: Sequelize.STRING(32),
    },

  });
  return User;
};
