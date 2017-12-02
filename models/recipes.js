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
            type: DataTypes.STRING,
            allowNull: false
        },
        wholegrain_score: {
            type: DataTypes.STRING,
            allowNull: false
        },
        fruit_score: {
            type: DataTypes.STRING,
            allowNull: false
        },
        protein_score: {
            type: DataTypes.STRING,
            allowNull: false
        },
        peanuts: {
            type: DataTypes.STRING,
            allowNull: false
        },
        egg: {
            type: DataTypes.STRING,
            allowNull: false
        },
        soy: {
            type: DataTypes.STRING,
            allowNull: false
        },
        milk: {
            type: DataTypes.STRING,
            allowNull: false
        },
        fish: {
            type: DataTypes.STRING,
            allowNull: false
        },
        shellfish: {
            type: DataTypes.STRING,
            allowNull: false
        },
        wheat_gluten: {
            type: DataTypes.STRING,
            allowNull: false
        },
        viewed: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: 0
        },
        source: {
            type: DataTypes.TEXT
        },
        saved: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: 0
        }
    }, {
        timestamps: false
    });
    return Recipes;
};