const mongoose = require('mongoose');

const jobTypeSchema = mongoose.Schema({
  jobTitle: {
    type: String,
    required: true
  }
})


jobTypeSchema.statics.returnId = async (title) => {
  
  const isJobType = await JobType.findOne({jobTitle: title});
  
   
  if(isJobType)
  return isJobType._id; 
  
  const newJobType = await JobType.create({jobTitle: title}); 
  //console.log(newJobType);
  newJobType.save(); 
  
  return newJobType._id;
};

const JobType = mongoose.model("JobType", jobTypeSchema);

module.exports = JobType;