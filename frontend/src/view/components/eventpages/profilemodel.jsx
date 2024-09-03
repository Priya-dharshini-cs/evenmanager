import React, { useContext } from 'react'
import { eventcontext } from '../Homepages/eventcontext'
import './profilemodel.css'
import { FaClosedCaptioning, FaCross, FaCrosshairs, FaEnvelope, FaUniversity, FaUser, FaUserCircle, FaXingSquare } from 'react-icons/fa'
import { Navigate, useNavigate } from 'react-router-dom'

const Profilemodel = () => {
    const {isopen,setisopen}=useContext(eventcontext)
    const navigate=useNavigate()
    console.log(isopen)
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
                            Priyadharshini
                        </div>
                     </div>
                    <div className='profilesubhead'>
                    <FaEnvelope/>
                     <div>
                        priyadharashini@gmail.com
                     </div>
                    </div >
                    <div className='profilesubhead'>
                        <FaUniversity/>
                        <div>
                            Aarupdadi Veedu Instuite of Technology
                        </div>
                    </div>
                    <div className='profilesubhead'>
                        <FaUserCircle/>
                        <div>
                          3502110544
                        </div>
                    </div>
                    <div>
                    </div>
                   </div>
                   <div className='profilebtns'>
                     <button  
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
                </div>
            )
        }
    </div>
  )
}

export default Profilemodel