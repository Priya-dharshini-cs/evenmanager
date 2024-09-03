


import React from 'react';
import img1 from '../../../assets/SPOTLIGHT PIC.jpg'

import './eventpage.css'


const EventDetail = () => {
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
      {/* <span className="textdet">Event name: Spotlight</span><br />
      <p className="textdet">Organized by: Fine Arts Club of AVIT</p>
      <p className="textdet">: Aug 28th, 2024</p>
      <p className="textdet">Venue: Indoor Auditorium, AV Campus</p>
      <p className="textdet">Event Coordinator: Priya</p>
      <p className="textdet">Contact: +912587658966</p> */}
      <div className='detailcontainer'>
      <div className='dataans1'>
         Spotlight
         </div>
       <div className='detailfield'>
         {/* <div className='datalabel'>
         Event name
         </div> */}
       </div>  
       <div className='detailfield'>
         <div className='datalabel'>
         Organized by
         </div>
         <div className='dataans'>
         Fine Arts Club of AVIT
         </div>
       </div>  
       <div className='detailfield'>
         <div className='datalabel'>
         Date
         </div>
         <div className='dataans'>
         Aug 28th, 2024
         </div>
       </div>  
       <div className='detailfield'>
         <div className='datalabel'>
          Venue
         </div>
         <div className='dataans'>
         Indoor Auditorium, AV Campus
         </div>
       </div>  
       <div className='detailfield'>
         <div className='datalabel'>
         Event Coordinator
         </div>
         <div className='dataans'>
         Priya
         </div>
       </div>  
       <div className='detailfield'>
         <div className='datalabel'>
        Contact
         </div>
         <div className='dataans'>
         +912587658966
         </div>
       </div>  
      </div>
      <button className="regbtn">
          Register Here
        </button>
      </div>
    </div>
     <div className='lowercontainer'>
        <div className='descreptioncontainer'>
           <div className='desheader'>
           Descreption
           </div>
           <div className='descontainer '>
           xport default Homepage here i want to check the scrollbar is active it it active means i want disable the bannner content hwo to chek the scrollbar is active 
            xport default Homepage here i want to check the scrollbar is active it it active means i want disable the bannner content hwo to chek the scrollbar is active 
            xport default Homepage here i want to check the scrollbar is active it it active means i want disable the bannner content hwo to chek the scrollbar is active 
            xport default Homepage here i want to check the scrollbar is active it it active means i want disable the bannner content hwo to chek the scrollbar is active 
            xport default Homepage here i want to check the scrollbar is active it it active means i want disable the bannner content hwo to chek the scrollbar is active 
            xport default Homepage here i want to check the scrollbar is active it it active means i want disable the bannner content hwo to chek the scrollbar is active 
            xport default Homepage here i want to check the scrollbar is active it it active means i want disable the bannner content hwo to chek the scrollbar is active 
            xport default Homepage here i want to check the scrollbar is active it it active means i want disable the bannner content hwo to chek the scrollbar is active 
           </div>
          <div> 
          </div>
         </div>   
         <div className='regulationscontainer'>
           <div className='regheader'>
           Regulations 
            </div>   
            <div className='regcontainer'>
            xport default Homepage here i want to check the scrollbar is active it it active means i want disable the bannner content hwo to chek the scrollbar is active 
            xport default Homepage here i want to check the scrollbar is active it it active means i want disable the bannner content hwo to chek the scrollbar is active 
            xport default Homepage here i want to check the scrollbar is active it it active means i want disable the bannner content hwo to chek the scrollbar is active 
            xport default Homepage here i want to check the scrollbar is active it it active means i want disable the bannner content hwo to chek the scrollbar is active 
            </div>
         </div>
     </div>
    </div>
    
  );
};

export default EventDetail;


