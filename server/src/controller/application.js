const JobSeeker = require("../models/jobSeeker/jobSeeker");

const seekerAppn = async (req, res) => { 
    const body = req?.body; 
 
    try{
       
        const {userId} = body; 
        
        const totalAppn = JobSeeker.find({jobSeekerId:userId}); 

        

    }catch(err){

    }

}

module.exports = {
   seekerAppn
}