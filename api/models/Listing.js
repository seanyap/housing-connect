'use strict';
const { Model } = require('sequelize');


module.exports = (sequelize, DataTypes) => {
  class Listing extends Model {}

  Listing.init({
    Address: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: true,
      },
      unique: true
    },
    Price: {
        type: DataTypes.INTEGER,
        validate: {
            notEmpty:true,
        }

    }
  }, {
    sequelize,
    modelName: 'listing'
  });

  Listing.associate = (models) => {
    // associations can be defined here

   // models.Listing.hasMany(models.Movie)
  };

  return Listing;
};