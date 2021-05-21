const JobPost = require('../models/job/jobPost');
const JobType = require('../models/job/jobType');
const Location = require('../models/location');
const SkillSet = require('../models/skillSet'); 

const createJob = async (req, res) => {
  const body = req?.body;
  try {
    const {locality,whoCanApply,vacancyCnt,salary,postedBy,jobDescription,languages,city,district,state,pincode,title,skillsReq} = body; 
    
    //storing the locationId returned by returnId function 
    const locationId = await Location.returnId({locality,city,district,state,pincode});
    
    console.log(locationId);
    const jobTypeId = await JobType.returnId(title);
    console.log(jobTypeId);
    const skillSetIds = await SkillSet.returnIds(skillsReq); 
     
    skillSetIds.forEach(element => {
       console.log(element);
    });

    //const job = await JobPost.saveJob({jobTypeId,whoCanApply,languages,vacancyCnt,salary,locationId,postedBy,skillSetIds,jobDescription});
    
    return res.status(200).json("job success");

  } catch (err) {

  } 
}

module.exports = {
  createJob
}