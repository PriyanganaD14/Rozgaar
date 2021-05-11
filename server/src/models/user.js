const mongoose = require("mongoose");
const validator = require("validator");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const key = process.env.JWT_SECRET_KEY;

const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    // validator to validate whether email is valid or not
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error("Email is invalid.");
      }
    },
  },
  password: {
    type: String,
    required: true,
    // this will make sure that minimum length of password should be 8
    minLength: 8,
  },
  // this will store the array of token, ensure the feature of login at more then one place
   tokens: [
    {
      token: {
        type: String,
        required: true,
      },
    },
  ],
})

// methods accessible using model object are declared as {Schema}.methods.{function-name},
// & called as {object-name}.{function-name}

// use to generate the token
userSchema.methods.gentoken = async function () {
  const user = this;
  const token = jwt.sign(
    { email: user?.email, id: user?._id.toString() },
    key,
    { expiresIn: "1hr" }
  );

  user.tokens = user.tokens.concat({ token });

  await user.save();
  return token;
};

// methods accessible using schema are declared as {Schema}.statics.{function-name}, 
// & called as {model-name}.{function-name}

// use to find the user using email & password
userSchema.statics.findByCredentials = async (email, password) => {
  const user = await User.findOne({ email });

  if (!user) {
    throw new Error("Account not exist with this email.");
  }

  const isPasswordMatch = await bcrypt.compare(password, user.password);
  if (!isPasswordMatch) {
    throw new Error("Invali credentials.");
  }

  return user;
};

// use to save the user
userSchema.statics.saveUser = async (body) => {
  let user = await User.findOne({ email: body?.email });

  if (user) {
    throw new Error("Account already exist with this email.");
  }
    
  if(body?.password !== body?.confirmPassword) {
    throw new Error("Passwords don't match.");
  }
  user = await User.create({name: body?.name, email: body?.email, password: body?.password});

  return user;
}

// model middleware (run just before and after an event occur)

// run before saving document
userSchema.pre("save", async function (next) {
  const user = this;

  if(user.isModified("password")) {
    user.password = await bcrypt.hash(user.password, 12);
  }

  // this indicates the end of middleware, if something went wrong function runs forever
  next();
})

const User = mongoose.model("User", userSchema);

module.exports = User;
