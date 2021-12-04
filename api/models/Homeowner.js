"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Homeowner extends User {}

  Homeowner.init(
    {
      postings: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: true,
        },
      },
    },
    {
      sequelize,
      modelName: "homeowner",
    }
  );

  Homeowner.associate = (models) => {
    // associations can be defined here

    models.Homeowner.hasMany(models.Listing);
  };

  return Homeowner;
};
