import React from 'react'

function LongCard({title,content,upvotes,replies}) {
  return (
    <div className='w-[40vw] m-auto border border-[#DADBDD] p-4 rounded-t-lg rounded-b-lg max-[550px]:w-[70vw]'>
      <h2 className='text-[#1F2730] text-[1.4em] font-medium'>
        {title}
      </h2>
      <h3 className='font-[400] text-[#51575E] text-[1.3em] py-3'>
        {content}
      </h3>
      <div className='flex pt-3'>
        <h3 className='mr-4'>
          {upvotes} Upvotes
        </h3>
        <h3>
          {replies} Replies
        </h3>
      </div>
    </div>
  )
}

export default LongCard