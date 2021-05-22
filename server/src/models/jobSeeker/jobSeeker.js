const mongoose = require('mongoose'); 
const Location = require('../location'); 
const SkillSet = require('../skillSet'); 

const jobSeekerSchema = mongoose.Schema({
  // applicant personal details
  name: {
    type: String,
    required: true
  },
  JobSeekerId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true
  },
  contact: {
    type: String, 
    required: true  
  }, 
  dob : {
    type: Date,
    required: "DD-MM-YYYY"
  },
  address:{
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'Location'
  }, 
  // educational details
  qualification: [{
    type: {
      type: String,
    },
    percent: {
      type: mongoose.Schema.Types.Decimal128,
    },
    board: {
      type: String,
    }
  }],
  experience: {
    job: {
      type: String,
    },
    year: {
      type: String,
    }
  },
  skills: [{
    type: mongoose.Schema.Types.ObjectId,
  }],
  photo: {
    type: String,
  },
  currentStatus: {
    type: String
  }
},  {
  timestamps:true
})

const JobSeeker = mongoose.model('JobSeeker', jobSeekerSchema)
  
module.exports = JobSeeker;
  
