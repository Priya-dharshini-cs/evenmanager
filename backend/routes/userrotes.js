import generatejwt from "../middlewares/generatejwt.js"
import User from "../model/userschema.js"
import bcrypt from 'bcrypt'

const reguser=async(req,res)=>{
   const {name,email,password,college,department,role
    ,regno
   } = req.body
   const user= await User.findOne({})

   if(user)
   {
    return res.json({error:"User already exists"})
   }
   
   const bcryptsalt=bcrypt.genSaltSync(10)
   const encryptedpassword=bcrypt.hashSync(password,bcryptsalt)

   const newuser=new User({
    name,
    email,
    password:encryptedpassword,
    college,
    department,
    role,
    regno
   })
   generatejwt(res,newuser._id)
   await newuser.save()
  
   res.json(newuser)
} 

const loginuser=async(req,res)=>{
  try{
   const {email,password}=req.body
   const user=await User.findOne({email})
   if(!user)
   {
    return res.json({error:"User not found"})
   }
   const checkpassword=bcrypt.compareSync(password,user.password)
   if(!checkpassword)
   {
    return res.json({error:"Password incorrect"})
   }
   generatejwt(res,user._id)
   res.json(user)
  } 
  catch(err)
  {
    // res.json()
    console.log(err) 
  }  
}

const updateuser=async (req,res)=>{
    try{
       const {name,email,password} =req.body
    } 
    catch(err)
    {
        console.log(err)
    }
}

const logoutuser=async(req,res)=>{
   try{
      res.removeCookie()
   }
   catch(err)
   {
    console.log(err)
   }
}

export {
    reguser,
    loginuser,
    updateuser,
    logoutuser
}