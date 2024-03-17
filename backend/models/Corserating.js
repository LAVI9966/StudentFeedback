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
  rating:[
  {
    userId: { type: mongoose.Schema.Types.ObjectId },
    rating: { type: Number, required: true },
  }
  ]
})

export const CourseRatings =mongoose.model('Courserating',courserating);