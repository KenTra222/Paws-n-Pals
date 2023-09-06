import React from 'react'
import Form from '../Components/Form'

const Sitter = () => {
  return (
    <div className='w-8/12 mx-auto my-0 flex flex-col justify-evenly'>
      <h2 className='mt-12 text-3xl text-emerald-900'>Want to become a sitter?</h2>
      <p className='mt-4 mb-12'>Want to join our sitter program? just type in your info and we'll add you to our screening list</p>
      <Form/>
    </div>
  )
}

export default Sitter