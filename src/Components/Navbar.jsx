import React from 'react'
import Strip from './Strip'

function Navbar() {
  return (
    <>
        <div className='w-[100vw] flex flex-row justify-between px-[10vw] h-[10vh] items-center'>
            <h2 className='text-[#711755] text-[1.6em] font-bold'>50Chats</h2>
            <ul className='list-none w-[40vw] flex justify-around text-[#51575E] text-[1.2em]'>
                <li className='inline'>Pricing</li>
                <li className='inline'>Features</li>
                <li className='inline'>FAQs</li>
                <li className='inline'>Help</li>
            </ul>
            <div className=' text-[#51575E] text-[1.2em]'>
                <button className='mr-4'>Sign in</button>
                <button>Sign Up</button>
            </div>
        </div>
        <Strip/>
    </>
  )
}

export default Navbar