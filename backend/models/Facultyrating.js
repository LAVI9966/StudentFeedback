import mongoose from "mongoose";
const Facultyrating = mongoose.Schema({
  name:{
    type:String,
    required:true
  },
  rating:{ 
    type: Array, 
    required: true 
  },
  userId: { 
    type: String,
    required:true 
  },

})

export const FacultyRatings =mongoose.model('Facultyrating',Facultyrating); 