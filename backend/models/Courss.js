import mongoose, { mongo } from 'mongoose'
const courses = new mongoose.Schema({
  coursename:{
    type:String,
    required:true
  },
  coursecode:{
    type:String,
    required:true
  }
})
export const Courss = new mongoose.model('Course',courses);