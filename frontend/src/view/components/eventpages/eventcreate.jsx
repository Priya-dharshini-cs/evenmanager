import React, { useContext, useRef, useState } from 'react'
import './eventcreate.css'
import img from '../../../assets/bgeven1.jpg'
import { toast } from 'react-toastify'
import { eventcontext } from '../Homepages/eventcontext'
import { useNavigate } from 'react-router-dom'
import { useRecoilValue } from 'recoil'
import useratom from '../../atoms/useratom'
import handleimage from '../../hooks/handleimage'

const Eventcreate = () => {

  const [details,setdetails]=useState({
    name:'',
    organizer:'',
    venue:'',
    coordinator:'',
    contact:'',
    eventdate:'',
    formurl:'',
    descreption:'',
    regulation:''
  })
  const {events,setevents}=useContext(eventcontext)
  const navigate=useNavigate()
  const user1=useRecoilValue(useratom)
  let user=user1?.token
  const imgref=useRef(null)
  
  const {handlechangeimage,imgurl,setimgurl}=handleimage()
  console.log(imgurl)
 
  const handlecreate=async()=>{
    try{
      if(!details.name || !details.organizer ||
        !details.venue || !details.coordinator ||  
        !details.contact || !details.eventdate || 
        !details.descreption || !details.regulation ||
        !details.formurl 
      )
      {
        toast.error('Provide all the fields')
        return 
      }

      if(!imgurl)
      {
        toast.error('Please upload an image')
        return
      }
      const res=await fetch('/api/event',{
        method:'POST',
        headers:{
            'content-Type':'application/json'
        },
        body:JSON.stringify({
          ...details,
          imgurl:imgurl
      })
      })
      const data=await res.json()
      if(data?.error)
      {
        toast.error(data?.error)
    return  
    }
     setevents(data)
     toast.success('Event created')
     navigate('/')
    }
    catch(err)
    {
        console.log(err)
    }
  }


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
            placeholder='Enter event name'
            value={details.name}
            onChange={(e)=>setdetails({...details,
            name:e.target.value})} 
            />
            
        </div>
       
        <div className='columnfield'>
            <div className='columnlabel'>
               Event Organizer   
            </div>
            <input type="text" className='columninput'
            placeholder='Enter Orgnaizer'
            value={details.organizer}
            onChange={(e)=>setdetails({...details,
              organizer:e.target.value})} 
            />
        </div>
        <div className='columnfield'>
            <div className='columnlabel'>
               Venue   
            </div>
            <input type="text" className='columninput'
            placeholder='Enter event venue'
            value={details.venue}
            onChange={(e)=>setdetails({...details,
              venue:e.target.value})} />
        </div>
        <div className='columnfield'>
            <div className='columnlabel'>
               Coordinator   
            </div>
            <input type="text" className='columninput'
            placeholder='Enter event coordinator'
            value={details.coordinator}
            onChange={(e)=>setdetails({...details,
              coordinator:e.target.value})} />
        </div>  
        <div className='columnfield'>
            <div className='columnlabel'>
               Google form URL   
            </div>
            <input type="text" className='columninput'
            placeholder='Enter google form url'
            value={details.formurl}
            onChange={(e)=>setdetails({...details,
              formurl:e.target.value})} />
        </div>  
        <div className='columnfield'>
            <div className='columnlabel'>
               Contact   
            </div>
            <input type="text" className='columninput'
            placeholder='Enter contact phoneno'
            value={details.contact}
            onChange={(e)=>setdetails({...details,
              contact:e.target.value})} 
            />
        </div>  
        <div className='columnfield'>
            <div className='columnlabel'>
               Event Date 
            </div>
            <input type="date" className='columninput'
            placeholder='Enter event name'
            value={details.eventdate}
            onChange={(e)=>setdetails({...details,
            eventdate:e.target.value})} 
            />
        </div>
        <div className='columnfield'>
            <div className='columnlabel'>
               Descreption   
            </div>
            <textarea  
            value={details.descreption}
            onChange={(e)=>setdetails({...details,
              descreption:e.target.value})} 
            className='columninput'
            placeholder='Enter event descreptions' rows={40}
            cols={50} style={{height:'40px'}}>
                </textarea>
        </div> 
        <div className='columnfield'>
            <div className='columnlabel'>
               Regulations   
            </div>
            <textarea  className='columninput'
            placeholder='Enter event regulations' 
            value={details.regulation}
            onChange={(e)=>setdetails({...details,
              regulation:e.target.value})} 
            rows={40}
            cols={50} style={{height:'40px'}}>
            </textarea>

       
       <input type='file'  
       ref={imgref}
       onChange={handlechangeimage}
       style={{visibility:'hidden'}}
       />
       {
        !imgurl &&
        <button
        className='uploadbutton'
        onClick={()=>imgref.current.click()}
       >
         Upload image
       </button>
       }
      <div 
      className='imgcontain'
      >
     {
      imgurl && 
      <img src={imgurl} 
      style={{width:'200px',
        height:'200px'
      }}
      alt="" />
     }

     {
      imgurl &&
      <button
      className='wrongbutton'
      onClick={()=>setimgurl(null)}
      >
        X
      </button>
     }
        </div>     
  

        </div> 
         <button 
        onClick={handlecreate}
        className='createbtn'>
        Submit
      </button>
      </div>
      
     </div>
    </div>
  )
}

export default Eventcreate