const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      minLength: 4,
      maxLength: 50,
      unique: true,
    },
    password: { type: String, required: true },
    conversation: [
      {
        user_query: { type: String, required: true },
        sender_response: { type: String, required: true, default: "" },
        time: { type: Date, default: Date.now },
      },
    ],
    panCard: { type: String, default: "" },
    aadharCard: { type: String, default: "" },
    bankStatement: { type: String, default: "" },
    gstNumber: { type: String, default: "" },
    panNumber: { type: String, default: "" },
  },
  { timestamps: true }
);

userSchema.methods.getJWT = async function () {
  const user = this;
  const token = await jwt.sign({ _id: user._id }, "ThisIsSecretToken", {
    expiresIn: "7h",
  });

  return token;
};

userSchema.methods.validatePassword = async function (incomingPassword) {
  const user = this;
  const isPasswordCorrect = await bcrypt.compare(
    incomingPassword,
    user.password
  );
  return isPasswordCorrect;
};

const User = mongoose.model("User", userSchema);

module.exports = { User };
