import React, { useContext } from 'react'
import { eventcontext } from '../Homepages/eventcontext'
import './profilemodel.css'
import { FaClosedCaptioning, FaCross, FaCrosshairs, FaEnvelope, FaUniversity, FaUser, FaUserCircle, FaXingSquare } from 'react-icons/fa'
import { Navigate, useNavigate } from 'react-router-dom'
import { useRecoilState, useRecoilValue } from 'recoil'
import useratom from '../../atoms/useratom'
import { toast } from 'react-toastify'

const Profilemodel = () => {
    const {isopen,setisopen}=useContext(eventcontext)
    const navigate=useNavigate()
    console.log(isopen)
    const [user1,setuser]=useRecoilState(useratom)
    const user=user1?.token
    
    const handlelogout=async(e)=>{
      e.preventDefault()
      try{
         const res=await fetch('/api/user')
         const data=await res.json()
         setuser(null)
         localStorage.removeItem('token') 
         navigate('/auth')
         setisopen(false)
         toast.success('Logged Out successfully')
      }
      catch(err)
      {
        console.log(err)
      }
    }

    return (
    <div style={{position:'relative'}}>   
        {
            isopen && (
                <div className='modelprofile'>
                    <div 
                    onClick={()=>setisopen(false)}
                    className='crossbtn'>
                      X
                    </div>
                    <div className='profilehead'>
                             Profile
                    </div>
                   <div className='profiledes'>
                   <div className='profilesubhead'>
                        <FaUser/>
                        <div>
                            {user?.name}
                        </div>
                     </div>
                    <div className='profilesubhead'>
                    <FaEnvelope/>
                     <div>
                        {user?.email}
                     </div>
                    </div >
                    <div className='profilesubhead'>
                        <FaUniversity/>
                        <div>
                           {user?.college}
                        </div>
                    </div>
                    <div className='profilesubhead'>
                        <FaUserCircle/>
                        <div>
                          {user?.regno}
                        </div>
                    </div>
                    <div>
                    </div>
                   </div>
                   <div className='profilebtns'>
                     <button 
                     onClick={handlelogout} 
                     style={{cursor:'pointer'}}
                     className='profilebtn1'>
                        Logout
                     </button >
                     <button className='profilebtn2' 
                     onClick={(e)=>{
                      e.preventDefault()
                      navigate('/profile')
                      setisopen(false)
                      }}>
                        Update
                     </button>
                   </div>
                   <button 
                   onClick={()=>{navigate(`/admin/event-pages`)
                    setisopen(false)
                   }}
                   className='profilebtn3'
                   >
                     Admin events
                   </button>
                </div>
            )
        }
    </div>
  )
}

export default Profilemodel