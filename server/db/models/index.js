const Conversation = require("./conversation");
const User = require("./user");
const Message = require("./message");
const UserToConvo = require("./userToConvo");

// associations

User.hasMany(UserToConvo);
UserToConvo.belongsTo(User);

Conversation.hasMany(UserToConvo);
UserToConvo.belongsTo(Conversation);

Conversation.belongsToMany(User, { through: "UserToConvo" });
User.belongsToMany(Conversation, { through: "UserToConvo" });

Conversation.hasMany(Message);
Message.belongsTo(Conversation);

User.hasMany(Message);
Message.belongsTo(User);

module.exports = {
  User,
  Conversation,
  Message,
  UserToConvo,
};
