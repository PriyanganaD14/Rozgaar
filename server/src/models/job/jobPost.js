;const mongoose = require('mongoose');
const JobType = require('./jobType'); 
const Location = require('../location');
const Skill = require('../skillSet');
const User = require('../user');  

const jobPostSchema = mongoose.Schema({
  jobTypeId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'JobType'
  },
  whoCanApply:{
    type: String,
    required: true, 
  }, 
  languages: [{
     type : String,
     required: true
  }],
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
      type: mongoose.Schema.Types.ObjectId,
      required: true
  }], 
  jobDescription:{
    type: String, 
  },
  highestQual:{
    type: String, 
  }
}, {
    timestamps:true
})

jobPostSchema.statics.saveJob = async ({jobTypeId,whoCanApply,languages,vacancyCnt,salary,locationId,postedBy,skillSetIds,jobDescription,highestQual}) => {
      
     const newJob = await JobPost.create({jobTypeId,whoCanApply,languages,vacancyCnt,salary,locationId,postedBy,skillsReq:skillSetIds,jobDescription,highestQual});

     newJob.save(); 
     
     const newLocation = await Location.findOne({_id :locationId});
 
    //  const newLocation = {
    //      locality: check.locality, 
    //      city: check.city, 
    //      district: check.district, 
    //      state:  check.state,
    //      pincode: check.pincode
    //  }; 
     
      
     const newSkill = [];

     for (const element in skillSetIds){
      const skill = await Skill.findOne({_id:skillSetIds[element]}); 
        
      newSkill.push(skill);
     }

     const newJobType = await JobType.findOne({_id: jobTypeId}); 
    //  const newJobType = extractJobType.jobTitle; 
    
     const postedByUser = await User.findOne({_id:postedBy}); 
      // const postedByUser = extractUser.name;
      
     return {newJobType,newLocation,newSkill,whoCanApply,languages,vacancyCnt,salary,postedByUser,jobDescription,highestQual};
};

const JobPost = mongoose.model("JobPost", jobPostSchema);

module.exports = JobPost;