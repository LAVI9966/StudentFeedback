import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
dotenv.config({path:'./config.env'})
import router from './routers/auth.js'
import './db/conn.js'
const app = express();
app.use(router)
app.use(cors())
app.use(cors({
  origin: 'http://localhost:5173' // Replace with the actual origin of your frontend app
}));
app.listen(process.env.PORT,()=>{
  console.log('Server start');
})

