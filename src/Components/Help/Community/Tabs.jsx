import React from 'react'
import {AllQuestions, trendingQuestion, trendingQuestions } from "./content.js";
import LongCard from './LongCard.jsx';
import ShortCard from './ShortCard.jsx';
function Tabs() {
  return (
    <div className='w-[80vw] m-auto flex py-3 mt-10 mb-[10vh]'>
        <div id='tab-scroll' className='rounded-lg border border-[#DADBDD] w-[45vw] mr-[2vw] pb-7 '>
            <div className='flex justify-between p-6 px-[3vw]'>
                <div>
                    <h2 className='inline mr-[3vw] pb-[6px] text-[1.3em] border-white border-b-2 hover:border-b-2 hover:border-[#705CF6] hover:text-[#705cf6]'>All Questions</h2>
                    <h2 className='inline pb-[6px] text-[1.3em] border-white border-b-2 hover:border-b-2 hover:border-[#705CF6] hover:text-[#705cf6]'>Asked Questions</h2>
                </div>
                <h2 className='flex items-center justify-center text-[1.3em]'><img className='' src='/assets/sort-vertical-svgrepo-com 1.svg'/>Sort</h2>
            </div>
            <div className='mr-3 h-[150vh] overflow-auto'>
                {AllQuestions.map((values,ind)=>(
                    <LongCard
                        title={values.title}
                        key={ind}
                        content={values.content}
                        upvotes={values.upvotes}
                        replies={values.replies}
                    />
                ))}
            </div>
        </div>
        <div className='rounded-lg border border-[#DADBDD] w-[35vw] flex flex-col p-6'>
            <h2 className='flex items-center text-[1.3em] mb-8'><img className='' src='/assets/trending-up-outline-svgrepo-com 1.svg'/>Top Questions</h2>
            <div className='h-[150vh] overflow-auto'>
                {trendingQuestion.map((values,ind)=>(
                    <ShortCard
                        title={values.title}
                        key={ind}
                        content={values.content}
                    />
                ))}
            </div>
        </div>
    </div>
  )
}

export default Tabs