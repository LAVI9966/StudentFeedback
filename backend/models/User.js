import mongoose from "mongoose";
import validator from "validator";
import jwt from 'jsonwebtoken'
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
  ,
  tokens:[
    {
      token:{
        type:String,
        required:true
      }
    }
  ]
})

userschema.methods.generateAuthToken = async function(){
  try {
    let token = jwt.sign({_id:this._id},process.env.SECRET_KEY);
    this.tokens = this.tokens.concat({token:token})    
    await this.save()
    return token;
  } catch (error) {
    console.log("Error : ",error)
  }
}

export const User = mongoose.model('User',userschema)