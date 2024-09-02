


import React from 'react';
import img1 from '../../../assets/SPOTLIGHT PIC.jpg'


import './eventpage.css'


const EventDetail = () => {
  return (

    <div className="eventbox">
      {/* <div className="navbar">
        <div className="nav-list">
          <h1 className='logo'>MyEventO</h1>
          <a href="#" className="nav-link">Home</a>
          <a href="#" className="nav-link">Events</a>
          <a href="#" className="nav-link">Trends</a>
          <a href="#" className="nav-link">Profile</a>



          
          

        </div>
      </div> */}
f

      <h1 className="eventname">SPOTLIGHT 2K24 - THE TALENT HUNT - FINE ARTS CLUB OF AVIT</h1>
      <div className="eventimgdetails">
        <img
          src={img1}
          alt="Event Banner"
          className='eventimg'

        />
        <div className="eventdetails">
          <span className="textdet">Event name: Spotlight</span><br />


          <p className="textdet">Organized by: Fine Arts Club of AVIT</p>
          <p className="textdet">Date: Aug 28th, 2024</p>
          <p className="textdet">Venue: Indoor Auditorium, AV Campus</p>
          <p className="textdet">Event Coordinator: Priya</p>
          <p className="textdet">Contact: +912587658966</p>
        </div>
      </div>
      <button className="regbtn">
        Register Here
      </button>
      <button className="viewbt ">
        View More
      </button>
    </div>

  );
};

export default EventDetail;


