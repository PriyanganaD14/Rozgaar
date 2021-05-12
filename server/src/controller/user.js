const bcrypt = require("bcryptjs");
const crypto = require("crypto");
const sgMail = require("@sendgrid/mail");

require("dotenv").config();

const User = require("../models/user");

sgMail.setApiKey(process.env.SENDGRID_EMAIL_API_KEY);

const defaultRoute = async (req, res) => {
  const users = await User.find();
  res.status(200).json({ message: "This is default User Router.", users });
};

const signin = async (req, res) => {
  const body = req?.body;
  try {
    let user = await User.findByCredentials(body?.email, body?.password);
    const token = await user.genToken();
    user = await User.findOne({ email: body?.email }).select("-password");
    res.status(200).json({ result: user, token });
  } catch (e) {
    res
      .status(500)
      .json({ message: "Something went wrong.", error: e?.message });
  }
};

const signup = async (req, res) => {
  const body = req?.body;
  try {
    var user = await User.saveUser(body);
    const token = await user.genToken();
    user.save();
    user = await User.findOne({ _id: user._id }).select("-password");
    res.status(200).json({ result: user, token });
  } catch (e) {
    console.log(e);
    res.status(500).json({ messsge: "Something went wrong.", error: e });
  }
};

const deleteUser = async (req, res) => {
  try {
    const user = await User.findById(req.user.id);
    const isPasswordMatch = await bcrypt.compare(
      req?.body?.password,
      user?.password
    );
    if (!isPasswordMatch) {
      throw new Error("Invalid credentials.");
    }
    await User.findOneAndDelete({ _id: req.user?.id });

    res.json({ message: "Account deleted Successfully." });
  } catch (e) {
    console.log(e);
    res.status(500).json({ messsge: "Something went wrong.", error: e });
  }
};

const resetPassword = async (req, res) => {
  try {
    const email = req.body.email;
    const buffer = await crypto.randomBytes(32);
    const token = buffer.toString("hex");

    const user = await User.findOne({ email }).exec();
    if (!user) {
      return res.status(400).json({ message: "User not found!!!" });
    }
    user.resetToken = token;
    user.expireToken = Date.now() + 3600000; // expiration time of token is 1hr
    const result = await user.save();
    console.log(token);
    const link = process.env.LINK_FOR_CHANGE_PASSWORD_PAGE;
    const message = {
      to: email,
      from: process.env.MY_EMAIL,
      subject: "Reset Password Link",
      html: `
          <h5>Here is the reset link for you account.</h5>
          <h3>Click the <a href="${link}/${token}">Link</a> to reset the password!!!</h3>
        `,
    };
    await sgMail.send(message);
    res.json({ data: "Check Your Email to reset your Password" });
  } catch (error) {
    console.log("Error on sending reset Link====>", error);
    res.json({ error });
  }
};

const updatePassword = async (req, res) => {
  try {
    const { newPassword, sentToken } = req?.body;
    const user = await User.findOne({
      resetToken: sentToken,
      expireToken: { $gt:Date.now() }
    });
    if (!user) {
      return res
        .status(422)
        .json({
          message:
            "Session Expire or Invalid Token. Please Try to reset the Password Again.",
        });
    } else {
      user.password = newPassword;
      user.resetToken = user.expireToken = undefined;
      await user.save();
      res.status(200).json({ message: "Password Updated Successfully 👍" });
    }
  } catch (error) {
    console.log(error);
    res.send({ error });
  }
};

module.exports = {
  defaultRoute,
  signin,
  signup,
  deleteUser,
  resetPassword,
  updatePassword,
};
