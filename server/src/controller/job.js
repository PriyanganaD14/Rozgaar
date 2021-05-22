// {"_id":{"$oid":"60a7fb718e8adf320ce42b9a"},"jobTitle":"Driver","__v":{"$numberInt":"0"}}

const JobPost = require('../models/job/jobPost');
const JobType = require('../models/job/jobType');
const Location = require('../models/location');
const SkillSet = require('../models/skillSet'); 

const createJob = async (req, res) => {
  const body = req?.body;
  try {
    const {locality,whoCanApply,vacancyCnt,salary,postedBy,jobDescription,languages,city,district,state,pincode,title,skillsReq,highestQual} = body; 
    
    //storing the locationId returned by returnId function 
    const locationId = await Location.returnId({locality,city,district,state,pincode});
    
    const jobTypeId = await JobType.returnId(title);
    
    const skillSetIds = await SkillSet.returnIds(skillsReq); 
    
    const job = await JobPost.saveJob({jobTypeId,whoCanApply,languages,vacancyCnt,salary,locationId,postedBy,skillSetIds,jobDescription,highestQual});
    
    return res.status(200).json(job);

  } catch (err) {
     console.log(err);
     res.status(500).json("Database error"); 
  } 
}

const applyJob = async (req, res) => {
  const body = req?.body;
  console.log(body);
  
  res.status(200).json(body);
}

module.exports = {
  createJob,
  applyJob
}