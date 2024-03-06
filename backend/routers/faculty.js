import express from 'express'
import { Faculty} from '../models/faculty.js';

const router = express.Router();

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
