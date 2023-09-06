import React from 'react'
import Biography from '../Components/Biography'

const About = () => {
  return (
    <section className='mt-4 px-8 mb-24 flex items-center justify-evenly w-full h-full'>

      <img src='/dogPics/doggie(two).jpg' className='w-64 h-80'/>

      <div className='flex flex-col w-8/12 h-72 '>

      <Biography/>
        
      </div>
        </section>
  )
}

export default About