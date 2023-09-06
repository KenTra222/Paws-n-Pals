import React from 'react'

export const dogs = [ 
   
  {
    title:'sparky',
    imgUrl: '/dogPics/doggie(two).jpg',
    description:' description'
  },{
    title:'Neion',
    imgUrl: '/dogPics/doggie(three).jpg',
    description:' description'
  },
  {
    title:'Killer',
    imgUrl: '/dogPics/doggie(four).jpg',
    description:'description'
},
]

const Adopt = () => {
  return (
  <section  className='overflow-y-scroll mt-12'>

    <h2 className='text-3xl text-emerald-700 mb-12'>Meet the pups</h2>
  
    <div className='w-full h-full grid grid-cols-12 grid-rows-2'>

    {dogs.map((dog,id) =>(
      <div className=' col-span-4 '>
            <div className='mt-5 flex flex-col items-center '>

            <div className='w-56 h-56'>
                <img src={dog.imgUrl} className='w-56 h-56'/>
            </div>

            <div className='flex flex-col items-start px-10 py-6 w-56 bg-emerald-600'>
                
            <h4 className='text-center'> {dog.title} </h4>

            <p> {dog.description} </p>
            </div>

            </div>
            </div>
            ) )}
            </div>
  </section>
 
  )
}

export default Adopt