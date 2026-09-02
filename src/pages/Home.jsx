import React from 'react'
import Video from '../components/home/Video'
import HomeHeroText from '../components/home/HomeHeroText'
import HomeBottumText from '../components/home/HomeBottumText'

const Home = () => {
  return (
    <div >
      <div className='h-screen w-screen fixed'>
        <Video/>
      </div>
      <div className='h-screen w-screen relative overflow-hidden pb-5 flex flex-col justify-between'>
        <HomeHeroText/>
        <HomeBottumText/>
      </div>
    </div>
  )
}

export default Home
