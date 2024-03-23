import mongoose from 'mongoose'

const Facultyschema =new mongoose.Schema({
  
  fullname:{
    type:String,
    required:true
  },
  courseid:{
    type:String,
    required:true
  },
  email:{
    type:String,
    required:true,
    // unique:[true,"Already present"]
  },
  password:{
    type:String,
    require:true
  },
})
export const Faculty = mongoose.model('Faculty',Facultyschema);

