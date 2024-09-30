const { User } = require("../models");
const { responseArray } = require("../utils/constants");

const getAllConversation = async (req, res) => {
  try {
    const user = req.user;
    res.send(user.conversation);
  } catch (err) {
    res.status(400).send("Error: " + err.message);
  }
};

const getRandomResponse = () => {
  const index = Math.floor((Math.random() * 10) % 5);
  return responseArray[index];
};

const appendNewMessage = async (req, res) => {
  const user = req.user;
  const { user_query } = req.body;
  try {
    if (!user_query.trim()) {
      throw new Error("Please type something");
    }

    const response = getRandomResponse();
    user.conversation.push({
      sender_response: response,
      user_query: user_query,
    });

    const updatedUser = await User.findByIdAndUpdate(user._id, user, {
      returnDocument: "after",
    });

    setTimeout(() => {
      res.send(getRandomResponse());
    }, 5000);
  } catch (err) {
    res.status(400).send("Error: " + err.message);
  }
};

module.exports = {
  getAllConversation,
  appendNewMessage,
};
