import Event from "../model/eventscema.js"
import {v2 as cloudinary} from 'cloudinary'


const createevent=async(req,res)=>{
  try{

   const {name,organizer,venue,coordinator,contact,
    eventdate,descreption,regulation,formurl
   } = req.body
   
   let {imgurl} = req.body
//    console.log(imgurl)



   const {id}=req.user._id
    
//    if(!imgurl)
//    {
//     return res.json({error:"Imgurl is required"})
//    }
  
   if(imgurl)
   {
    let upload = await cloudinary.uploader.upload(imgurl)
    imgurl=upload.secure_url      
    }
   
    // console.log(imgurl)

   const event= await Event.create({
    name,
    organizer,
    venue,
    imgurl,
    coordinator,
    contact,
    eventdate,
    descreption,
    regulation,
    formurl,
    admin:id
   })

   res.json(event)

  }
  catch(err)
  {
    console.log(err)
  }
}

const getevent=async(req,res)=>{
    const {id} = req.params

    try{
      const event=await Event.findById(id)
      
      if(!event)
      {
        return res.json({error:"Event is not found"})
      }
      res.json(event)
    }
    catch(err)
    {
        console.log(err)
    }
}

const updateevent=async(req,res)=>{
    try{
     const {id}=req.params
      const {name,organizer,venue,coordinator,contact,
    eventdate,descreption,regulation
   ,formurl} = req.body
   let {imgurl}=req.body

   const event=await Event.findById(id)
   if(!event)
   {
    return res.json({error:"Event is not found"})
   }
   const updatefields={}
   
   if(name)  updatefields.name  = name|| event.name
   if(organizer)  updatefields.organizer = organizer || event.organizer
   if(venue) updatefields.venue = venue || event.venue
   if(coordinator) updatefields.coordinator = coordinator || event.coordinator
   if(contact) updatefields.contact = contact || event.contact
   if(eventdate) updatefields.eventdate= eventdate || event.eventdate
   if(descreption) updatefields.descreption = descreption || event.descreption
   if(regulation) updatefields.regulation = regulation || event.regulation
   if(formurl) updatefields.formurl = formurl || event.formurl


   if(imgurl)
   {
    if(event.imgurl)
    {
        await cloudinary.uploader.destroy(
            event.imgurl.split('/').pop().split('.')[0]
        )
        let imgurl1=await cloudinary.uploader.upload(imgurl)
        updatefields.imgurl=imgurl1.secure_url
    }
   }

   const updatedevent=await Event.findByIdAndUpdate(event._id,
    updatefields,{new:true}
   )
   res.json(updatedevent)

    }
    catch(err)
    {
        console.log(err)
    }
}

const deleteevent=async(req,res)=>{
    try{
      const {id}=req.params

      const event=await Event.findById(id)

      if (!event)
      {
        return res.json({error:"Event is not found"})
      }
      const removeevent=await Event.findByIdAndDelete(event._id)

      res.json(removeevent)

    }
    catch(err)
    {
        console.log(err)
    }
}

const getallevent=async(req,res)=>{
    try{
      
        const events=await Event.find({}).limit(10)
        res.json(events)
    }
    catch(err)
    {

    }
}


const getadminevents=async(req,res)=>{
    try{
        const {id}=req.params

        const event=await Event.find({
            admin:id
        })
        if(!event)
        {
            return res.json({error:"Event is not found"})
        }
        res.json(event)
      }
      catch(err)
      {
          console.log(err)
      }
}

const latestevents=async(req,res)=>{
    try{
       const events=await Event.find({}).sort({createdAt:-1}).limit(10)

       res.json(events)
    }
    catch(err)
    {
        console.log(err)
    }
}


export {
    createevent,
    getevent,
    updateevent,
    deleteevent,
    getadminevents,
    getallevent,
    latestevents
}