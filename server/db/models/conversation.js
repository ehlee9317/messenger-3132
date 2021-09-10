const { Op, Sequelize } = require("sequelize");
const db = require("../db");
const Message = require("./message");

const Conversation = db.define("conversation", {
  name: {
    type: Sequelize.STRING,
    allowNull: true,
  },
});

// find conversation with conversation name
Conversation.findConversationWithName = async function (conversationName) {
  const conversation = await Conversation.findOne({
    where: {
      name: {
        [Op.like]: `${conversationName}`,
      },
    },
  });

  // return conversation or null if it doesn't exist
  return conversation;
};

module.exports = Conversation;
