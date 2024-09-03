import React, { useContext, useState } from 'react'
import './navbar.css'
import { useNavigate } from 'react-router-dom'
import { eventcontext } from './eventcontext'
const Navbar = () => {
    
  const [bar1, setbar1] = useState(false)
  const [bar2, setbar2] = useState(false)
  const [bar3, setbar3] = useState(false)
  const [bar4, setbar4] = useState(false)
  const navigate=useNavigate()
  const {isopen,setisopen}=useContext(eventcontext)

  const handleprofilechange=()=>{
    setbar4(true)
    setisopen(true)
  }

  const handleprofileunhover=()=>{
    setbar4(false)
    // setisopen(false)
  }

  return (
    <div className='header'>
    <div className='headername'>
      MyEventO
    </div>
    <div className='headernavbar'>
      <div className='headernavbarelem'>
        <div
          onMouseOver={() => setbar1(true)}
          onMouseLeave={() => setbar1(false)}
          onClick={()=>navigate('/')}
        >
          Home
        </div>
        <div className={`bar ${bar1 ? "baractive" : ""}`}>
        </div>
      </div>
      <div className='headernavbarelem'>
        <div onMouseOver={() => setbar2(true)}
          onMouseLeave={() => setbar2(false)}>
          Events
        </div>
        <div className={`bar ${bar2 ? "baractive" : ""}`}>
        </div>
      </div>
      <div className='headernavbarelem'>
        <div onMouseOver={() => setbar3(true)}
          onMouseLeave={() => setbar3(false)}>
          Trends
        </div>
        <div className={`bar ${bar3 ? "baractive" : ""}`}>
        </div>
      </div>
      <div className='headernavbarelem'>
        <div
          onMouseOver={handleprofilechange}
          // onClick={handleprofilechange}
          onMouseLeave={handleprofileunhover}>
          Profile
        </div>
        <div className={`bar ${bar4 ? "baractive" : ""}`}>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Navbar