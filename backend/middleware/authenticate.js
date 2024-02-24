import jwt from 'jsonwebtoken'
import { User}  from '../models/User.js';
const Authenticate = async(req, res,next)=>{
  try {

    const token = req.cookies.jwtoken;
    const verifytoken = jwt.verify(token,process.env.SECRET_KEY);

    const rootuser = await User.findOne({_id:verifytoken._id , "tokens.token":token})
    if(!rootuser){throw new Error('User not found')}

    req.token = token;
    req.rootuser = rootuser;
    req.userID = rootuser._id;
    next();

  } catch (error) {

    res.status(401).send('Unothrized')

  }
}
export default Authenticate;