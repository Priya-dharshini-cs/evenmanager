import React, { useState } from 'react'
import './homepage.css'
import Eventcomponent from './eventcomponent'
import { useNavigate } from 'react-router-dom'
const Homepage = () => {


  // const checkscroll=window.scrollY.
  // console.log(checkscroll)
 const navigate=useNavigate()
  return (
    <div className='totalcontainer'>
      <div className='homecontainer'>
        <div className='opacityshow'>
        </div>
        <div className='homeinsidecontainer'>

          <div className='descreption'>
            <div className='maindescreption'>
              MyEventO
            </div>
            <div
              className='subdescreption'>
              <span>
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
             <button className='explorebtn'>Start explore now</button>
             <button className='explorebtn' 
             onClick={()=>navigate('/event-register')}>Create Event</button>
              
              </div> 
           

          </div>
        </div>
      </div>
      <div>
      </div>
      <div className='eventcontainers '>
        <Eventcomponent />
        <Eventcomponent />
        <Eventcomponent/>
        <Eventcomponent/>


      </div>
    </div>
  )
}

export default Homepage