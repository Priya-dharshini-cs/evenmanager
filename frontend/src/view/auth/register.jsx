import React, { useState } from 'react'
import './register.css'
import {useRecoilState, useRecoilValue}from 'recoil'
import { FaBarcode, FaEnvelope, FaFingerprint, FaIdBadge, FaIdCard, FaKey, FaLock, FaRegBookmark, FaRegCalendar, FaUniversity, FaUser, FaUserCircle, FaUserTag } from 'react-icons/fa'
import authatom from '../atoms/authatom'
import {toast} from 'react-toastify'
import useratom from '../atoms/useratom'
import { useNavigate } from 'react-router-dom'

const Register = () => {
  
  const [isfocused1,setisfouced1]=useState(false)
  const [isfocused2,setisfouced2]=useState(false)
  const [isfocused3,setisfouced3]=useState(false)
  const [isfocused4,setisfouced4]=useState(false)
  const [isfocused5,setisfouced5]=useState(false)
  const [isfocused6,setisfouced6]=useState(false)
  const [isfocused7,setisfouced7]=useState(false)

  const [auth,setauth]=useRecoilState(authatom)
  const [user,setuser]=useRecoilState(useratom)
  const [details,setdetails]=useState({
    name:'',
    email:'',
    password:'',
    college:'',
    department:'',
    role:false,
    regno:''
  })
  const navigate=useNavigate()
  // console.log(auth)

  // const toast=useto

  const handleregister=async()=>{
    try{
     const res=await fetch('/api/user',{
     method:'POST',
      headers:{
      'content-type':'application/json'
     },
     body:JSON.stringify(details)
     })
     const data=await res.json()

     if(data?.error)
     {
      console.log(data?.error)
      toast.error(data?.error)
      return
     }
     let token=JSON.stringify({
      token:data,
      expiresAt:new Date().getTime() + 2* 24*60*60*1000
     })
     setuser(JSON.parse(token))
     localStorage.setItem('token',token)
     toast.success('Registered Sucessfully')
     navigate('/')
    }
    catch(err)
    {
      console.log(err)
    }
  }

  return (
     <div className='background'>
     <div className='opacitycheck1'>
     </div>
      <div className='formcontainer'>
          <div className='header-1'>
            Sign Up
            </div> 
            <div className='fieldcontainer'>
              <div className={`field ${isfocused1 ? 'field-add' : ''}`}>
                  <FaUser/>
                <input type="text " 
                value={details.name}
                onChange={(e)=>setdetails({
                  ...details,name:e.target.value
                })}
                onFocus={()=>setisfouced1(true)}
                onBlur={()=>setisfouced1(false)}
                placeholder='Enter name'  
                className='inputfiled'/>
              </div>
           
              <div className={`field ${isfocused2 ? 'field-add' : ''}`}>
                <FaEnvelope/>
                <input type="email" placeholder='Enter email'  
                className='inputfiled'
                value={details.email}
                onChange={(e)=>setdetails({
                  ...details,email:e.target.value
                })}
                onFocus={()=>setisfouced2(true)}
                onBlur={()=>setisfouced2(false)}/>
              </div>
              <div className={`field ${isfocused3 ? 'field-add' : ''}`}>
                <FaLock/>
              <input type="password" placeholder='Enter Password'  
                className='inputfiled'
                value={details.password}
                onChange={(e)=>setdetails({
                  ...details,password:e.target.value
                })}
                onFocus={()=>setisfouced3(true)}
                onBlur={()=>setisfouced3(false)}/>
              </div>
              <div className={`field ${isfocused7 ? 'field-add' : ''}`}>
                  <FaUniversity/>
                <input type="text " 
                value={details.college}
                onChange={(e)=>setdetails({
                  ...details,college:e.target.value
                })}
                onFocus={()=>setisfouced7(true)}
                onBlur={()=>setisfouced7(false)}
                placeholder='Enter College name'  
                className='inputfiled'/>
              </div>
              <div className={`field ${isfocused4 ? 
                'field-add' : ''}`}>
                <FaUserCircle/>
                <input type="text" placeholder='Enter Reg no (optional)'  
                className='inputfiled'
                value={details.regno}
                onChange={(e)=>setdetails({
                  ...details,regno:e.target.value
                })}
                onFocus={()=>setisfouced4(true)}
                onBlur={()=>setisfouced4(false)}/>
                 </div>
            <div className='field1'>
            <div className='subfield1'>
                <div className='subfield2'>
                  <div className='fieldheader'>
                    Department
                  </div>
               
                  <input type="text" placeholder='Enter Department'  
                className='inputfiled1'
                value={details.department}
                onChange={(e)=>setdetails({
                  ...details,department:e.target.value
                })}
                onFocus={()=>setisfouced6(true)}
                onBlur={()=>setisfouced6(false)}/>
                
                 </div>
              </div>
            

            <div className='subfield1'>
                <div className='subfield2'>
                  <div className='fieldheader'>
                    Select Role
                  </div>
                 <select name="
                 " id="" className={`options 
                  ${isfocused5 ? 'option-add' :''}`}
                 onClick={()=>setisfouced5(true)}
                 onBlur={()=>setisfouced5(false)}
                 onChange={(e)=>setdetails({
                  ...details,role:e.target.value
                })}
                 >
                  <option selected hidden disabled value="">
                    Select Role
                  </option>
                  <option value={false} >
                    User
                  </option>
                  <option value={true}>
                    Organizer
                  </option>
                 </select>
                 </div>
              </div>
          
             
              </div>
              </div>
              <div className='submitbtn'
              onClick={handleregister}
              >
                Submit
              </div>
              <div className='showbar'>
                <div className='showbar1'>
                Already have an account 
                </div>
                <div className='showbar2'
                onClick={()=>setauth("Login")}>
                  Login
                </div>
              </div>
      </div>
     </div>
  )
}

export default Register