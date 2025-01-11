import React from 'react';
import { DiRedis } from 'react-icons/di';
import { RiReactjsLine } from 'react-icons/ri';
import { SiMongodb } from 'react-icons/si';
import { TbBrandNodejs } from 'react-icons/tb';

const Technologies = () => {
  return (
    <div className='border-b border-neutral-800 pb-24'>
      <h1 className='my-20 text-center text-4xl'>Technologies</h1>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <div className="rounded-2xl border-4 border-neutral-300 p-4">
            <RiReactjsLine className='text-7xl text-cyan-400'/>
        </div>
        <div className="rounded-2xl border-4 border-neutral-300 p-4">
            <TbBrandNodejs className='text-7xl text-green-500'/>
        </div>
        <div className="rounded-2xl border-4 border-neutral-300 p-4">
            <SiMongodb className='text-7xl text-green-500'/>
        </div>
        <div className="rounded-2xl border-4 border-neutral-300 p-4">
            <DiRedis className='text-7xl text-red-400'/>
        </div>
      </div>
    </div>
  )
}

export default Technologies