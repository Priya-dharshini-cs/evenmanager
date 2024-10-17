import React, { useContext, useEffect, useRef, useState } from 'react'
import './homepage.css'
import Eventcomponent from './eventcomponent'
import { useNavigate } from 'react-router-dom'
import { eventcontext } from './eventcontext'
import { useRecoilValue } from 'recoil'
import useratom from '../../atoms/useratom'
const Homepage = () => {


  // const checkscroll=window.scrollY.
  // console.log(checkscroll)
 const navigate=useNavigate()
 const user1=useRecoilValue(useratom)
 const user=user1?.token
 const {changeref,trendref}=useContext(eventcontext)
const [trends,settrends]=useState(null)
const [events,seteevents]=useState(null)

 const handlechange=(ref)=>{
  ref?.current?.scrollIntoView({behavior:"smooth",
    // block:"center"
  })
}

 useEffect(()=>{

  const getevents=async()=>{
   try{
     const res=await fetch('/api/event')
     const data=await res.json()
     seteevents(data)
   }
   catch(err)
   {
    console.log(err)
   }
  }
  const gettrends=async()=>{
    try{
      const res=await fetch('/api/event/latest')
      const data=await res.json()
      settrends(data)
    }
    catch(err)
    {
     console.log(err)
    }
   }
  gettrends()
  getevents()
 },[])

  return (
    <div className='totalcontainer'>
      <div className='homecontainer'>
        <div className='opacityshow'>
        </div>
        <div className='homeinsidecontaine'>

          <div className='descreption'>
            <div className='maindescreption'>
              MyEventO
            </div>
            <div
              className='subdescreption'>
              <span >
                Explore a variety of exciting events happening across the campus.
                Whether you're interested in academic workshops, sports tournaments, cultural festivals, or career-building seminars, we've got something for everyone!
              </span>
              <br />
              </div>
              <div className="subdescription2">
                Browse Events: Check out the latest events tailored just for you.<br />
                Register: Easily sign up for events and secure your spot.<br />
                Stay Informed: Get the details you need, including event descriptions, dates, venues, and more.<br />
                Don't miss out on the opportunity to connect, learn, and engage with your college community.
                </div>
              
            
             <div className='buttonfield'>
             <button className='explorebtn'
             onClick={()=>handlechange(trendref)}
             >Start explore now</button>
           {
            // user?.role && 
            <button className='explorebtn' 
            onClick={()=>navigate('/event-create')}>Create Event</button>
             
           }
              </div> 
           

          </div>
        </div>
      </div>
      <div>
      </div>
      <div className='eventcontainers ' 
      ref={changeref}
      >
      
      <div className='eventelemcontainer'>
       {
        events?.map((event)=>(
          <Eventcomponent key={event?._id} event={event} />
        ))
       }
       
      </div>
    
    <div 
    className='trendcontainer'
    > 
     <div className='trendheadcontainer'
>
     <div className='trendhead' 
    ref={trendref}
    >
      Trend Now
      </div>
       <div className='trendside'>
       </div>
     </div>
       <div className='trendelemcontainer'>
       
       {
        trends?.map((event)=>(
          <Eventcomponent key={event?._id} event={event} />
        ))
       }
       
    </div>
    </div>
      </div>

      {/* <div ref={trendref}>
      </div>    */}
      {/* <div ref={changeref}>

      </div> */}
    </div>
  )
}

export default Homepage