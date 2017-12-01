// Dependencies
// =============================================================

// This may be confusing but here DataTypes (capital) references the standard library
//var Sequelize = require("sequelize");
// sequelize (lowercase) references our connection to the DB.
//var sequelize = require("../config/connection.js");

// Creates a "Chirp" model that matches up with DB
module.exports = function(sequelize, DataTypes) {

var Recipes = sequelize.define("Recipes", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true, 
    allowNull: false,
    primaryKey: true
  },
  recipe_name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  image: {
    type: DataTypes.TEXT
  },
  vegetable_score: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  wholegrain_score: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  fruit_score: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  protein_score: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  viewed: {
    type: DataTypes.BOOLEAN,
    allowNull: false, 
    defaultValue: 0
  },
  source: {
    type: DataTypes.TEXT
  }
}, {
  timestamps: false
});
  return Recipes;
};



