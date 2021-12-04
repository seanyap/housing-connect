"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Tenant extends User {}

  Tenant.init(
    {
      appointments: {
        type: DataTypes.DATEONLY,
      },
    },
    {
      sequelize,
      modelName: "tenant",
    }
  );

  Tenant.associate = (models) => {
    // associations can be defined here

    models.Tenant.hasOne(models.User);
  };

  return Tenant;
};
