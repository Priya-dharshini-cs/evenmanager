

const generatejwt=async(res,userid)=>{
    const token=jwt.sign({userid},process.env.SECRET_KEY,
        {expiresIn:"15d"})
    
    res.cookie('token',token,{
        httpOnly:true,
        maxAge:15*24*60*60*1000,
        sameSite:'strict'
    })     
    return token
}


export default generatejwt