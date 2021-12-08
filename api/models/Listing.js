'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Listing extends Model {}

  Listing.init(
    {
      Status: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: true,
        },
      },
      Address: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: true,
        },
      },
      Price: {
        type: DataTypes.INTEGER,
        validate: {
          notEmpty: true,
        },
      },
      //any other info
      Description: {
        type: DataTypes.TEXT,
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
      income: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      DateListed: {
        type: DataTypes.DATEONLY,
      },
    },
    {
      sequelize,
      modelName: 'listing',
    }
  );

  Listing.associate = (models) => {
    // associations can be defined here

    models.Listing.belongsTo(models.Homeowner);
  };

  return Listing;
};
