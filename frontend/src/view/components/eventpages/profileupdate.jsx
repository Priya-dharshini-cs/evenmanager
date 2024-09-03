import React from 'react'
import './eventcreate.css'
import img from '../../../assets/eventbgimg1.webp'

const ProfileUpdate = () => {
  return (
    <div className='eventcreatecontainer'>
     <div className='eventcreateimg'>
        <img src={img} alt="" />
     </div>
     <div className='eventcreatecontent'>
      <div className='eventcreatheader'>
        Update Profile
      </div>
      <div className='detailcolumn1'>
      <div className='columnfield1'>
            <div className='columnlabel'>
             Name   
            </div>
            <input type="text" className='columninput'
            placeholder='Enter name'/>
        </div>

        <div className='columnfield1'>
            <div className='columnlabel1'>
             Email   
            </div>
            <input type="email" className='columninput'
            placeholder='Enter email'/>
        </div>     
           
        <div className='columnfield1'>
            <div className='columnlabel1'>
             Password
            </div>
            <input type="password" className='columninput'
            placeholder='Enter password'/>
        </div>
        <button className='createbtn1'>
        Submit
      </button>
      </div>
     </div>
    </div>
  )
}

export default ProfileUpdate