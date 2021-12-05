"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Tenant extends Model {}

  Tenant.init(
    
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
      // appointments: {
      //  // type: DataTypes.ARRAY,
      //   //id of listing

      // },

    },
    {
      sequelize,
      modelName: "tenant",
    }
  );

  Tenant.associate = (models) => {
    // associations can be defined here

    // models.Tenant.hasOne(models.User);
  };
  Tenant.beforeSave((tenant, options) => {
    if (tenant.password) {
      tenant.passwordHash = bcrypt.hashSync(tenant.password, 10);
    }
  });

  return Tenant;
};
