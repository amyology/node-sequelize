'use strict';
module.exports = (sequelize, DataTypes) => {
  var Note = sequelize.define('Note', {
    title: DataTypes.STRING,
    text: DataTypes.STRING,
    published: DataTypes.BOOLEAN,
    UserId: DataTypes.INTEGER
  }, {});
  Note.associate = function(models) {
    Note.belongsTo(models.User);
  };
  return Note;
};