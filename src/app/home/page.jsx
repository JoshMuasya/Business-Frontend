"use client"

import React from 'react';
import Link from 'next/link';

import NoteIcon from '@mui/icons-material/Note';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import ReceiptIcon from '@mui/icons-material/Receipt';
import RequestQuoteIcon from '@mui/icons-material/RequestQuote';


const page = () => {
  return (
    <div>
      {/* Main */}
      <div className='h-screen w-full flex flex-col flex-wrap justify-center justify-items-center items-center align-middle'>
        {/* body */}
        <div className='flex flex-col justify-center align-middle items-center w-full'>
          {/* Top */}
          <div className='w-3/4 h-3/5 flex flex-col md:flex-row justify-around align-middle items-center pb-7'>
            {/* Left */}
            <Link href="/home/feenotes">
              <div className='bg-thistle hover:bg-buttontext rounded-xl md:rounded-2xl l:rounded-3xl h-fit md:h-40 w-48 md:w-56 l:w-64 flex flex-col justify-center align-middle items-center text-m hover:text-s p-6 md:p-0 mb-3 md:mb-0'>
                {/* Title */}
                <h1 className='text-backblack hover:text-buttonback font-kalam font-bold'>
                  FEENOTES
                </h1>

                {/* Icon */}
                <NoteIcon 
                  className='w-10 h-10 text-backblack'
                />
              </div>
            </Link>

            {/* Right */}
            <div>
              <div className='bg-thistle hover:bg-buttontext rounded-xl md:rounded-2xl l:rounded-3xl h-fit md:h-40 w-48 md:w-56 l:w-64 flex flex-col justify-center align-middle items-center text-m hover:text-s p-6 md:p-0'>
                {/* Title */}
                <h1 className='text-backblack hover:text-buttonback font-kalam font-bold'>
                  RECEIPTS
                </h1>

                {/* Icon */}
                <ReceiptLongIcon 
                  className='w-10 h-10 text-backblack'
                />
              </div>
            </div>
          </div>

          {/* Bottom */}
          <div className='w-3/4 h-3/5 flex flex-col md:flex-row justify-around align-middle items-center pt-7'>
            <div className='bg-thistle hover:bg-buttontext rounded-3xl h-40 w-64 flex flex-col justify-center align-middle items-center text-m hover:text-s'>
              {/* Title */}
              <h1 className='text-backblack hover:text-buttonback font-kalam font-bold'>
                INVOICES
              </h1>

              {/* Icon */}
              <ReceiptIcon 
                className='w-10 h-10 text-backblack'
              />
            </div>

            {/* Right */}
            <div>
              <div className='bg-thistle hover:bg-buttontext rounded-3xl h-40 w-64 flex flex-col justify-center align-middle items-center text-m hover:text-s'>
                {/* Title */}
                <div>
                  <h1 className='text-backblack hover:text-buttonback font-kalam font-bold'>
                    FINANCIAL
                  </h1>

                  <h1 className='text-backblack hover:text-buttonback font-kalam font-bold'>
                    STATEMENT
                  </h1>
                </div>

                {/* Icon */}
                <RequestQuoteIcon
                  className='w-10 h-10 text-backblack'
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default page