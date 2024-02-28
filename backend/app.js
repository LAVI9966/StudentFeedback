import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
dotenv.config({path:'./config.env'})
import authrouter from './routers/auth.js'
import courserouter from './routers/course.js'
import facultyrouter from './routers/faculty.js'
import './db/conn.js'
const app = express();
app.use(authrouter)
app.use(courserouter)
app.use(facultyrouter)
app.use(cors())
app.use(cors({
  origin: 'http://localhost:5173' // Replace with the actual origin of your frontend app
}));
app.listen(process.env.PORT,()=>{
  console.log('Server start');
})

