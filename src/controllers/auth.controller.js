const { User } = require("../models");
const bcrypt = require("bcrypt");

const register = async (req, res) => {
  try {
    const { name, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    console.log(hashedPassword);

    const user = new User({
      name,
      password: hashedPassword,
    });

    await user.save();

    res.status(201).send("User created sucessfully");
  } catch (err) {
    res.status(400).send("Error while saving the user " + err.message);
  }
};

const login = async (req, res) => {
  const { name, password } = req.body;
  try {
    const user = await User.findOne({ name: name });
    if (!user) {
      throw new Error("User not Found");
    }

    const isPasswordCorrect = await user.validatePassword(password);
    if (!isPasswordCorrect) {
      console.log(isPasswordCorrect);
      throw new Error("Invalid credentials");
    }

    const token = await user.getJWT();

    res.cookie("token", token, {
      expires: new Date(Date.now() + 15 * 3600000),
    });
    res.status(201).send("Login Successfull");
  } catch (err) {
    res.status(400).send("Invalid credentials");
  }
};

module.exports = {
  register,
  login,
};
