import React from 'react'


export const treats = [ 
    {
        title:'treat0',
        imgUrl: '/public/treats/Treat0.jpg',
        description:'this is a sample description'
    },
    {
        title:'treat1',
        imgUrl: '/public/treats/treat1.jpg',
        description:'this is a sample description'
    },
    {
        title:'treat1',
        imgUrl: '/public/treats/treat2.jpg',
        description:'this is a sample description'
    },{
        title:'treat1',
        imgUrl: '/public/treats/treat3.jpg',
        description:'this is a sample description'
    },
    {
        title:'treat1',
        imgUrl: '/public/treats/treat4.jpg',
        description:'this is a sample description'
    },{
        title:'treat1',
        imgUrl: '/public/treats/treat5.jpg',
        description:'this is a sample description'
    },
]

const Treats = ({imgUrl,description,title, id}) => {
  return (
 
          <section className=' w-full h-64 grid grid-cols-12 grid-rows-2'>

            {treats.map((treat,id) =>(
            <div className=' col-span-4 bg-orange-700 text-green-300'>
            <div >

            <div className='w-24 h-24'>
                <img src={treat.imgUrl}/>
            </div>

            <h4> {treat.title} </h4>

            <p> {treat.description} </p>

            </div>
            </div>
            ) )}



            </section>

 
  )
}

export default Treats