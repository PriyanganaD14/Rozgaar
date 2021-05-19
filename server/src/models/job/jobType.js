const mongoose = require('mongoose');

const jobTypeSchema = mongoose.Schema({
  jobTitle: {
    type: String,
    required: true
  }
})

const JobType = mongoose.model("JobType", jobTypeSchema);

module.exports = JobType;