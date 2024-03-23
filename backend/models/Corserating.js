import mongoose from "mongoose";
const courserating = mongoose.Schema({
  name:{
    type:String,
     required:true
  },
  code:{
    type:String,
    required:true
  },
  rating:{
    type: Array, 
    required: true
  },
  userId:{
    type:String,
    required:true
  },
})

export const CourseRatings =mongoose.model('Courserating',courserating);