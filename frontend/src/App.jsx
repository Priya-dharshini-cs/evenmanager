import { Navigate, Route, Routes } from "react-router-dom"
import Auth from "./view/auth/auth"
import Homepage from "./view/components/Homepages/homepage"
import { useRecoilValue } from "recoil"
import useratom from "./view/atoms/useratom"
import Eventcomponent from "./view/components/Homepages/eventcomponent"
import EventDetail from "./view/components/eventpages/eventpage"


function App() {

 const user=useRecoilValue(useratom)
  return (
    <>
    {/* <div>
      <EventPage />
    </div> */}
     <Routes>
      <Route path="/" element={user ? <Homepage/> : 
    <Navigate to={'/auth'}/>}/>
      <Route path="/auth" element={user ? <Auth/>
      : <Navigate to={'/'}/>}/>
      <Route path="/eventdetails" 
      element={user ? <EventDetail/> : 
        <Navigate  to={'/auth'}/>
       } />
     </Routes>
    </>
  )
}

export default App
