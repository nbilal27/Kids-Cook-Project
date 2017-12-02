// Dependencies
// =============================================================

// This may be confusing but here DataTypes (capital) references the standard library
//var Sequelize = require("sequelize");
// sequelize (lowercase) references our connection to the DB.
//var sequelize = require("../config/connection.js");

module.exports = function(sequelize, DataTypes) {

var Users = sequelize.define("Users", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true, 
    allowNull: false,
    primaryKey: true
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    trim: true
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
    trim: true
  }
}, {
  timestamps: false
});
  return Users;
};



