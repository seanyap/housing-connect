"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Listing extends Model {}

  Listing.init(
    {
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
      ListingID: {
        type: DataTypes.INTEGER,
        validate: {
          notEmpty: true,
        },
      },
      Description: {
        type: DataTypes.TEXT,
        validate: {
          notEmpty: true,
        },
      },
      OwnerID: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: true,
        },
      },
      DateListed: {
        type: DataTypes.DATEONLY,
      },
    },
    {
      sequelize,
      modelName: "listing",
    }
  );

  Listing.associate = (models) => {
    // associations can be defined here
    models.Listing.BelongsTo(models.User);
  };

  return Listing;
};
