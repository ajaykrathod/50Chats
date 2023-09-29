import React from 'react'

function ShortCard({title,content}) {
  return (
    <div className='w-[30vw] mx-auto border border-[#DADBDD] p-4 rounded-t-lg rounded-b-lg flex flex-col flex-shrink max-[550px]:w-[70vw]'>
      <h2 className='text-[#1F2730] text-[1.4em] font-medium'>
        {title}
      </h2>
      <h3 className='font-[400] text-[#51575E] text-[1.3em] py-3'>
        {content}
      </h3>
    </div>
  )
}

export default ShortCard