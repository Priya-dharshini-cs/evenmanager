import mongoose from "mongoose";

const eventschema=new  mongoose.Schema({
    name:{
        type:String,
    },
    admin:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    },
    organizer:{
        type:String,

    },
    venue:{
        type:String
    },
    coordinator:{
        type:String
    },
    contact:{
     type:String       
    },
    eventdate:{
        type:String
    },
    formurl:{
     type:String,
    },
    descreption:{
        type:String
    } ,
    regulation:{
        type:String
    },
    imgurl:{
        type:String
    }
},{timeseries:true})



const Event=mongoose.model('Event',eventschema)


export default Event