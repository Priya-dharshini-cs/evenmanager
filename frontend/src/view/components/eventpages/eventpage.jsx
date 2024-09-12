


import React from 'react';
import img1 from '../../../assets/SPOTLIGHT PIC.jpg'

import './eventpage.css'
import {useNavigate} from  'react-router-dom'

const EventDetail = () => {

  const navigate=useNavigate()
  return (
    
    <div className="eventbox">
      <div className="eventimgdetails">
      <div className='imagecontainer'>
      <img
        src={img1}
        alt="Event Banner"
        className='eventimg'
       
      />
      </div>
      <div className="eventdetails">
      <div className='detailcontainer'>
      <div className='detailfield'>
      {/* <div className='datalabel'>
             
      </div> */}
       
      <div className='dataans1'>
      Spotlight
      </div>
      </div>
      <div className='detailfield'>
      
        <div className='datalabel'>
      Organized by
      </div>
      <div>
      Fine Arts Club of AVIT
      </div>
      </div>
      
      <div className='detailfield'>
      <div className='datalabel'>
             Date
      </div>
      <div>
      Aug 28th, 2024
      </div>
      </div>
      <div className='detailfield'>
      <div className='datalabel'>
             Venue
      </div>
      <div>
      Indoor Auditorium
      </div>
      </div>
      <div className='detailfield'>
      <div className='datalabel'>
             Event Coordinator
      </div>
      <div>
       Priya
      </div>
      </div>
      <div className='detailfield'>
      <div className='datalabel'>
            Contact
      </div>
      <div>
       +919113123121
      </div>
      </div>
      <button className="regbtn"
      onClick={()=>navigate('/event-register')}>
          Register Here
        </button>
</div>
    
      </div>
    </div>
     <div 
      className='lowercontainer'>
        <div className='descreptioncontainer'>
           <div className='desheader'>
              Descreption
           </div>
           <div className='descontainer'>
           Ensure that the setisopen and navigate functions are correctly defined and available in your component's scope.
           Verify that the isopen state is being managed properly and that it correctly controls the visibility of the modal.
           Ensure that the setisopen and navigate functions are correctly defined and available in your component's scope.
Verify that the isopen state is being managed properly and that it correctly controls the visibility of the modal.
Ensure that the setisopen and navigate functions are correctly defined and available in your component's scope.
Verify that the isopen state is being managed properly and that it correctly controls the visibility of the modal.
Ensure that the setisopen and navigate functions are correctly defined and available in your component's scope.
Verify that the isopen state is being managed properly and that it correctly controls the visibility of the modal.
           </div>
        </div>
        <div className='regulationscontainer'>
              <div className='regheader'>
                Regulations
              </div>
              <div className='regcontainer'>
              Ensure that the setisopen and navigate functions are correctly defined and available in your component's scope.
              Verify that the isopen state is being managed properly and that it correctly controls the visibility of the modal.
              Ensure that the setisopen and navigate functions are correctly defined and available in your component's scope.
Verify that the isopen state is being managed properly and that it correctly controls the visibility of the modal.
              </div>
        </div>
      </div>     
    </div>

  );
};

export default EventDetail;


