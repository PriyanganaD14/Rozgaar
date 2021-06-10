const mongoose = require('mongoose'); 

const applicationSchema = mongoose.Schema({
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
    required: true,
    validate(value) {
      if(value.length !== 10)
        return new Error("Invalid Contact Number");
    }
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
    school: {
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
    default: 'pending'   // pending, approved, rejected
  }
},  {
  timestamps:true
})

applicationSchema.statics.saveApplication = async ({name, jobSeekerId, jobPostId, contact, dob, location, qualification, experience, skills, currentStatus, photo, languages}) => {

  let applicationInfo = await Application.findOne({ jobSeekerId, jobPostId });
  if(applicationInfo)
    throw new Error("You already applied for this job.");

  applicationInfo = await Application.create({name, jobSeekerId, jobPostId, contact, dob, location, qualification, experience, skills, currentStatus, photo, languages});
  applicationInfo.save();
  try {
    const result = await Application
      .findOne({_id: applicationInfo._id})
      .populate('location')
      .populate('skills')
      .populate('jobSeekerId')
      .populate('jobPostId')
    return result;
  } catch (error) {
    return error;
  }
};


applicationSchema.statics.returnSeekerdetails = async (jobPostId) => {
  const details = await Application
    .find({jobPostId})
    .populate('location')
    .populate('skills')
  const result = [];
  for(const ele in details) {
    const { jobSeekerId, name,  contact,  dob, experience, currentStatus,  photo,  languages, status } = details[ele];
    const location = {
      locality: details[ele].location.locality,
      city: details[ele].location.city,
      district: details[ele].location.district,
      state: details[ele].location.state,
      pincode: details[ele].location.pincode
    }
    const skills = details[ele].skills.map(skill => skill.skillName);
    result.push({ jobSeekerId, jobPostId, name, contact, dob,location, experience, currentStatus, skills, photo, languages, status });
  }
  return result;
}

const Application = mongoose.model('Application', applicationSchema)
  
module.exports = Application;
  
