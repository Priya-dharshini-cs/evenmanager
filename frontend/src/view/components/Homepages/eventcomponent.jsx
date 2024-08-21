import React from 'react'
import img1 from '../../../assets/bgevent.jpeg'
import './eventcomponent.css'

const Eventcomponent = () => {
  return (
    <div className='eventcontainer '>
      <div className='imgcontainer'>
      <img src={img1} alt=""  />
      </div>
      <div className='eventbanner'>
       <div className='eventheader'>
            Rotract Quiz Game    
        </div> 
        <div className='eventbody'>
          This is the quiz game . it conducted in both
          technical and nontechnical wasy. This event is 
          conducted in the drawing hall . Intresting students
          are invited to participate in this event.
        </div>
      </div>
      <div className='viewbtn '>
        view
      </div>
    </div>
  )
}

export default Eventcomponent