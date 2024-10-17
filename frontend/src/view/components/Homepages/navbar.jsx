import React, { useContext, useState } from 'react'
import './navbar.css'
import { useNavigate } from 'react-router-dom'
import { eventcontext } from './eventcontext'
import { FaChartLine, FaCreativeCommons, FaCreativeCommonsNd, FaCreativeCommonsPdAlt, FaEvernote, FaHome, FaTransgender, FaUser } from 'react-icons/fa'
import { MdEvent } from 'react-icons/md'

const Navbar = () => {
    
  const [bar1, setbar1] = useState(false)
  const [bar2, setbar2] = useState(false)
  const [bar3, setbar3] = useState(false)
  const [bar4, setbar4] = useState(false)
  const navigate=useNavigate()
  const {isopen,setisopen,changeref,
    trendref
  }=useContext(eventcontext)

  const handleprofilechange=()=>{
    setbar4(true)
    setisopen(true)
  }

  const checkscreen=''

  const handleprofileunhover=()=>{
    setbar4(false)
    // setisopen(false)
  }

  const handlechange=(ref)=>{

    ref?.current?.scrollIntoView({behavior:"smooth",
      // block:"center"
    })

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
          onMouseLeave={() => setbar2(false)}
          onClick={()=>handlechange(changeref)}
          >
          Events
        </div>
        <div className={`bar ${bar2 ? "baractive" : ""}`}>
        </div>
      </div>
      <div className='headernavbarelem'>
        <div onMouseOver={() => setbar3(true)}
          onMouseLeave={() => setbar3(false)}
          onClick={()=>handlechange(trendref)}
          >
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

  {
    !checkscreen &&
    <div className='headernavbar1'>
    <FaHome 
   size={'22'}
    onClick={()=>navigate('/')}
    cursor={'pointer'}
    />
    <MdEvent
    size={'23'}
    cursor={'pointer'}
    onClick={()=>handlechange(changeref)}
 
    />
    <FaChartLine
    size={'19'}
    cursor={'pointer'}
    onClick={()=>handlechange(trendref)}
 
 />
    <FaUser
    size={'19'}
    cursor={'pointer'}
    onMouseOver={handleprofilechange}
    onMouseLeave={handleprofileunhover}
 />
    </div>
  }

  </div>
  )
}

export default Navbar