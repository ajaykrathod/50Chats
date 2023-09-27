import React from 'react'

function Footer() {
  return (
    <div className='w-[100vw] text-center flex flex-col items-center h-[40vh] bg-[#F8F6F7]'>
        <h2 className='text-[#711755] text-[1.6em] font-bold my-[3vh]'>50Chats</h2>
        <h3 className='text-[#1F2730] text-[1.2em] font-[400] w-[20vw] mb-[5vh]'>Effortlessly build powerful no-code chatbots. Boost sales & revolutionize customer engagement. Achieve extraordinary results today!</h3>  
        <ul className='list-none w-[25vw] flex justify-around text-[#1F2730] text-[1.2em] font-[590]'>
            <li className='inline'>Pricing</li>
            <li className='inline'>Features</li>
            <li className='inline'>FAQs</li>
        </ul>
        <h3 className='text-[#1F2730] text-[1.2em] font-[590] w-[20vw] my-[5vh]'>Email us at <a href='mailto:admin@steksolutions.net' className='text-[#705CF6]'>admin@steksolutions.net </a> </h3>  
        <h3 className='text-[#1F2730] text-[1.2em] font-[590] w-[20vw]'>© 2023 50chats, All Rights Reserved.</h3>  
    </div>
  )
}

export default Footer