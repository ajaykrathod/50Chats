import React from 'react'
import { NavLink } from 'react-router-dom'

function Footer() {
  return (
    <div className='w-[100vw] text-center flex flex-col items-center pb-[5vh] bg-[#F8F6F7]'>
        <h2 className='text-[#711755] text-[1.6em] font-bold my-[3vh]'>50Chats</h2>
        <h3 className='text-[#1F2730] text-[1.2em] font-[400] w-[25vw] mb-[5vh] max-[550px]:w-[80vw] text-center'>Effortlessly build powerful no-code chatbots. Boost sales & revolutionize customer engagement. Achieve extraordinary results today!</h3>  
        <ul className='list-none w-[25vw] flex justify-around text-[#1F2730] text-[1.2em] font-[590] max-[550px]:w-[80vw]'>
            <li className='inline'><NavLink to={'/'}>Pricing</NavLink></li>
            <li className='inline'><NavLink to={'/'}>Features</NavLink></li>
            <li className='inline'><NavLink to={'/'}>FAQs</NavLink></li>
        </ul>
        <h3 className='text-[#1F2730] text-[1.2em] font-[590] w-[25vw] my-[5vh] max-[550px]:w-[80vw]'>Email us at <a href='mailto:admin@steksolutions.net' className='text-[#705CF6]'>admin@steksolutions.net </a> </h3>  
        <h3 className='text-[#1F2730] text-[1.2em] font-[590] w-[25vw] max-[550px]:w-[80vw]'>© 2023 50chats, All Rights Reserved.</h3>  
    </div>
  )
}

export default Footer