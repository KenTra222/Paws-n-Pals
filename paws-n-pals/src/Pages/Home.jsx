import React from 'react'
import Form from '../Components/Form'



const Home = () => {
  return (
    <section className=' w-full h-screen grid grid-cols-12  ' >
    
    <div className='hero col-span-3 '>
            
      </div>

      {/* main contents */}
      <div className=' col-span-6 flex'>
        {/* hero */}
        <section className='   w-full flex flex-col items-center justify-center mb-44 '>

          <h1 className='text-5xl mb-2  text-emerald-900 text-center'>Paws n Pals</h1>
          <p className='text-center'>More than a pet, they're family</p>

          <div onclick="window.CommandBar.open()">Launch</div>



          <p className='w-9/12 mt-6 text-center'>a Website built by kentravious colson to show the capabilities of integrating command bar into an application</p>
        </section>
       
      {/* about section */}
        

        {/* food */}
        
        


 
      </div>


      <div className='   w-full h-full col-span-3 '>
      <section className=' flex flex-col items-center justify-evenly mt-24'>
        <h2 className='font-bold text-emerald-400 mb-12'>Wanna become a sitter</h2>  
      </section>
      <section className=' w-full  '>
        
        <Form/>
      </section>
      </div>
    </section>
  )
}
export default Home