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
      rent: {
        type: DataTypes.INTEGER,
        validate: {
          notEmpty: true,
        },
      },
      bedrooms: {
        type: DataTypes.INTEGER,
        validate: {
          notEmpty: true,
        },
      },
      bathrooms: {
        type: DataTypes.INTEGER,
        validate: {
          notEmpty: true,
        },
      },
      reqCredit: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      reqIncome: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      status: {
        type: DataTypes.STRING,
        defaultValue: "pending",
      },
      borough: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      // ownerId: {
      //   type: DataTypes.INTEGER,
      // },
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
