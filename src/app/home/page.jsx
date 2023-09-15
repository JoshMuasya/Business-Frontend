"use client"

import React, { useEffect, useState } from 'react';
import Link from 'next/link';

import NoteIcon from '@mui/icons-material/Note';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import ReceiptIcon from '@mui/icons-material/Receipt';
import RequestQuoteIcon from '@mui/icons-material/RequestQuote';

import useAuth from './auth';
import { useRouter } from 'next/navigation'

const page = () => {

  const { authenticated, username } = useAuth();
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState('')

  setTimeout(() => {
    setIsLoading(false);
    console.log('Finished loading', isLoading);

    if (!isLoading) {
      console.log('Auth', authenticated)
      if(!authenticated) {
        window.location.href = '/login';
        return null
      } else {
        setUser(username)
      }
    }
  }, 3000)

  console.log(user)

  return (
    <div>
      {authenticated && (
        <div>
          {/* Main */}
          <div className='h-fit w-full flex flex-col flex-wrap justify-center justify-items-center items-center align-middle mt-28 mb-8'>
            {/* body */}
            <div className='flex flex-col justify-center align-middle items-center w-full h-fit'>
              {/* Top */}
              <div className='w-3/4 h-3/5 flex flex-col md:flex-row justify-around align-middle items-center pb-5'>
                {/* Left */}
                <Link href="/home/customers">
                  <div className='bg-thistle hover:bg-buttontext rounded-xl md:rounded-2xl l:rounded-3xl h-fit md:h-40 w-48 md:w-56 l:w-64 flex flex-col justify-center align-middle items-center text-m hover:text-s p-6 md:p-0 mb-3 md:mb-0'>
                    {/* Title */}
                    <h1 className='text-backblack hover:text-buttonback font-kalam font-bold'>
                      CUSTOMERS
                    </h1>

                    {/* Icon */}
                    <NoteIcon 
                      className='w-10 h-10 text-backblack'
                    />
                  </div>
                </Link>

                {/* Right */}
                <div>
                  <Link 
                    href='/home/financialstatements'
                    className='bg-thistle hover:bg-buttontext rounded-xl md:rounded-2xl l:rounded-3xl h-fit md:h-40 w-48 md:w-56 l:w-64 flex flex-col justify-center align-middle items-center text-m hover:text-s p-6 md:p-0'
                  >
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
                  </Link>
                </div>

              </div>

              {/* Middle */}
              <div className='w-3/4 h-3/5 flex flex-col md:flex-row justify-around align-middle items-center'>
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
                <Link href="/home/receipts">
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
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default page