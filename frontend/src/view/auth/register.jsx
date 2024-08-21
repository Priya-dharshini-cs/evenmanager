import React, { useState } from 'react'
import './register.css'
import {useRecoilState, useRecoilValue}from 'recoil'
import { FaBarcode, FaEnvelope, FaFingerprint, FaIdBadge, FaIdCard, FaKey, FaLock, FaRegBookmark, FaRegCalendar, FaUniversity, FaUser, FaUserCircle, FaUserTag } from 'react-icons/fa'
import authatom from '../atoms/authatom'
const Register = () => {
  
  const [isfocused1,setisfouced1]=useState(false)
  const [isfocused2,setisfouced2]=useState(false)
  const [isfocused3,setisfouced3]=useState(false)
  const [isfocused4,setisfouced4]=useState(false)
  const [isfocused5,setisfouced5]=useState(false)
  const [isfocused6,setisfouced6]=useState(false)
  const [isfocused7,setisfouced7]=useState(false)

  const [auth,setauth]=useRecoilState(authatom)
  console.log(auth)
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
                onFocus={()=>setisfouced1(true)}
                onBlur={()=>setisfouced1(false)}
                placeholder='Enter name'  
                className='inputfiled'/>
              </div>
           
              <div className={`field ${isfocused2 ? 'field-add' : ''}`}>
                <FaEnvelope/>
                <input type="email" placeholder='Enter email'  
                className='inputfiled'
                onFocus={()=>setisfouced2(true)}
                onBlur={()=>setisfouced2(false)}/>
              </div>
              <div className={`field ${isfocused3 ? 'field-add' : ''}`}>
                <FaLock/>
              <input type="password" placeholder='Enter Password'  
                className='inputfiled'
                onFocus={()=>setisfouced3(true)}
                onBlur={()=>setisfouced3(false)}/>
              </div>
              <div className={`field ${isfocused7 ? 'field-add' : ''}`}>
                  <FaUniversity/>
                <input type="text " 
                onFocus={()=>setisfouced7(true)}
                onBlur={()=>setisfouced7(false)}
                placeholder='Enter College name'  
                className='inputfiled'/>
              </div>
              <div className={`field ${isfocused4 ? 'field-add' : ''}`}>
                <FaUserCircle/>
                <input type="text" placeholder='Enter Reg no (optional)'  
                className='inputfiled'
                onFocus={()=>setisfouced4(true)}
                onBlur={()=>setisfouced4(false)}/>
                 </div>
            <div className='field1'>
            <div className='subfield1'>
                <div className='subfield2'>
                  <div className='fieldheader'>
                    Select Role
                  </div>
                 <select name="
                 " id="" className={`options 
                  ${isfocused5 ? 'option-add' :''}`}
                 onClick={()=>setisfouced5(true)}
                 onBlur={()=>setisfouced5(false)}>
                  <option value="" >
                    User
                  </option>
                  <option value="">
                    Organizer
                  </option>
                 </select>
                 </div>
              </div>
          
              <div className='subfield1'>
                <div className='subfield2'>
                  <div className='fieldheader'>
                    Department
                  </div>
              
                 <select name="
                 " id="" className={`options ${isfocused6 ? 'option-add' :''}`}
                 onClick={()=>setisfouced6(true)}
                 onBlur={()=>setisfouced6(false)}>
                  <option value="">
                    ECE
                  </option>
                  <option value="">
                    CSE
                  </option>
                  <option value="">
                    MECHANICAL
                  </option>
                  <option value="">
                     CIVIL
                  </option>
                 </select>
                 </div>
              </div>
              </div>
              </div>
              <div className='submitbtn'>
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