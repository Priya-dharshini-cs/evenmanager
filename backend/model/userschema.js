import mongoose from "mongoose";

const userschema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
    type:String,
    required:true,
    },
    password:{
        type:String,
        required:true,
    },
    role:{
        type:Boolean,
        default:false
    },
    college:{
        type:String,
        required:true
    },
    regno:{
        type:String,
    },
    department:{
        type:String
    }
})


const User=mongoose.model('User',userschema)

export default User

