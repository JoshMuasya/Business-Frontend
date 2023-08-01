"use client"

import Image from 'next/image'
import React from 'react'

import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import HomeIcon from '@mui/icons-material/Home';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import NoteIcon from '@mui/icons-material/Note';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import ReceiptIcon from '@mui/icons-material/Receipt';
import RequestQuoteIcon from '@mui/icons-material/RequestQuote';

const page = () => {
  return (
    <div className=''>
      {/* topbar */}
      <nav 
        className='top-0 flex flex-row justify-between items-center align-middle p-3'
      >
        {/* Left */}
        <div 
          className='flex flex-wrap flex-row justify-center items-center align-middle'
        >
          {/* Logo */}
          <div className='pr-1 sm:pr-2'>
            <Image 
              src="/Logo.png"
              width={70}
              height={66.08}
              alt="Logo"
            />
          </div>

          {/* Title */}
          <div className='pl-2 sm:pl-4'>
            <h1>
              BUSINESS SUPPORT
            </h1>
          </div>
        </div>

        {/* Right */}
        <div
          className='flex flex-wrap flex-row justify-center items-center align-middle'
        >
          {/* Username */}
          <div className='pr-2 sm:pr-4'>
            <h1>
              Josh
            </h1>
          </div>

          {/* Logout */}
          <div className='pl-2 sm:pl-4'>
            <h1>
              LOGOUT
            </h1>
          </div>
        </div>
      </nav>
      
      {/* Main */}
      <main className='p-1 sm:p-2'>
        {/* body */}
        <div className='flex flex-col justify-around align-middle items-center'>
          {/* Top */}
          <div className='w-3/4 h-3/5 flex flex-row justify-around align-middle items-center pb-7'>
            {/* Left */}
            <div className='bg-thistle hover:bg-buttontext rounded-3xl h-48 w-80 flex flex-col justify-center align-middle items-center text-mxl hover:text-ml'>
              {/* Title */}
              <h1 className='text-backblack hover:text-buttonback font-kalam font-bold'>
                FEENOTES
              </h1>

              {/* Icon */}
              <NoteIcon 
                className='w-14 h-14 text-backblack'
              />
            </div>

            {/* Right */}
            <div>
              <div className='bg-thistle hover:bg-buttontext rounded-3xl h-48 w-80 flex flex-col justify-center align-middle items-center text-mxl hover:text-ml'>
                {/* Title */}
                <h1 className='text-backblack hover:text-buttonback font-kalam font-bold'>
                  RECEIPTS
                </h1>

                {/* Icon */}
                <ReceiptLongIcon 
                  className='w-14 h-14 text-backblack'
                />
              </div>
            </div>
          </div>

          {/* Bottom */}
          <div className='w-3/4 h-3/5 flex flex-row justify-around align-middle items-center pt-7'>
            <div className='bg-thistle hover:bg-buttontext rounded-3xl h-48 w-80 flex flex-col justify-center align-middle items-center text-mxl hover:text-ml'>
              {/* Title */}
              <h1 className='text-backblack hover:text-buttonback font-kalam font-bold'>
                INVOICES
              </h1>

              {/* Icon */}
              <ReceiptIcon 
                className='w-14 h-14 text-backblack'
              />
            </div>

            {/* Right */}
            <div>
              <div className='bg-thistle hover:bg-buttontext rounded-3xl h-48 w-80 flex flex-col justify-center align-middle items-center text-mxl hover:text-ml'>
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
                  className='w-14 h-14 text-backblack'
                />
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* bottombar */}
      <div className='bottom-0 items-center align-middle'>
        <div className='p-3 flex flex-row justify-around items-center align-middle'>
          {/* Notes */}
          <div className=''>
            <FormatListBulletedIcon 
              className='w-8 h-8 text-gray'
            />
          </div>

          {/* Home */}
          <div className=''>
            <HomeIcon 
              className='w-8 h-8 text-gray'
            />
          </div>

          {/* Calendar */}
          <div>
            <CalendarMonthIcon 
              className='w-8 h-8 text-gray'
            />            
          </div>
        </div>
      </div>
    </div>
  )
}

export default page