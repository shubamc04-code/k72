import React from 'react'
import './index.css'
import App from './App.jsx'
import ReactDom from "react-dom/client"
import { BrowserRouter } from 'react-router-dom'
import Stairs from './components/common/Stairs.jsx'
import NavContext from './context/NavContext.jsx'

ReactDom.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <Stairs> 
      <NavContext>
        <App/>
      </NavContext>
    </Stairs>
    </BrowserRouter>
  </React.StrictMode>,
)
