import { Route, Routes } from "react-router-dom"
import Auth from "./view/auth/auth"
import Homepage from "./view/components/Homepages/homepage"


function App() {


  return (
    <>
     <Routes>
      <Route path="/" element={<Homepage/>}/>
      <Route path="/auth" element={<Auth/>}/>
     </Routes>
    </>
  )
}

export default App
