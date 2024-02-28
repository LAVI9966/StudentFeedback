import mongoose from 'mongoose'

const Facultyschema =new mongoose.Schema({
  username:{
    type:String,
    required:true
  },
  fullname:{
    type:String,
    required:true
  },
  fid:{
    type:String,
    required:true
  },
  department:{
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
  }
})
export const Faculty = mongoose.model('Faculty',Facultyschema);

