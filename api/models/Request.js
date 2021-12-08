'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Request extends Model {}

  Request.init(
    {
      status: {
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
      // ListingID: {
      //   type: DataTypes.INTEGER,
      //   validate: {
      //     notEmpty: true,
      //   },
      // },
      Description: {
        type: DataTypes.TEXT,
        validate: {
          notEmpty: true,
        },
      },
      // OwnerID: {
      //   type: DataTypes.STRING,
      //   validate: {
      //     notEmpty: true,
      //   },
      // },
      DateListed: {
        type: DataTypes.DATEONLY,
      },
    },
    {
      sequelize,
      modelName: 'request',
    }
  );

  Request.associate = (models) => {
    // associations can be defined here

    models.Request.belongsTo(models.Tenant);
  };

  return Request;
};
