import React,{useState} from 'react'

const Form = () => {
 const [confirmed, setConfirmed] = useState(false)
  return (
     
         <div className='   bg-zinc-200 flex items-center justify-center text-lg '>
          <section className='mx-auto w-full'>

           {!confirmed && <form className='px-4 py-2 mx-auto flex flex-col items-center justify-center  '>
            
            <div className='mb-3 flex flex-col w-full' >
              <label  htmlFor="fullName"> Name</label>
              <input 
                className='border border-gray-400 rounded-md' 
                type="text" 
                placeholder='John Doe' 
                 />
            </div>

            <div className='mb-3 flex flex-col w-full'>
              <label htmlFor="phoneNumber" >Email</label>
              <input 
                name='phoneNumber'
                className="w-full border border-gray-400 rounded-md" 
                type="text" 
                placeholder='Johndoe@email.com' />
            </div>

            <div className='mb-3 flex flex-col w-full'>
              <label htmlFor="phoneNumber" >Phone Number</label>
              <input 
                name='phoneNumber'
                className="w-full border border-gray-400 rounded-md" 
                type="text" 
                placeholder='(123)-345-6789' 
           
                maxLength={16}/>
            </div>

             
                  <button 
                      className='bg-emerald-800 rounded-md text-white hover:bg-black  w-full h-12 mt-8 text-2xl' 
                      type="submit" 
                   
                      onClick={() => {setConfirmed(!confirmed) }}>Submit</button>
            </form> }

            {confirmed && <ThankYou setConfirmed={setConfirmed} />}
                  
            </section>
          </div>
  )
}

export default Form

function ThankYou( props ) {
    return(
      <section className='flex mx-auto flex-col justify-center items-center '>
        {/* <img src={ } className='h-20 w-20 mb-2'/> */}
        <h1 className='text-black text-5xl my-4'>Thank You</h1>
        <p className='text-gray-600'>We've added your details and will contact you soon</p>
        <button className='bg-violet-900 text-white w-full h-11 rounded-lg mt-4 ' onClick={() => setConfirmed(false)}>CONTINUE</button>
      </section>
    )
  }