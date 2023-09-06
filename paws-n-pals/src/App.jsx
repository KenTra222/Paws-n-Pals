import { useState } from 'react'
import Form from './Components/Form'

import './App.css'
import Treats from './Components/Treats'

function App({title, description, imgUrl, index}) {
  

  return (
    <div className='flex flex-col overflow-hidden h-screen '>
      <header className=' bg-emerald-700 flex justify-between w-full p-6 top-0 left-0 sticky z-50 text-white px-12'>
        <p>Paws n Pals</p>

        <ul className='flex justify-evenly'>
          <li>Home</li>
          <li>About</li>
          <li>Food</li>
          <li>Adopt a Pal</li>
          <li>Sitter</li>
        </ul>

      </header>
      <section className=' w-full h-full grid grid-cols-12 overflow-hidden ' >
    
      <div className='hero w-full h-full col-span-3 overflow-hidden'>
              
        </div>

        {/* main contents */}
        <div className='w-full h-full col-span-6 flex flex-col items-center justify-evenly overflow-y-scroll  pt-32'>
          {/* hero */}
          <section className='mt-20 '>

            <h1 className='text-5xl mb-2 mt-5 text-emerald-700'>Paws n Pals</h1>
            <p>More than a pet, they're family</p>
          </section>

        {/* about section */}
          <section className='mt-4 px-8 mb-10 '>
            <h2 className='text-3xl'>About PnP</h2>
            <p>Paws N Pals is a family-owned business that is passionate about providing the best 
              nutrition and care to your furry family members. We believe that pets are more than 
              just animals; they are an integral part of our lives and deserve to be treated with 
              love, respect, and compassion. Our mission is to help pet owners provide their pets 
              with the best possible care by offering high-quality pet food, supplements, and other 
              pet care products. We understand that every pet is unique, and we work closely with our 
              customers to provide personalized recommendations that meet their pets’ specific needs. 
              At Paws N Pals, we are committed to helping you keep your pets healthy, happy, and thriving</p>
          </section>

          {/* food */}
          <section className='w-full px-8'>
            <h2 className='text-3xl'>Our Edible products</h2>
            <Treats/>
          </section>


          <section>

            <h2 className='text-3xl mt-28'>Meet the pups</h2>
            <p>policy</p>  
          </section>
        </div>

        <div className='   w-full h-full col-span-3 '>
        <section className=' flex flex-col justify-evenly'>
          <h2>Wanna become a sitter</h2>  
        </section>
        <section className=' w-full mt-8'>
          
          <Form/>
        </section>
        </div>
      </section>
 
    </div>
  )
}

export default App
