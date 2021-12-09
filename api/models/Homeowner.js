'use strict';
const { Model } = require('sequelize');
const bcrypt = require('bcryptjs');

module.exports = (sequelize, DataTypes) => {
  class Homeowner extends Model {}

  Homeowner.init(
    {
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
      type: {
        type: DataTypes.STRING,
        defaultValue: 'homeowner',
      },
    },
    {
      sequelize,
      modelName: 'homeowner',
    }
  );

  Homeowner.associate = (models) => {
    // associations can be defined here

    models.Homeowner.hasMany(models.Listing);
  };

  Homeowner.beforeSave((homeowner, options) => {
    if (homeowner.password) {
      homeowner.passwordHash = bcrypt.hashSync(homeowner.password, 10);
    }
  });

  return Homeowner;
};
