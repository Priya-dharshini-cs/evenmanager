import { Route, Routes } from "react-router-dom"
import Auth from "./view/auth/auth"


function App() {


  return (
    <>
     <Routes>
      <Route path="/auth" element={<Auth/>}/>
     </Routes>
    </>
  )
}

export default App
