import mongoose, { mongo } from 'mongoose'
const courses = new mongoose.Schema({
  name:{
    type:String,
    required:true
  },
  code:{
    type:String,
    required:true
  }
})
export const Course = new mongoose.model('Course',courses);