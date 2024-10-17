import React, { createContext, useRef, useState } from 'react'

export const eventcontext=createContext()

const Eventcontext = ({children}) => {
  
    const [isopen,setisopen]=useState(false)
    const changeref=useRef(null)
    const trendref=useRef(null)
    const [events,setevents]=useState([])
    return (
    <eventcontext.Provider value={{isopen,setisopen,
    changeref,trendref,events,setevents}}>
      {children}
    </eventcontext.Provider>
  )
}

export default Eventcontext