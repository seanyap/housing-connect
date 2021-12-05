"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Homeowner extends Model {}

  Homeowner.init(
    {
      postings: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: true,
        },
      },
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
        unique: true,
        allowNull: false,
        validate: {
          isEmail: true,
        },
      },
      passwordHash: { type: DataTypes.STRING },
      password: {
        type: DataTypes.VIRTUAL,
        validate: {
          isLongEnough: (val) => {
            if (val.length < 7) {
              throw new Error('Please choose a longer password');
            }
          },
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
  Homeowner.beforeSave((homeowner, options) => {
    if (homeowner.password) {
      Homeowner.passwordHash = bcrypt.hashSync(Homeowner.password, 10);
    }
  });

  return Homeowner;
};
