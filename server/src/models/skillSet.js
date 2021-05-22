const mongoose = require('mongoose');

const skillSchema = mongoose.Schema({
  skillName: {
    type: String,
    required: true
  }
})


skillSchema.statics.saveSkill = async(skill) =>{ 
  // console.log(skill);
  const isSkillExist = await Skill.findOne({skillName: skill});
      
  
  if(isSkillExist)
  return isSkillExist; 
     
  const newSkill = await Skill.create({skillName: skill}); 
  console.log(newSkill);
  newSkill.save(); 
  
  return newSkill;
  
};

skillSchema.statics.returnIds = async(skillsReq) =>{
    
  //Needs to be checked : await isn't used in line 13 and 20
    // console.log(skillsReq); 
  
    
  const Ids = [];  
 
   for(const ele in skillsReq){

    const  skill = await Skill.saveSkill(skillsReq[ele]);
     
     Ids.push(skill._id); 
   }

  //  console.log(Ids); 

    return Ids;
};

const Skill = mongoose.model("Skill", skillSchema);

module.exports = Skill;