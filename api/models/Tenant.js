'use strict';
const { Model } = require('sequelize');


module.exports = (sequelize, DataTypes) => {
  class Tenant extends Model {}

  Tenant.init({
    firstName: {
        type: DataTypes.STRING,
        allowNull: false
      },
      lastName: {
        type: DataTypes.STRING
        // allow Null defaults to true
      }
  }, {
    sequelize,
    modelName: 'tenant'
  });

  Tenant.associate = (models) => {
    // associations can be defined here

    
   // models.Tenant.hasMany(models.Movie)
  };

  return Genre;
};