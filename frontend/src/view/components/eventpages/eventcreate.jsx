import React from 'react'
import './eventcreate.css'
import img from '../../../assets/bgeven1.jpg'

const Eventcreate = () => {
  return (
    <div className='eventcreatecontainer'>
     <div className='eventcreateimg'>
        <img src={img} alt="" />
     </div>
     <div className='eventcreatecontent'>
      <div className='eventcreatheader'>
          Event-Register   
      </div>
      
      <div className='detailcolumn'>
      
        <div className='columnfield'>
            <div className='columnlabel'>
               Event name   
            </div>
            <input type="text" className='columninput'
            placeholder='Enter event name'/>
        </div>
       
        <div className='columnfield'>
            <div className='columnlabel'>
               Event Organizer   
            </div>
            <input type="text" className='columninput'
            placeholder='Enter Orgnaizer'/>
        </div>
        <div className='columnfield'>
            <div className='columnlabel'>
               Venue   
            </div>
            <input type="text" className='columninput'
            placeholder='Enter event venue'/>
        </div>
        <div className='columnfield'>
            <div className='columnlabel'>
               Coordinator   
            </div>
            <input type="text" className='columninput'
            placeholder='Enter event coordinator'/>
        </div>  
        <div className='columnfield'>
            <div className='columnlabel'>
               Contact   
            </div>
            <input type="text" className='columninput'
            placeholder='Enter contact phoneno'/>
        </div>  
        <div className='columnfield'>
            <div className='columnlabel'>
               Event Date 
            </div>
            <input type="date" className='columninput'
            placeholder='Enter event name'/>
        </div>
        <div className='columnfield'>
            <div className='columnlabel'>
               Descreption   
            </div>
            <textarea  className='columninput'
            placeholder='Enter event descreptions' rows={40}
            cols={50} style={{height:'40px'}}>
                </textarea>
        </div> 
        <div className='columnfield'>
            <div className='columnlabel'>
               Regulations   
            </div>
            <textarea  className='columninput'
            placeholder='Enter event regulations' rows={40}
            cols={50} style={{height:'40px'}}>
                </textarea>
        </div> 
        <button className='createbtn'>
        Submit
      </button>
      </div>
      
     </div>
    </div>
  )
}

export default Eventcreate