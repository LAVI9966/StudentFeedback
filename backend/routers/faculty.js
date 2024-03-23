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
   const { data ,fac} = fdata;
    try {
      
      const finduser = await FacultyRatings.findOne({
        userId:data.datatomanage._id,
        fullname:fac.fullname
      });


      console.log(facultyratingarr)
      console.log("find user " ,data.datatomanage._id);
      if(finduser===null){
        const ratings = new FacultyRatings({name:fac.fullname,rating:facultyratingarr,userId:data.datatomanage._id})
        await ratings.save();
        console.log("submitted")       
        console.log(ratings )
        res.status(200).send('Rating submitted'); 
        return
      }
      console.log("find user " ,finduser)
      console.log("find user " ,finduser.userID);
      if((finduser.userId === data.datatomanage._id)&&(finduser.name===fac.fullname)){
          // const ratings = new FacultyRatings({name:fac.fullname,rating:facultyratingarr,userId:data.datatomanage._id})
          // await ratings.save();
          console.log("Already rated")       
          res.status(200).send({message:'Already rated'}); 
        }else{
          console.log("rated first time")  
          const ratings = new FacultyRatings({name:fac.fullname,rating:facultyratingarr,userId:data.datatomanage._id})
          await ratings.save();
          res.status(200).send('Rating submitted'); 
          console.log("submitted")  
        }
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
  const {fullname,courseid,email,password} = req.body;
  if(!fullname||!courseid||!email||!password){
    return res.status(422).send({error:'Provide all details'})
  }
  try {
    const faculty =new Faculty({fullname,courseid,email,password});
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

router.get('/fetchfaculty/:cid',async(req,res)=>{
  const cid = req.params.cid;

  const fetchFaculty =await Faculty.find({courseid:cid});
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
