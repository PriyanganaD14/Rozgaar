const mongoose = require('mongoose');

const locationSchema = mongoose.Schema({
  locality: {
    type: String,
    required: true
  },
  city: {
    type: String,
    required: true
  },
  district: {
    type: String,
    required: true
  },
  state: {
    type: String,
    required: true
  },
  pincode: {
    type: String,
    required: true
  }
})

locationSchema.statics.returnId = async ({locality,city,district,state,pincode}) => {
   
    const isLocationExist = await Location.findOne({locality,city,district,state,pincode});

    if(isLocationExist)
    return isLocationExist._id; 
    
    const newLoc = await Location.create({locality,city,district,state,pincode}); 
    console.log(newLoc);
    newLoc.save(); 
    
    return newLoc._id;
};



const Location = mongoose.model("Location", locationSchema);


module.exports = Location;