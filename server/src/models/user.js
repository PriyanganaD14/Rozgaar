const mongoose = require("mongoose");
const validator = require("validator");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: 'name is required.',
  },
  email: {
    type: String,
    required: "email is required",
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
    minLength: [8, "password length should be at least 8 chars"],
  },
  resetToken: {
    type:String,
  },
  expireToken: {
    type: Date,
  }
}, {
  timestamps:true
})

// methods accessible using model object are declared as {Schema}.methods.{function-name},
// & called as {object-name}.{function-name}

// use to generate the token
userSchema.methods.genToken = async function () {
  const user = this;
  const token = jwt.sign(
    { id: user?._id.toString() },
    process.env.JWT_SECRET_KEY,
    { expiresIn: "24hr" }
  );

  return token;
};

// methods accessible using schema are declared as {Schema}.statics.{function-name}, 
// & called as {model-name}.{function-name}

// use to find the user using email & password
userSchema.statics.findByCredentials = async (email, password) => {
  var user = await User.findOne({ email });

  if (!user) {
    throw new Error("Account not exist with this email.");
  }

  const isPasswordMatch = await bcrypt.compare(password, user.password);
  if (!isPasswordMatch) {
    throw new Error("Invalid credentials.");
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
