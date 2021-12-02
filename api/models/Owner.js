'use strict';
const { Model } = require('sequelize');


module.exports = (sequelize, DataTypes) => {
  class Owner extends Model {}
  Owner.init({
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
      Owner.associate = (models) => {
        // associations can be defined here
    
       // models.Owner.belongsToMany(models.Movie, {through: 'MovieActor'});
      };
    
      return Owner;
    };