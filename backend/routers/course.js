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
    cdata} = req.body; 
   const {code,name}=cdata;
    try {
      const ratings = new CourseRatings({code,name,rating:courseratingarr})
      await ratings.save();
      res.status(200).send('Rating submitted');        
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
  try {
    const response = await Courss.find();
    res.status(200).send(response);
  } catch (error) {
    res.status(401).send({message:'Error hai bhai'})
  }
})
router.post('/addcourse',async(req,res)=>{
  const {coursename,coursecode}=req.body;
  try {
    const addcourse = await Courss({coursename,coursecode});
    await addcourse.save();
    res.status(200).send("Course Added")
  } catch (error) {
    console.log(error)
    res.status(500).send(error);
  }
})


export default router;