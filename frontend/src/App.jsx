import { Navigate, Route, Routes, useLocation, useNavigate } from "react-router-dom"
import Auth from "./view/auth/auth"
import Homepage from "./view/components/Homepages/homepage"
import { useRecoilValue } from "recoil"
import useratom from "./view/atoms/useratom"
import Eventcomponent from "./view/components/Homepages/eventcomponent"
import EventDetail from "./view/components/eventpages/eventpage"
import Navbar from "./view/components/Homepages/navbar"
import Profilemodel from "./view/components/eventpages/profilemodel"
import Eventcreate from "./view/components/eventpages/eventcreate"
import ProfileUpdate from "./view/components/eventpages/profileupdate"

import { useEffect } from "react"
import Adminevents from "./view/admin/adminevents"
import Adminupdate from "./view/admin/adminupdate"


function App() {

 const user1=useRecoilValue(useratom)
 let user=user1?.token


//  let user='sivashankar'
 const location=useLocation()
 const checkpath=location.pathname === '/auth' 

 const navigate=useNavigate()
 let token=JSON.parse(localStorage.getItem('token'))

//  console.log(token?.expiresAt < new Date().getTime(),user )
 useEffect(()=>{
 if (token)
  {
   if(token?.expiresAt < new Date().getTime())
   {
    localStorage.removeItem('token')
    navigate('/auth')
   }
  } 
  navigate('/auth')
 },[])



  return (
    <div style={{position:"relative"}}>
    {/* <div>
      <EventPage />
    </div> */}
    {
      !checkpath && <Profilemodel/>
    }

    <div>
    { 
     !checkpath &&  <Navbar/>
   }
      </div>   
     
     <Routes>
      <Route path="/" element={user ? <Homepage/> : 
    <Navigate to={'/auth'}/>}/>
      <Route path="/auth" element={!user ? <Auth/>
      : <Navigate to={'/'}/>}/>
      <Route path="/:id/eventdetails" 
      element={user ? <EventDetail/> : 
        <Navigate  to={'/auth'}/>
       } />

       <Route path="/event-create" 
      element={user ? <Eventcreate/> : 
        <Navigate  to={'/auth'}/>
       } />
         <Route path="/profile" 
      element={user ? <ProfileUpdate/> : 
        <Navigate  to={'/auth'}/>
       } 
       />
    
  {
    user?.orgnaizer &&
    <Route path="/admin/event-pages"
    element={user ? <Adminevents/> : 
      <Navigate  to={'/auth'}
      />
     } 
  />
    }
    {    user?.orgnaizer &&
<Route path="/admin/:id/edit"
    element={user ? <Adminupdate/> : 
      <Navigate  to={'/auth'}
      />
     } 
  />
  }

     </Routes>
    </div>
  )
}

export default App
