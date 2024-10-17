import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {BrowserRouter} from 'react-router-dom'
import {ToastContainer} from 'react-toastify'
import "react-toastify/dist/ReactToastify.css";
import { RecoilRoot } from 'recoil'
import Eventcontext from './view/components/Homepages/eventcontext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <BrowserRouter>
   <RecoilRoot>
    <Eventcontext>
      <ToastContainer/>
      <App />
    </Eventcontext>
   </RecoilRoot>
    </BrowserRouter>
  </React.StrictMode>,
)
