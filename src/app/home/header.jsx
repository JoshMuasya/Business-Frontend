"use client"

import React, { useState } from 'react';

import Link from 'next/link';
import Image from 'next/image';

import Cookies from 'js-cookie';

import useAuth from './auth';

const Header = () => {

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
            } else {
                setUser(username)
            }
        }
    }, 3000)

    // Handle Logout
    const handleLogout = () => {
        Cookies.remove('authToken');
        window.location.href = '/login';
    };

  return (
    <div>
        {/* Nav */}
        <div className='fixed left-0 top-0 w-full h-fit z-10 ease-in duration-300 '>
            <div className='m-auto flex flex-col-reverse md:flex-row justify-between items-center p-4 text-white'>
            {/* Left */}
            <div className='flex flex-row justify-center items-center align-middle'>
                {/* Logo */}
                <Link href="/home" className='pr-1'>
                <Image 
                    src="/Logo.png"
                    width={68}
                    height={64.08}
                    alt="Logo"
                />
                </Link>

                {/* Name */}
                <div className='pl-1 l:pl-3'>
                <h1 className='font-quicksand text-sm md:text-ml font-bold'>
                    BUSINESS SUPPORT
                </h1>
                </div>
            </div>

            {/* Right */}
            <div className='flex flex-row justify-end w-full md:w-fit'>
                {/* Username */}
                <h1 className='text-sm md:text-ml font-kalam pr-1 md:pr-2'>
                    {user}
                </h1>

                {/* Logout */}
                <h1 
                    className='text-sm md:text-ml font-kalam pl-1 md:pl-2 cursor-pointer'
                    onClick={handleLogout}
                >
                    LOGOUT
                </h1>
            </div>
            </div>        
        </div>
    </div>
  )
}

export default Header