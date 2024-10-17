


import React, { useEffect, useState } from 'react';
import img1 from '../../../assets/SPOTLIGHT PIC.jpg'

import './eventpage.css'
import {useNavigate, useParams} from  'react-router-dom'
import { FaEdit, FaTrash } from 'react-icons/fa';
import { useRecoilValue } from 'recoil';
import useratom from '../../atoms/useratom';

const EventDetail = () => {

  const navigate=useNavigate()

  const {id}=useParams()
  const [event,setevent]=useState(null)
  const user1=useRecoilValue(useratom)
  const user=user1?.token

  useEffect(()=>{

    const geevent=async()=>{
     try{
       const res=await fetch(`/api/event/${id}`)
       const data=await res.json()
       setevent(data)
      }
     catch(err)
     {
      console.log(err)
     }
    }
    geevent()
  },[id])

  const updateevent=()=>{

  }

  const deletevent=async()=>{
    try{
    const res=await fetch(`/api/event/${id}`,{
      method:'DELETE'
    })
    const data=await res.json()
    console.log(data)
    navigate(`/admin/event-pages`)
    }
    catch(err)
    {
      console.log(err)
    }
  }

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
      {event?.name}
      </div>
      </div>
      <div className='detailfield'>
        <div className='datalabel'>
      Organized by
      </div>
      <div>
     {event?.organizer}
      </div>
      </div>
      
      <div className='detailfield'>
      <div className='datalabel'>
             Date
      </div>
      <div>
      {event?.eventdate}
      </div>
      </div>
      <div className='detailfield'>
      <div className='datalabel'>
             Venue
      </div>
      <div>
     {event?.venue}
      </div>
      </div>
      <div className='detailfield'>
      <div className='datalabel'>
             Event Coordinator
      </div>
      <div>
{event?.coordinator}
      </div>
      </div>
      <div className='detailfield'>
      <div className='datalabel'>
            Contact
      </div>
      <div>
       +91 {event?.contact}
      </div>
      </div>
      <button className="regbtn"
      onClick={()=>window.open(`${event?.formurl}`,'_blank')}>
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
           {
            event?.descreption
           }
           </div>
        </div>
        <div className='regulationscontainer'>
              <div className='regheader'>
                Regulations
              </div>
              <div className='regcontainer'>
            {
              event?.regulation
            }
              </div>
        </div>
      </div>     
      {
        user?._id.toString() === event?.admin.toString() &&
        <div className='editicons'> 
         <FaEdit
         onClick={()=>navigate(`/admin/${id}/edit`)} 
         cursor={'pointer'}
         style={{marginRight:'10px'}}
         />
         <FaTrash
         cursor={'pointer'}
         onClick={deletevent}
         />
      </div>
      }
    </div>

  );
};

export default EventDetail;


