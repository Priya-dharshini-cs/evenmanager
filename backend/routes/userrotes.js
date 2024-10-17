import generatejwt from "../middlewares/generatejwt.js"
import User from "../model/userschema.js"
import bcrypt from 'bcryptjs'

const reguser=async(req,res)=>{
   const {name,email,password,college,department,role
    ,regno
   } = req.body
   const user= await User.findOne({
      email:email
   })

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
   const user=await User.findOne({email:email})
   
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
       const {id}=req.params

       const user=await User.findById(id)

       if(!user)
       {
         return res.json({error:"User is not found"})
       }
       let updatefields={

       }
       if(name)  updatefields.name = name || user.name
       if(email)  updatefields.email= email || user.email
       if(password) {
          let bcryptsalt=bcrypt.genSaltSync(10)
          let hashedpassword=bcrypt.hashSync(password,bcryptsalt)
          updatefields.password = hashedpassword || user.password
       }  
      
      let updateduser=await User.findByIdAndUpdate(user._id,
         updatefields,{new:true}
      ) 

      res.json(updateduser)
    } 
    catch(err)
    {
        console.log(err)
    }
}

const logoutuser=async(req,res)=>{
   try{
      res.clearCookie()
      res.json('Logged out successfull')
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