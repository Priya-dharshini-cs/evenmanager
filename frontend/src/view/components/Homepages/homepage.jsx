import React, { useState } from 'react'
import './homepage.css'
import Eventcomponent from './eventcomponent'
const Homepage = () => {


    const [bar1,setbar1]=useState(false)
    const [bar2,setbar2]=useState(false)
    const [bar3,setbar3]=useState(false)
    const [bar4,setbar4]=useState(false)
  return (
    <div className='totalcontainer'>
     <div className='homecontainer'>
      <div className='opacityshow'>
      </div>
       <div className='homeinsidecontainer'>
       <div className='header'>
         <div className='headername'>
            MyEventO
         </div>
         <div className='headernavbar'>
           <div className='headernavbarelem'>
            <div 
                onMouseOver={()=>setbar1(true)}
                onMouseLeave={()=>setbar1(false)}
                >
            Home
            </div>
            <div className={`bar ${bar1 ? "baractive": ""}`}>
            </div>
           </div>
           <div className='headernavbarelem'>
           <div  onMouseOver={()=>setbar2(true)}
                onMouseLeave={()=>setbar2(false)}>
            Events
            </div>
            <div className={`bar ${bar2 ? "baractive": ""}`}>
            </div>
           </div>
           <div className='headernavbarelem'>
           <div  onMouseOver={()=>setbar3(true)}
                onMouseLeave={()=>setbar3(false)}>
            Trends
            </div>
            <div className={`bar ${bar3 ? "baractive": ""}`}>
            </div>
           </div>
           <div className='headernavbarelem'>
           <div 
            onMouseOver={()=>setbar4(true)}
            onMouseLeave={()=>setbar4(false)}>
            Profile
            </div>
            <div className={`bar ${bar4 ? "baractive": ""}`}>
            </div>
           </div>
         </div>
       </div>
       <div className='descreption'>
       <div className='maindescreption'>
       Event Manager
       </div>
         <div className='subdescreption'>
           This is the event manager page this is used for 
           create and publish the events. Even organizers can 
           create ,edit and delete their posts and user can 
           see and register for the events and users will
           explore the events and  trends to recommend to the 
           users
         </div>
       </div>
       </div>
     </div>
     <div>
     </div>
     <div className='eventcontainers '>
        <Eventcomponent/>
        <Eventcomponent/>
        <Eventcomponent/>
        <Eventcomponent/>
        <Eventcomponent/>
        <Eventcomponent/>
        
     </div>
     </div>
  )
}

export default Homepage