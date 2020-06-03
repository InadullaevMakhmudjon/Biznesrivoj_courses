'use strict';
module.exports = (sequelize, DataTypes) => {
  const Course = sequelize.define('Course', {
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    about: DataTypes.STRING,
    image: DataTypes.STRING,
    duration: DataTypes.STRING,
    cost: DataTypes.FLOAT,
    typeId: DataTypes.INTEGER,
    levelId: DataTypes.INTEGER,
    createdBy: DataTypes.INTEGER,
    createdAt: DataTypes.DATE
  }, {});
  Course.associate = () => {};
  return Course;
};