import React from 'react'
import Strip from './Strip'
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <>
        <div className='w-[100vw] flex flex-row justify-between px-[10vw] h-[10vh] items-center z-10'>  
            <div className='absolute left-[-1vw] top-[-1vw] w-[15vw] h-[12vw] blur-[5vw] bg-[#DCE7FD] rounded-full -z-[1]'></div>
            <h2 className='text-[#711755] text-[1.6em] font-bold'><NavLink to={'/'}>50Chats</NavLink></h2>
            <ul className='list-none w-[40vw] flex justify-around text-[#51575E] text-[1.2em]'>
                <li className='inline border-b-2 border-[#fff] hover:border-[#705CF6]'><NavLink to={'/'}>Pricing</NavLink></li>
                <li className='inline hover:border-b-2 hover:border-[#705CF6]'><NavLink to={'/'}>Features</NavLink></li>
                <li className='inline hover:border-b-2 hover:border-[#705CF6]'><NavLink to={'/'}>FAQs</NavLink></li>
                <li className='inline hover:border-b-2 hover:border-[#705CF6]'><NavLink to={'/help'}>Help</NavLink></li>
            </ul>
            <div className='absolute right-[10vw] top-[-8vw] w-[12vw] h-[12vw] blur-[8vw] bg-[#283783] -z-[1] rounded-full'></div>
            <div className=' text-[#51575E] text-[1.2em]'>
                <button className='mr-4'>Sign in</button>
                <button>Sign Up</button>
            </div>
        </div>
    </>
  )
}

export default Navbar