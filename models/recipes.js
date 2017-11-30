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
  serving_size: {
    type: DataTypes.INTEGER
  },
  ingredients: {
    type: DataTypes.TEXT
  },
  how_to_make: {
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
// Syncs with DB
//Recipes.sync();


// Makes the Chirp Model available for other files (will also create a table)
//module.exports = Recipes;