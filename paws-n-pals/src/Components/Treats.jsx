import React from 'react'


export const treats = [ 
    {
        title:'treat0',
        imgUrl: '/public/treats/Treat0.jpg',
        description:'  description'
    },
    {
        title:'treat1',
        imgUrl: '/public/treats/treat1.jpg',
        description:'  description'
    },
    {
        title:'treat1',
        imgUrl: '/public/treats/treat2.jpg',
        description:' description'
    }, 
]

const Treats = ({imgUrl,description,title, id}) => {
  return (
 
          <section className=' w-full h-full grid grid-cols-12 grid-rows-2 '>

            {treats.map((treat,id) =>(
            <div className=' col-span-4 '>
            <div className='mt-5 flex flex-col items-center '>

            <div className='w-56 h-56'>
                <img src={treat.imgUrl} className='w-56 h-56'/>
            </div>

            <div className='flex flex-col items-start px-10 py-6 w-56 pt-2 bg-emerald-600'>
                
            <h4 className='text-center text-slate-300'> {treat.title} </h4>

            <p className='  text-slate-300'>  {treat.description} </p>
            </div>

            </div>
            </div>
            ) )}



            </section>

 
  )
}

export default Treats