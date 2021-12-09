'use strict';
const { Model } = require('sequelize');
const bcrypt = require('bcryptjs');

module.exports = (sequelize, DataTypes) => {
  class Tenant extends Model {}

  Tenant.init(
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
      phoneNumber: {
        type: DataTypes.INTEGER,
        validate: {
          isLongEnough: (val) => {
            if (val.length < 10) {
              throw new Error('Please Enter a Valid Phone Number');
            }
          },
        },
      },
      creditScore: {
        type: DataTypes.INTEGER,
        // allowNull: false,
      },
      income: {
        type: DataTypes.INTEGER,
        // allowNull: false,
      },
      type: {
        type: DataTypes.STRING,
        defaultValue: 'tenant',
      },
    },
    {
      sequelize,
      modelName: 'tenant',
    }
  );

  Tenant.associate = (models) => {
    // associations can be defined here
    models.Tenant.hasMany(models.Request);
  };
  Tenant.beforeSave((tenant, options) => {
    if (tenant.password) {
      tenant.passwordHash = bcrypt.hashSync(tenant.password, 10);
    }
  });

  return Tenant;
};
