"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Listing extends Model {}

  Listing.init(
    {
      address: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: true,
        },
      },
      price: {
        type: DataTypes.INTEGER,
        validate: {
          notEmpty: true,
        },
      },
      bedroomAmount: {
        type: DataTypes.INTEGER,
        validate: {
          notEmpty: true,
        },
      },
      bathroomAmount: {
        type: DataTypes.INTEGER,
        validate: {
          notEmpty: true,
        },
      },
      creditScore: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      minIncome: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "listing",
    }
  );

  Listing.associate = (models) => {
    // associations can be defined here

    models.Listing.belongsTo(models.Homeowner);
  };

  return Listing;
};
