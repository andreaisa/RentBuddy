module.exports = (sequelize, Sequelize) => {
    const Expense = sequelize.define('expense', {
      Rent: {
        type: Sequelize.BIGINT(11),
      },
      Gas: {
        type: Sequelize.BIGINT(11),
      },
      Water: {
        type: Sequelize.BIGINT(11),
      },
      Electric: {
        type: Sequelize.BIGINT(11),
      },
  
    });
    return Expense;
  };
  