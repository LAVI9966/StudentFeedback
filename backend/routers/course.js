import express from 'express'
const router = express.Router();
import cors from 'cors'
import { CourseRatings } from "../models/Corserating.js";
import { Courss } from '../models/Courss.js';
import axios from 'axios';


router.use(express.json());
router.use(cors());

router.post('/courserate',async(req,res)=>{ 
  const { courseratingarr,
    cdata,} = req.body; 
   const { name,
    code,
    C_id,
    datatomanage}=cdata;
    try {
      const finduser =await CourseRatings.findOne({userId:datatomanage._id,name:name})
      if(finduser===null){
        const ratings = new CourseRatings({code,name,rating:courseratingarr,userId:datatomanage._id})
        await ratings.save();
        console.log('Rating submitted'); 
        res.status(200).send('Rating submitted'); 
        return 
      }
      console.log('find user ',finduser);
      console.log('find user ',finduser.userId);
      console.log('datamanage id ',datatomanage._id);
      if((finduser.userId === datatomanage._id)&&(finduser.name===name)){
        console.log('Alredy rated')
        res.status(200).send({message:"AAlready Responded"});
      }else{
        console.log('rated first time')
        const ratings = new CourseRatings({code,name,rating:courseratingarr,userId:datatomanage._id})
        await ratings.save();
        res.status(200).send('Rating submitted');        
        console.log("submitted")
      }
      } catch (error) {
      res.status(500).send('Error occured');
       console.log(error)
    }
})
router.get('/fetchcourseratings',async(req,res)=>{
  try {
    const fetchedratings =await CourseRatings.find();
    res.status(200).send(fetchedratings);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
})
router.get('/fetchcourse',async(req,res)=>{
  const semester = req.query.semester;
  console.log(semester);
  try {
    const response = await Courss.find({semester:semester});
    res.status(200).send(response);
  } catch (error) {
    res.status(401).send({message:'Error hai bhai'})
  }
})
router.post('/addcourse',async(req,res)=>{
  const {coursename,coursecode,semester}=req.body;
  try {
    const addcourse = await Courss({coursename,coursecode,semester});
    await addcourse.save();
    res.status(200).send("Course Added")
  } catch (error) {
    console.log(error)
    res.status(500).send(error);
  }
})


export default router;