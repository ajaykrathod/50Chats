import React from 'react'

function Header({setHelpCentre}) {
    const handleClick = () => {
        setHelpCentre(true)
    }
    const handleCommunity = () => {
        setHelpCentre(false)
    }
  return (
    <div className='z-10'>
        <div className='ml-[5vw] my-[3vh] '>
            <h2 className='inline mr-[3vw] pb-[6px]  text-[1.3em] border-white border-b-2 hover:border-b-2 hover:border-[#705CF6] hover:text-[#705cf6]' onClick={handleClick}> Help Centre</h2>
            <h2 className='inline  pb-[6px] text-[1.3em] border-white border-b-2 hover:border-b-2 hover:border-[#705CF6] hover:text-[#705cf6]' onClick={handleCommunity}>Community</h2>
        </div> 
        <div className='flex justify-between items-center m-auto z-10'>
            <div className='mt-[5vh] w-[15vw] h-[12vw] blur-[9vw] bg-[#DB79FE] rounded-full -z-[1]'></div>
            <img src='/assets/16.png'/>
            <div className='text-center'>
                <h1 className='font-[Roboto] text-[2em] font-[500] mb-8'>Ask Question</h1>
                <div className='rounded-full border border-[#B4B7BA] h-[6vh] py-3 pl-7 flex'>
                    <input type="text" className='border-none focus:outline-none w-[30vw]' placeholder='Search'/>
                    <img className='w-[5%]' src='/assets/Arrow 1.svg'/>
                </div>
            </div>
            <img src='/assets/9.png'/>
            <div className='mt-[5vh] w-[15vw] h-[12vw] blur-[9vw] -z-[1] bg-[#0A6783] rounded-full'/>
        </div>
    </div>
  )
}

export default Header