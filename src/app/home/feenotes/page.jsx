"use client"

import React from 'react';

import Link from 'next/link';

import LibraryAddIcon from '@mui/icons-material/LibraryAdd';
import NoteIcon from '@mui/icons-material/Note';
import DynamicFeedIcon from '@mui/icons-material/DynamicFeed';
import DeleteSweepIcon from '@mui/icons-material/DeleteSweep';

const page = () => {
  return (
    <div className='mt-28 p-5 flex flex-col justify-center align-middle items-center text-center'>
      {/* Title */}
      <div className='font-kalam font-bold text-ml sm:text-mxl md:text-l pb-8'>
        FEENOTES
      </div>

      {/* Body */}
      <div className='flex flex-col justify-center justify-items-center items-center align-middle md:w-full'>
        {/* Top */}
        <div className='flex flex-col md:flex-row w-3/4 md:w-full h-3/5 justify-around align-middle items-center md:pb-12'>
          {/* Left */}
          <Link 
            href="/home/feenotes/add"
            className='flex flex-col bg-thistle hover:bg-buttontext rounded-xl md:rounded-2xl l:rounded-3xl h-fit w-48 md:w-56 justify-center align-middle items-center p-6 mb-3 md:mb-0 text-s hover:text-sm'>
            {/* Title */}
            <div className='text-backblack hover:text-buttonback font-kalam font-bold'>
              ADD
            </div>

            {/* Icon */}
            <div>
              <LibraryAddIcon 
                className='w-10 h-10 text-backblack'
              />
            </div>
          </Link>

          {/* Right */}
          <Link 
            href="/home/feenotes/view"
            className='flex flex-col justify-center align-middle items-center bg-thistle hover:bg-buttontext rounded-xl md:rounded-2xl l:rounded-3xl h-fit w-48 md:w-56 l:w-64 p-6 mb-3 md:mb-0 text-s hover:text-sm'>
            {/* Title */}
            <div className='text-backblack hover:text-buttonback font-kalam font-bold'>
              VIEW
            </div>

            {/* Icon */}
            <div>
              <NoteIcon 
                className='w-10 h-10 text-backblack'
              />              
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default page