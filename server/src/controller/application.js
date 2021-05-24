const JobSeeker = require("../models/jobSeeker/jobSeeker");
 

const seekerAppn = async (req, res) => { 
    const body = req?.body; 
 
    try{
       
        const {userId} = body; 
         
        const totalAppn = await JobSeeker
        .find({jobSeekerId:userId})
        .populate({
           path: "jobPostId", 
           populate: {
              path: "jobTypeId"
           }
        })

        const result = [];
        
        for(const ele in totalAppn){
            
            const vv = totalAppn[ele];
            const appnId = vv._id;
            const jobType = vv.jobPostId.jobTypeId.jobTitle; 
            const jobAppliedAt = vv.createdAt;
            const jobStatus = vv.status; 
            const jobSalary = vv.jobPostId.salary; 
            const contact = vv.contact; 

            result.push({appnId,jobType,jobAppliedAt,jobStatus,jobSalary,contact});
        }
        
        if(!result.length)
        res.status(401).json({message:"Something is not right",error:"No applications found."}); 
         

        result.sort((a,b) => {
         return b.jobAppliedAt - a.jobAppliedAt;
      });
        
      res.status(200).json({result}); 

    }catch(err){
       console.log(err); 
       res.status(402).json({message:"Something Went Wrong" , error:err})
    }

}

module.exports = {
   seekerAppn
}