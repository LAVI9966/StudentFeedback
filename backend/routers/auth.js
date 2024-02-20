import express from "express";
import { User } from '../models/User.js'
import bcryptjs from "bcryptjs"
import cors from 'cors'

const router = express.Router();
router.use(express.json());
router.use(cors());
// "usertype": "student",
// "firstname": "John",
// "lastname": "Doe",
// "semester": 2,
// "email": "josssasdasdasshn.doe@example.com",
// "password": "password123",


router.post('/signin', async (req,res)=>{
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
          res.status(201).json({message:"User registered successfully"});
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
      const finduser = await User.findOne({email:email});

      if(!finduser){
        res.status(201).json({message:"Invalid Credentials email not availble"})
      }else{
        const ismatch = await bcryptjs.compare(password,finduser.password);
        if(ismatch){
          res.status(201).send('Congrats you in');
        }else{
          res.status(201).json({message:"Invalid credentials"})
        }
      }
    } catch (error) {
      console.log(error)
    }
})
export default router;
