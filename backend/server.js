import express from  'express'
import cors from 'cors'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser'
import usercontroller from './controllers/usercontroller.js'

const app=express()

dotenv.config()

app.use(cors())
app.use(express.json())
app.use(cookieParser())
app.use(express.urlencoded({extended:true}))





app.use('/api/user',usercontroller)

const port=process.env.PORT || 3000

app.listen(port,()=>{
    console.log('server is running on port 3000')
})


