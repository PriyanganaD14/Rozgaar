const mongoose = require('mongoose'); 

const jobSeekerSchema = mongoose.Schema({
  // applicant personal details
  name: {
    type: String,
    required: true
  },
  jobSeekerId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User'
  },
  jobPostId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'JobPost',
  },
  contact: {
    type: String, 
    required: true  
  }, 
  dob : {
    type: String,
    required: "DD-MM-YYYY"
  },
  location: {
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
      type: Number,
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
    ref: 'Skill',
  }],
  photo: {
    type: String,
  },
  currentStatus: {
    type: String
  },
  languages: [{
    type: String,
  }],
  status: {
    type: String, 
    default: 'pending'
  }
},  {
  timestamps:true
})

jobSeekerSchema.statics.saveJobSeeker = async ({name, jobSeekerId, jobPostId, contact, dob, location, qualification, experience, skills, currentStatus, photo, languages}) => {

  let jobSeekerInfo = await JobSeeker.findOne({ jobSeekerId, jobPostId });
  if(jobSeekerInfo)
    throw new Error("You already applied for this job.");

  jobSeekerInfo = await JobSeeker.create({name, jobSeekerId, jobPostId, contact, dob, location, qualification, experience, skills, currentStatus, photo, languages});
  jobSeekerInfo.save();
  try {
    const result = await JobSeeker
      .findOne({_id: jobSeekerInfo._id})
      .populate('location')
      .populate('skills')
      .populate('jobSeekerId')
      .populate('jobPostId')
    return result;
  } catch (error) {
    return error;
  }
};

const JobSeeker = mongoose.model('JobSeeker', jobSeekerSchema)
  
module.exports = JobSeeker;
  
