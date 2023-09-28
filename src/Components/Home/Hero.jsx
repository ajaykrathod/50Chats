import React from 'react'
import Strip from '../Strip'

function Hero() {
  return (
    <>
      <Strip/>
      <div className='w-[55vw] m-auto mt-[4vh] text-center flex flex-col justify-center items-center '>
          <h1 className='text-[#51575E] text-[3em] font-bold'>Supercharge Sales and Customer Engagement with Our No-Code Chatbot Builder for Business Growth!</h1>
          <h3 className='text-[#83878C] text-[1.6em] mx-[5vw] mt-[3vh]'>50chats helps effortlessly create powerful chatbots with its intuitive drag-and-drop interface. Customize every detail and revolutionize customer engagement. Start achieving extraordinary results today!</h3>
          <button className='rounded-full bg-[#705CF6] text-white text-[1.3em] w-[10vw] h-[5vh] mt-[3vh]'>Get Started</button>
          <h1 className='text-[#51575E] text-[2.6em] font-bold mx-[5vw] mt-[7vh]'>Unlock Business Success With Our <span className='text-[#705CF6]'>Powerful Features </span> and Drive Your Success to the Next Level!</h1>
          <div className='h-[5px] w-[7vw] bg-[#51575E] mt-[1vh] '></div>
      </div>
    </>
  )
}

export default Hero