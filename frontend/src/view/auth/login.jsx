import {useState} from 'react'
import './login.css'
import { FaEnvelope, FaLock,  FaUser,  } from 'react-icons/fa'
import { useRecoilState } from 'recoil'
import authatom from '../atoms/authatom'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import useratom from '../atoms/useratom'


const Login = () => {
  const [isfocused2, setisfouced2] = useState(false)
  const [isfocused3, setisfouced3] = useState(false)

  const [auth,setauth]=useRecoilState(authatom)
  const [email,setemail]=useState('')
  const [password,setpassword]=useState('')
  const navigate=useNavigate()
  const [user1,setuser]=useRecoilState(useratom)
  let user=user1?.token
  const handlelogin=async()=>{
    try{
     const res=await fetch('/api/user/login',{
      method:'POST',
      headers:{
        'content-type':'application/json'
      },
      body:JSON.stringify({
        email:email,
        password:password
      })
     })
     const data=await res.json()

     if(data?.error)
     {
      toast.error(data?.error)
      return
     }
     let token=JSON.stringify({
      token:data,
      expiresAt:new Date().getTime() + 2 * 24 * 60 *60 *1000 
     })
     setuser(JSON.parse(token))
     localStorage.setItem('token',token)
     toast.success('Logged in successfully')
    }
    catch(err)
    {
      console.log(err)
    }
  }

  return (
    <div className='background1'>
      <div className='opacitycheck'>
      </div>
      <div className='container1'>
        <div className='header1'>
          Login
        </div>
        <div className='fieldcontainer1'>
          <div className={`field2 ${isfocused2 ? 'field-add2' : ''}`}>
            <FaEnvelope />
            <input type="email" placeholder='Enter email'
              className='inputfiled2'
              value={email}
              onChange={(e)=>setemail(e.target.value)}
              onFocus={() => setisfouced2(true)}
              onBlur={() => setisfouced2(false)} />
          </div>
          <div className={`field2 ${isfocused3 ? 'field-add2' : ''}`}>
            <FaLock />
            <input type="password" placeholder='Enter Password'
              className='inputfiled2'
              value={password}
              onChange={(e)=>setpassword(e.target.value)}
              onFocus={() => setisfouced3(true)}
              onBlur={() => setisfouced3(false)} />
          </div>
        </div>
  


      <div className='submitbtn1'
      onClick={handlelogin}
      >
        Submit
      </div>
      <div className='show-bar'>
        <div className='show-bar1'>
          Don't have an account?
        </div>
        <div className='show-bar2'
        onClick={()=>setauth("Register")}>
          Sign up
        </div>
      </div>
      </div>
    </div>

  )
}

export default Login