import React from 'react'
import img1 from '../../../assets/SPOTLIGHT PIC.jpg'


import './eventcomponent.css'
import { useNavigate } from 'react-router-dom'

const Eventcomponent = ({event}) => {
  const navigate=useNavigate()
  console.log(event)
  return (
    <div className='eventcontainer '>
      <div className='imgcontainer'>
      <img src={event?.imgurl} alt=""  />
      </div>
      <div className='eventbanner'>
       <div className='eventheader'>
         {event?.name}
        </div> 
        <div className='eventbody'>
       {event?.descreption}
        </div>
      </div>
      <div className='viewbtn ' 
      onClick={()=>navigate(`/${event?._id}/eventdetails`)}>
        view
      </div>
    </div>
  )
}

export default Eventcomponent