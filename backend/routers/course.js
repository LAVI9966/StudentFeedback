import express from 'express'
const router = express.Router();
import cors from 'cors'
import { CourseRatings } from "../models/Corserating.js";
router.use(express.json());
router.use(cors());

router.post('/courserate',async(req,res)=>{
  const { courseratingarr,
    code} = req.body; 
   
    try {
      const ratings = new CourseRatings({code,rating:courseratingarr})
      await ratings.save();
      res.status(200).send('Rating submitted');        
      } catch (error) {
      res.status(500).send('Error occured');
      console.log(error)
    }
})

export default router;