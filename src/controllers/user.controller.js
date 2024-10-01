const { User } = require("../models");

const submitUserDetails = async (req, res) => {
  const user = req.user;
  const { panCard, aadharCard, bankStatement, gstNumber } = req.body;

  try {
    if (!panCard || !aadharCard || !bankStatement || !gstNumber) {
      throw new Error("Please fill all the details");
    }
    user.panCard = panCard;
    user.aadharCard = aadharCard;
    user.bankStatement = bankStatement;
    user.gstNumber = gstNumber;

    const updatedUser = await User.findByIdAndUpdate(user._id, user, {
      returnDocument: "after",
    });

    res.send(updatedUser);
  } catch (err) {
    res.status(400).send("Failed to update the error");
    console.log(err.message);
  }
};

const getUserDetails = (req, res) => {
  try {
    res.send(req.user);
  } catch (error) {
    res.status(404).send("User not found");
  }
};

module.exports = { submitUserDetails, getUserDetails };
