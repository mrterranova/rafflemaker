//sequelize table
module.exports = function(sequelize, DataTypes) {
    var Raffle = sequelize.define("raffle", {
      name: DataTypes.TEXT, 
      allowNull: false, 
      validate: {
          notEmpty: false,
          len: {
            args: [1, 50], 
            msg: 'Please provide name within 50 characters'
          }
      }, 
      saved_entries: DataTypes.BOOLEAN, 
      allowNull: false,
      defaultValue: false
    });
    return Raffle;
  };