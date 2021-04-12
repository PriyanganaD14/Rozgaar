const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const User = require("../models/user");

const key = process.env.JWT_SECRET_KEY;

const signin = async (req, res) => {
  const body = req?.body;
  try {
    const user = await User.findByCredentials(body?.email, body?.password);
    const token = await user.genToken();
    user.save();
    res.status(200).json({ result: user, token });
  } catch (err) {
    console.log(err);
    res.status(500).json({ messsge: 'Something went wrong.' });
  }
};

const signup = async (req, res) => {
  const body = req.body;
  try {
    const user = await User.saveUser(body);
    const token = await user.genToken();
    user.save();
    res.status(200).json({ result: user, token });
  } catch (err) {
    console.log(err);
    res.status(500).json({ messsge: 'Something went wrong.' });
  }
};

module.exports = {
  signin,
  signup,
};
