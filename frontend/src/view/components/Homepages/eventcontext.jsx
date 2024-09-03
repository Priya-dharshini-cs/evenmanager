import React, { createContext, useState } from 'react'

export const eventcontext=createContext()

const Eventcontext = ({children}) => {
  
    const [isopen,setisopen]=useState(false)
    return (
    <eventcontext.Provider value={{isopen,setisopen}}>
      {children}
    </eventcontext.Provider>
  )
}

export default Eventcontext