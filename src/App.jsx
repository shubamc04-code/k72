import React from 'react'
import {Route, Routes} from 'react-router-dom'
import Home from './pages/Home'
import Agence from './pages/Agence'
import Projects from './pages/Projects'
import Navbar from './components/Navigation/Navbar'
import FullScreenNav from './components/Navigation/FullScreenNav'
import NavbarProvider from './context/NavContext'

const App = () => {
  return (
    <NavbarProvider>
      <div>
        <Navbar/>
        <FullScreenNav/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/agence" element={<Agence/>}/>
          <Route path="/projects" element={<Projects/>}/>
        </Routes>
      </div>
    </NavbarProvider>
  )
}

export default App