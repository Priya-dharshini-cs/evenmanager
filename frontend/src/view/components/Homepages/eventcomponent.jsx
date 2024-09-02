import React from 'react'
import img1 from '../../../assets/SPOTLIGHT PIC.jpg'


import './eventcomponent.css'
import { useNavigate } from 'react-router-dom'

const Eventcomponent = () => {
  const navigate=useNavigate()
  return (
    <div className='eventcontainer '>
      <div className='imgcontainer'>
      <img src={img1} alt=""  />
      </div>
      <div className='eventbanner'>
       <div className='eventheader'>
            Spotlight    
        </div> 
        <div className='eventbody'>
          We invite you for this event Spotlight.
          Organized by:Fine arts Club.
          venue:Indoor auditorium,AV campus.
          Date:20/08/2024 Time:10.00 am
        </div>
      </div>
      <div className='viewbtn ' 
      onClick={()=>navigate('/eventdetails')}>
        view
      </div>
    </div>
  )
}

export default Eventcomponent