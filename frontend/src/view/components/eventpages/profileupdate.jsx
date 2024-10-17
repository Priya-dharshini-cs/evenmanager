import React, { useEffect, useState } from 'react'
import './eventcreate.css'
import img from '../../../assets/eventbgimg1.webp'
import { toast } from 'react-toastify'
import { useRecoilState } from 'recoil'
import useratom from '../../atoms/useratom'
import { useNavigate } from 'react-router-dom'

const ProfileUpdate = () => {
  
  const [details,setdetails]=useState({
    name:'',
    email:'',
    password:''
  })
  let navigate=useNavigate()
  const [user1,setuser]=useRecoilState(useratom)
  let user=user1?.token
  console.log(user?.name)
  
  useEffect(()=>{

    if(user?.name)
    {
      setdetails({...details,name:user?.name})
    }
    if(user?.email)
    {
      setdetails({...details,email:user?.email})
    }
        

  },[user])


  const profileupdate=async()=>{
    try{
      const res=await fetch(`/api/user/${user?._id}`,{
        method:'PUT',
        headers:{
          'content-type':'application/json'
        },
        body:JSON.stringify(details)
      })
      const data=await res.json()
      if(data?.error)
      {
        toast.error(data?.error)
        return
      }
      let token=JSON.stringify({
        token:data,
        expiresAt:user1?.expiresAt
      })
      toast.success(data?.success)
      setuser(JSON.parse(token))
      localStorage.setItem('token',token)
      toast.success('LoggedIn Sucecessfully')
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
        Update Profile
      </div>
      <div className='detailcolumn1'>
      <div className='columnfield1'>
            <div className='columnlabel'>
             Name   
            </div>
            <input type="text" className='columninput'
            placeholder='Enter name'
            value={details?.name}
            onChange={(e)=>setdetails({
              ...details,
              name:e.target.value
            })}
            />
        </div>

        <div className='columnfield1'>
            <div className='columnlabel1'>
             Email   
            </div>
            <input type="email" className='columninput'
            placeholder='Enter email'
            value={details?.email}
            onChange={(e)=>setdetails({
              ...details,
              email:e.target.value
            })}
            />
        </div>     
           
        <div className='columnfield1'>
            <div className='columnlabel1'>
             Password
            </div>
            <input type="password" className='columninput'
            placeholder='Enter password'
            value={details?.password}
            onChange={(e)=>setdetails({
              ...details,
              password:e.target.value
            })}
            />
        </div>
        <button className='createbtn1'
        onClick={profileupdate}>
        Submit
      </button>
      </div>
     </div>
    </div>
  )
}

export default ProfileUpdate