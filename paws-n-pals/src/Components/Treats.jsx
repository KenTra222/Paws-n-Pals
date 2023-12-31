import React from 'react'


export const treats = [ 
    {
        title:'BoneKakes',
        imgUrl: '/treats/Treat0.jpg',
        description:'  description'
    },
    {
        title:'Nibblers',
        imgUrl: '/treats/treat1.jpg',
        description:'  description'
    },
    {
        title:'Stickies',
        imgUrl: '/treats/treat2.jpg',
        description:' description'
    }, 
    {
        title:'flat bites',
        imgUrl: '/treats/treat6.jpg',
        description:'  description'
    },
    {
        title:'Nibblers colors',
        imgUrl: '/treats/treat4.jpg',
        description:'  description'
    },
    {
        title:'paw bites',
        imgUrl: '/treats/treat5.jpg',
        description:' description'
    }, 
]

const Treats = ({imgUrl,description,title, id}) => {
  return (
 
          <section className=' w-full h-full grid grid-cols-12 grid-rows-2 pb-24 '>

            {treats.map((treat,id) =>(
            <div className=' col-span-4 '>
            <div className='mt-5 flex flex-col items-center '>

            <div className='w-56 h-56'>
                <img src={treat.imgUrl} className='w-56 h-56'/>
            </div>

            <div className='flex flex-col items-start px-10 py-12 w-56 pt-2 bg-emerald-600'>
                
            <h4 className='text-center text-slate-300 font-bold mt-6 mb-4'> {treat.title} </h4>

            <p className='  text-slate-300'>  {treat.description} </p>
            </div>

            </div>
            </div>
            ) )}



            </section>

 
  )
}

export default Treats