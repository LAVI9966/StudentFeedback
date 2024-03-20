import express from 'express'
import { Faculty} from '../models/faculty.js';
import { FacultyRatings } from '../models/Facultyrating.js';
const router = express.Router();

router.post('/loginfaculty',async(req,res)=>{
  const {email,password} = req.body;
  console.log(email,password)
  if(!email || !password){
    return res.status(401).send('Invalid Credentials')
  }
  try {
    const user = await Faculty.findOne({email:email});
    if(!user){
      res.status(200).send({message:"Faculty not found"})
    }else{
      if(password!==user.password){
        res.status(200).send({message:'Wrong password'})
      }else{
        res.status(200).send({message:'Done'})
      }
    }
  } catch (error) {
    console.log(error)
  } 
})
router.get('/fetchfaculty',async(req,res)=>{
  try {
    const response = await Faculty.find();
    res.status(200).send(response);
  } catch (error) {
    console.log(error)
    res.status(401).send({message:'Error hai bhai '})
  }
})
router.post('/facultyrate',async(req,res)=>{
  const { facultyratingarr,
    fdata} = req.body; 
   const { empid ,name} = fdata;
    try {
      console.log(facultyratingarr)
      const ratings = new FacultyRatings({empid,name,rating:facultyratingarr})
      await ratings.save();
      res.status(200).send('Rating submitted'); 
      console.log("submitted")       
      } catch (error) {
      res.status(500).send('Error occured');
      console.log(error)
    }
})
 
router.get('/fetchfacultyratings',async(req,res)=>{
  try {
    const fetchedratings =await FacultyRatings.find();
    res.status(200).send(fetchedratings);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
})

router.post('/addfaculty',async(req,res)=>{
  const {username,fullname,fid,department,email,password} = req.body;
  if(!username||!fullname||!fid||!department||!email||!password){
    return res.status(422).send({error:'Provide all details'})
  }
  try {
    const faculty =new Faculty({username,fullname,fid,department,email,password});
    const registerfaculty = await faculty.save();
    console.log("registered")
    if(registerfaculty){
      return res.status(200).json({message:'Faculty Registered'});
    }else{

      return res.status(500).json({message:"Faild to register"})
    }
  } catch (error) {
    console.log(error);
  }
})

router.get('/fetchfaculty',async(req,res)=>{
  const fetchFaculty =await Faculty.find();
  if(fetchFaculty){
    return res.status(200).send(fetchFaculty);
  }else{
    return res.status(500).send('Sorry')
  }
})

router.delete('/deletefaculty/:id',async(req,res)=>{
  try {
    const deletedata = await Faculty.findByIdAndDelete(req.params.id);
    res.status(200).send("DELETED");
  } catch (error) {
    console.log(error)
    res.status(500).send(e);
  }
})

export default router;
