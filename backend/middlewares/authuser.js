import jwt from 'jsonwebtoken'
import User from '../model/userschema.js'


const authuser=async(req,res,next)=>{
    const token=req?.cookies?.token

    if (!token)
    {
        return res.json({error:"token is not found"})
    }
    try{
        const decoded= jwt.verify(token,
            process.env.JWT_SECRET)
        
       const user=await User.findById(decoded?.userid)   
       if (!user)
       {
        return res.json({error:"User is not found"})
       }
       req.user=user
       next()
    }
    catch(err)
    {
        console.log(err)
        res.json(err)
    }
}



export default authuser