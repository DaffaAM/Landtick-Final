"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("tickets", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nameTrain: {
        type: Sequelize.STRING
      },
      dateStart: {
        type: Sequelize.DATEONLY
      },
      startStation: {
        type: Sequelize.STRING
      },
      startTime: {
        type: Sequelize.TIME
      },
      destinationStation: {
        type: Sequelize.STRING
      },
      arrivalTime: {
        type: Sequelize.TIME
      },
      price: {
        type: Sequelize.INTEGER
      },
      qty: {
        type: Sequelize.INTEGER
      },
      typetrain_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "typetrain",
          key: "id"
        },
        onUpdate: "cascade",
        onDelete: "cascade"
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("tickets");
  }
};
