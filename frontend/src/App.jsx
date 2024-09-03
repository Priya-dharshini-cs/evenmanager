import { Navigate, Route, Routes, useLocation } from "react-router-dom"
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


function App() {

 const user=useRecoilValue(useratom)
 const location=useLocation()
 const checkpath=location.pathname === '/auth' 

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
      <Route path="/auth" element={user ? <Auth/>
      : <Navigate to={'/'}/>}/>
      <Route path="/eventdetails" 
      element={user ? <EventDetail/> : 
        <Navigate  to={'/auth'}/>
       } />
       <Route path="/event-register" 
      element={user ? <Eventcreate/> : 
        <Navigate  to={'/auth'}/>
       } />
         <Route path="/profile" 
      element={user ? <ProfileUpdate/> : 
        <Navigate  to={'/auth'}/>
       } />
     </Routes>
    </div>
  )
}

export default App
