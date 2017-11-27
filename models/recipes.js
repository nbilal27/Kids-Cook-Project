// Dependencies
// =============================================================

// This may be confusing but here Sequelize (capital) references the standard library
var Sequelize = require("sequelize");
// sequelize (lowercase) references our connection to the DB.
var sequelize = require("../config/connection.js");

// Creates a "Chirp" model that matches up with DB
var Recipes = sequelize.define("recipes", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true, 
    allowNull: false,
    primaryKey: true
  },
  recipe_name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  image: {
    type: Sequelize.TEXT
  },
  serving_size: {
    type: Sequelize.INTEGER
  },
  ingredients: {
    type: Sequelize.TEXT
  },
  how_to_make: {
    type: Sequelize.TEXT
  },
  vegetable_score: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  wholegrain_score: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  fruit_score: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  protein_score: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  viewed: {
    type: Sequelize.BOOLEAN,
    allowNull: false, 
    defaultValue: 0
  },
  source: {
    type: Sequelize.TEXT
  }
}, {
  timestamps: false
});

// Syncs with DB
Recipes.sync();

// Makes the Chirp Model available for other files (will also create a table)
module.exports = Recipes;