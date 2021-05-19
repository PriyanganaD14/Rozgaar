const mongoose = require('mongoose');

const jobPostSchema = mongoose.Schema({
  jobTypeId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'JobType'
  },
  vacancyCnt: {
    type: Number,
    required: true
  },
  salary: {
    type: Number,
    required: true
  },
  locationId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'Location'
  },
  postedBy: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User'
  },
  skillsReq: [{
    skill: {
      type: mongoose.Schema.Types.ObjectId,
      required: true
    }
  }]
}, {
    timestamps:true
})

const JobPost = mongoose.model("JobPost", jobPostSchema);

module.exports = JobPost;