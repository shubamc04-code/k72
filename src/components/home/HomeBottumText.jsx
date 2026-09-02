import React from 'react'
import { Link } from 'react-router-dom'

const HomeBottumText = () => {
  return (
    <div className="font-[font-2] flex items-center justify-center gap-2">
     <Link className="text-[6.5vw]  hover:border-[#D3FD50] hover:text-[#D3FD50] border-5 leading-[5.5vw] pt-3 px-10 border-white rounded-full  uppercase" to="/projects">Projects</Link>
      <Link className="text-[6.5vw] hover:border-[#D3FD50] hover:text-[#D3FD50]  border-5 leading-[5.5vw] pt-3  border-white rounded-full px-10 uppercase" to="/agence">Agence</Link>
    </div>
  )
}

export default HomeBottumText
