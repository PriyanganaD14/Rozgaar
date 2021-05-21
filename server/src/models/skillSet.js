const mongoose = require('mongoose');

const skillSchema = mongoose.Schema({
  skillName: {
    type: String,
    required: true
  }
})


skillSchema.statics.returnIds = async(skillsReq) =>{
    
  //Needs to be checked : await isn't used in line 13 and 20
    // console.log(skillsReq); 

  const Ids = [];  

  await skillsReq.forEach(async(skill) => {
    
      const isSkillExist = await Skill.findOne({skillName: skill});
      
      console.log(isSkillExist); 
  
      if(isSkillExist)
      Ids.push(isSkillExist._id); 
      else{
         
      const newSkill = await Skill.create({skillName: skill}); 
      console.log(newSkill);
      newSkill.save(); 
      Ids.push(newSkill._id);
      }
      
    }) 
 

    console.log(Ids); 

    return Ids;
};

const Skill = mongoose.model("Skill", skillSchema);

module.exports = Skill;