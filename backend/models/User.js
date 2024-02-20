import mongoose from "mongoose";
import validator from "validator";
const userschema = new mongoose.Schema({
  usertype:{
    type:String,
    required:true
  },
  firstname:{
    type:String,
    required:true
  },
  lastname:{
    type:String,
    required:true
  },
  semester:{
    type:Number,
    required:true
  },
  email:{
    type:String,
    required:true,
    unique:[true,'Already Present']
  },
  password:{
    type:String,
    required:true
  },
  cpassword:{
    type:String,
    required:true
  }
  
})
export const User = mongoose.model('User',userschema)