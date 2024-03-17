import mongoose from "mongoose";
const Facultyrating = mongoose.Schema({
  name:{
    type:String,
    required:true
  },
  empid:{
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

export const FacultyRatings =mongoose.model('Facultyrating',Facultyrating);