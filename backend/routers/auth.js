import express from "express";
import { User } from '../models/User.js'
import bcryptjs from "bcryptjs"
import cors from 'cors'
import jwt from 'jsonwebtoken'
import authenticate from '../middleware/authenticate.js'
import { CourseRatings } from "../models/Corserating.js";
const router = express.Router();
router.use(express.json());
router.use(cors());
 
router.post('/signup', async (req,res)=>{
  const {usertype , firstname , lastname , semester , email,password,cpassword} = req.body;

    if(!usertype || !firstname || !lastname || !semester || !email || !password || !cpassword){
      return res.status(404).json({error:'Provide all the details'});
    }

    try {
      const userexist = await User.findOne({email:email});
      if(userexist){
        return res.status(422).json({error:"Email Already present "});
      }else if(password != cpassword){
        return Response.status(422).json({error:'password dont match'});
      }else{
        const hashpasword = await bcryptjs.hash(password,await bcryptjs.genSalt(10));
        const user = new User({usertype,firstname,lastname,semester,email,password:hashpasword,cpassword:hashpasword});


        const registeruser = await user.save();
        if(registeruser){
          res.status(200).json({message:"User registered successfully"});
        }else{
          res.status(500).json({message:'Failed to register'})
        }
      }
    } catch (error) {
      console.log(error);
    }
})
router.post('/login',async (req,res)=>{
    const {email , password} = req.body;
    if(!email || !password){
      return res.status(422).send('Invalid Credentials')
    }
    try {
      let token;
      const finduser = await User.findOne({email:email});

      if(!finduser){
        res.status(401).json({message:"Invalid Credentials email not availble"})
      }else{
        token =await finduser.generateAuthToken();

        res.cookie('jwtoken',token,{
          expires:new Date(Date.now()+25892000000),
          httpOnly:true
        })
        console.log(finduser.password)
        const ismatch = await bcryptjs.compare(password,finduser.password);
        if(ismatch){
         return res.status(200).send(finduser);
        }else{
          res.status(401).json({message:"Invalid credentials"})
        }
      }
    } catch (error) {
      console.log(error)
    }
})

router.put('/updatesem',async(req,res)=>{
  const updatedata = req.body;
  console.log(updatedata)
  const _id = updatedata.datatomanag._id;
  const semester = updatedata.data.sem;
  const update = {semester:semester}
  const user = await User.findByIdAndUpdate(_id,update,{ new: true });
  console.log(user)
  res.send(user)
  // try {
  //   const datatomanage = req.params.datatomanage;

  //   const updatedocument = await User.findByIdAndUpdate({id:datatomanage._id,updatedata});
  //   res.send(updatedocument)

  // } catch (error) {
  //   console.log(error);
  //   res.status(500).send("INternal server Error")
    
  // }
})
export default router;
