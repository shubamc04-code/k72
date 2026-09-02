import React from 'react'
import './index.css'
import App from './App.jsx'
import ReactDom from "react-dom/client"
import { BrowserRouter } from 'react-router-dom'
import Stairs from './components/common/Stairs.jsx'

ReactDom.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <Stairs> 
        <App/>
    </Stairs>
    </BrowserRouter>
  </React.StrictMode>,
)
