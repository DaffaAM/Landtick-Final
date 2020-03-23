"use strict";
module.exports = (sequelize, DataTypes) => {
  const tickets = sequelize.define(
    "tickets",
    {
      nameTrain: DataTypes.STRING,
      dateStart: DataTypes.DATEONLY,
      startStation: DataTypes.STRING,
      startTime: DataTypes.TIME,
      destinationStation: DataTypes.STRING,
      arrivalTime: DataTypes.TIME,
      price: DataTypes.INTEGER,
      qty: DataTypes.INTEGER,
      typetrain_id: DataTypes.INTEGER
    },
    {}
  );
  tickets.associate = function(models) {
    // associations can be defined here
    tickets.belongsTo(models.typetrain, {
      foreignKey: "typetrain_id"
    });
  };
  return tickets;
};
