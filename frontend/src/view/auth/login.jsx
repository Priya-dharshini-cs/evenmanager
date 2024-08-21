import {useState} from 'react'
import './login.css'
import { FaEnvelope, FaLock,  FaUser,  } from 'react-icons/fa'
import { useRecoilState } from 'recoil'
import authatom from '../atoms/authatom'


const Login = () => {
  const [isfocused2, setisfouced2] = useState(false)
  const [isfocused3, setisfouced3] = useState(false)

  const [auth,setauth]=useRecoilState(authatom)
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
              onFocus={() => setisfouced2(true)}
              onBlur={() => setisfouced2(false)} />
          </div>
          <div className={`field2 ${isfocused3 ? 'field-add2' : ''}`}>
            <FaLock />
            <input type="password" placeholder='Enter Password'
              className='inputfiled2'
              onFocus={() => setisfouced3(true)}
              onBlur={() => setisfouced3(false)} />
          </div>
        </div>
  


      <div className='submitbtn1'>
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