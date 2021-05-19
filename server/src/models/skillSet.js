const mongoose = require('mongoose');

const skillSchema = mongoose.Schema({
  skillName: {
    type: String,
    required: true
  }
})

const Skill = mongoose.model("Skill", skillSchema);

module.exports = Skill;