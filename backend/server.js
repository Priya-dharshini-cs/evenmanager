import express from  'express'
import cors from 'cors'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser'
import usercontroller from './controllers/usercontroller.js'
import eventcontroller from './controllers/eventcontroller.js'
import { v2 as cloudinary } from 'cloudinary'
import bodyparser from 'body-parser'

const app=express()

dotenv.config()

app.use(cors())
app.use(express.json())
app.use(cookieParser())
// app.use(bodyparser.json({ limit: '30mb' }));  // Adjust the size based on your requirement
// app.use(bodyparser.urlencoded({ limit: '10mb', extended: true }));
app.use(express.urlencoded({extended:true}))


mongoose.connect(process.env.MONGO_URI)


cloudinary.config({
    cloud_name:process.env.CLOUDINARY_NAME,
    api_key:process.env.CLOUDINARY_APIKEY,
    api_secret:process.env.CLOUDINARY_APIKEYSECRET  
})


app.use('/api/user',usercontroller)
app.use('/api/event',eventcontroller)   

const port=process.env.PORT || 5000

app.listen(port,()=>{
    console.log('server is running on port 3000')
})


