import React from 'react'
import Video from './Video'


const HomeHeroText = () => {
  return (
    <div className='font-[font-1] pt-5 text-center'>
        <div className='text-[9.5vw] justify-center flex items-center uppercase leading-[8vw]'>
          The spark for
        </div>
        <div className='text-[9.5vw] justify-center flex items-center uppercase leading-[8vw]'>
          all <div className='h-[7vw] w-[16vw] rounded-full -mt-5 overflow-hidden '>
                    <Video />
                </div>
          things
        </div>
        <div className='text-[9.5vw] justify-center flex items-center uppercase leading-[8vw]'>
          creative
        </div>
    </div>
  )
}

export default HomeHeroText