import { useState, useEffect } from 'react'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Outlet,
  Route,
  RouterProvider,
  Link
} from "react-router-dom";
import './App.css'

import Home from './Pages/Home'
import About from './Pages/About'
import Adopt from './Pages/Adopt'
import Food from './Pages/Food'
import Sitter from './Pages/Sitter'

import { init } from 'commandbar';
init('9a6d16ff');


function App({title, description, imgUrl, index, children}) {
  
  useEffect(() => {
    const loggedInUserId = '12345'; // example
    window.CommandBar.boot(loggedInUserId, {}, {
      formFactor: {
        type: 'inline',
        rootElement: 'commandbar-inline-root'
      }
    });
    

    return () => {
      window.CommandBar.shutdown();
    }
  }, []);


  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Root/>}>
        <Route index element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/food' element={<Food/>}/>
        <Route path='/adopt' element={<Adopt/>}/>
        <Route path='/sitter' element={<Sitter/>}/>

      </Route>
    )
  );
  

  return (
    
    <div className='flex flex-col w-full h-screen'>
      <button onclick="window.CommandBar.open()">Launch</button>

        <RouterProvider router={router} />
        

    </div>
  )
}

export default App

const Root = () => {
  return(
    <>
    <header className=' bg-emerald-700 flex justify-between w-full p-6 top-0 left-0 sticky z-50 text-white px-12'>
    <p className='text-2xl'>Paws n Pals</p>
    <div className='flex justify-evenly text-white '>
          <Link to='/' className='mr-4'>Home</Link>
          <Link to='/about' className='mr-4'>About</Link>
          <Link to='/food' className='mr-4'>Food</Link>
          <Link to='/Adopt' className='mr-4'>Adopt a pet</Link>
          <Link to='/Sitter' className='mr-4'>Sitter</Link>
    </div>
  </header>
    
    <div>
      <Outlet/>
    </div>
    </>
  )
}
