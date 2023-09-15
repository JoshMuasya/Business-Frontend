"use client"

import React from 'react';

import Link from 'next/link';

import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import HomeIcon from '@mui/icons-material/Home';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

const Footer = () => {
  return (
    <div>
        {/* Bottom */}
        <div className='fixed left-0 bottom-0 w-full z-10 ease-in duration-300'>
            <div className='p-3 flex flex-row h-12 justify-around items-center align-middle'>
                {/* Notes */}
                <div className=''>
                <FormatListBulletedIcon 
                    className='w-8 h-8 hover:w-10 hover:h-10 text-buttontext hover:text-lightgray'
                />
                </div>

                {/* Home */}
                <Link 
                    className=''
                    href='/home'
                >
                <HomeIcon 
                    className='w-8 h-8 hover:w-10 hover:h-10 text-buttontext hover:text-lightgray'
                />
                </Link>

                {/* Calendar */}
                <div>
                <CalendarMonthIcon 
                    className='w-8 h-8 hover:w-10 hover:h-10 text-buttontext hover:text-lightgray'
                />            
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default Footer