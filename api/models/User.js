"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {}
  User.init(
    {
      UserID: {
        //weather tenant or homeowner
        type: DataTypes.STRING,
        validate: {
          notEmpty: true,
        },
      },
      status: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      firstName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      lastName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: true,
        },
      },
      password: {},
    },
    {
      sequelize,
      modelName: "user",
    }
  );
  User.associate = (models) => {
    // associations can be defined here
    models.User.HasMany(models.Listing, { through: "UserListing" });
  };

  return User;
};
