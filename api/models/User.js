'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    getFullname() {
      return [this.firstName, this.lastName].join(' ');
    }
  }

  User.init(
    {
      //if tenant or homeowner
      kindOfUser: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: true,
        },
      },
      //some kind of array of listings for both homeowner and tenant

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
      modelName: 'user',
    }
  );

  User.associate = (models) => {
    // associations can be defined here
  };

  //   User.beforeSave((user, options) => {
  //     if (user.password) {
  //       user.passwordHash = bcrypt.hashSync(user.password, 10);
  //     }
  //   });

  return User;
};
