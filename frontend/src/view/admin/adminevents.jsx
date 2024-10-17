import React, { useEffect, useState } from 'react'
import  '../components/Homepages/homepage.css'
import Eventcomponent from '../components/Homepages/eventcomponent'
import { useRecoilValue } from 'recoil'
import useratom from '../atoms/useratom'


const Adminevents = () => {

    

    const [adminevents,setadminevents]=useState(null)
    const user1=useRecoilValue(useratom)
    const user=user1?.token

    useEffect(()=>{
        const getadminevents=async()=>{
         const res=await fetch(`/api/event/admin/${user?._id}`)
         const data=await res.json()
         setadminevents(data)
        }
        getadminevents()
    },[])


    

  return (
    <div 
    className='admincontainer'
    >
     <div
     className='trendheadcontainer'
     >
       <div 
       className='trendhead'
       >
        Admin Events
       </div>
        <div 
        className='trendside'
        >
      

        </div>
     </div>
   
     <div className='trendelemcontainer'>
       
       {
        adminevents?.map((event)=>(
          <Eventcomponent key={event?._id} event={event} />
        ))
       }
       
    </div>
    </div>
  )
}

export default Adminevents