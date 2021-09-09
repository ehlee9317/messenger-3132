const Sequelize = require("sequelize");
const db = require("../db")

const UserToConvo = db.define("userToConvo", {
  userId: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  conversationId: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
})

module.exports = UserToConvo;
