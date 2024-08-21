import { Navigate, Route, Routes } from "react-router-dom"
import Auth from "./view/auth/auth"
import Homepage from "./view/components/Homepages/homepage"
import { useRecoilValue } from "recoil"
import useratom from "./view/atoms/useratom"


function App() {

 const user=useRecoilValue(useratom)
  return (
    <>
     <Routes>
      <Route path="/" element={user ? <Homepage/> : 
    <Navigate to={'/auth'}/>}/>
      <Route path="/auth" element={!user ? <Auth/>
      : <Navigate to={'/'}/>}/>
     </Routes>
    </>
  )
}

export default App
