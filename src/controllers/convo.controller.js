const { User } = require("../models");
const { responseArray } = require("../utils/constants");

const getAllConversation = async (req, res) => {
  try {
    const user = req.user;
    res.send(user.conversation);
  } catch (err) {
    res.status(400).send("Can't able to fetch all conversations");
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

    const senderResponse = getRandomResponse();
    user.conversation.push({
      sender_response: senderResponse,
      user_query: user_query,
    });

    const updatedUser = await User.findByIdAndUpdate(user._id, user, {
      returnDocument: "after",
    });

    setTimeout(() => {
      res.send({sender_response: senderResponse});
    }, 6000);
  } catch (err) {
    res.status(400).send("Error while updating the conversation");
    console.log(err.message);
  }
};

module.exports = {
  getAllConversation,
  appendNewMessage,
};
