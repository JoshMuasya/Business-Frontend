"use client"

import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation";
import { useState, useEffect } from 'react';

import EmailIcon from '@mui/icons-material/Email';
import PasswordIcon from '@mui/icons-material/Password';

import { LoadingButton } from '@mui/lab';

import Cookies from "js-cookie";

export default function Home() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [pageLoad, setPageLoad] = useState(false)

  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();

    setIsLoading(true);
    setPageLoad(true)

    try {
      const response = await fetch('http://127.0.0.1:8000/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        const data = await response.json();

        Cookies.set('authToken', data.token, { secure: true });

      } else if (response.status === 404) {
        console.log('Email Not Found');
        setError("Email Not Found")
      } else if (response.status === 401) {
        console.log('Credentials do not Match');
        setError("Credentials don't Match")
      } else if (response.status === 403) {
        console.log('Email and Password fields cannot be empty');
        setError("Email and Password fields cannot be empty")
      } else {
        console.log('Failed to log in');
        setError("Failed to Log in");
      }
    } catch (error) {
      console.error('Login error:', error);
      setError("Try Again");
    } finally {
      setIsLoading(false);
      setPageLoad(false)

      if (!error) {
        window.location.href = '/home';
      }
    }
  };

  return (
    <main className='flex flex-wrap justify-center align-middle flex-col text-center content-center p-3 sm:p-5'>

      {/* Logo */}
      <div className="flex items-center flex-col pb-2 sm:pb-4">
        <Image 
          src="/Logo.png"
          width={77.42}
          height={75}
          alt="Logo"
        />        
      </div>

      {/* Title */}
      <div className="flex flex-col pt-2 pb-2 sm:pt-4 sm:pb-4">
        <h1 className="text-s sm:text-ml font-kalam pb-4 sm:pb-6">LOGIN FORM</h1>
      </div>

      {/* Main Body */}
      <div className="w-4/5 sm:w-1/2 h-fit bg-white rounded-xl sm:rounded-3xl">
        {/* Top */}
        <form onSubmit={handleLogin} className="p-5 sm:p-7">
          <div className="relative mb-4 sm:mb-6">
            <div className="absolute inset-y-0 left-0 flex items-center pl-2 sm:pl-3 pointer-events-none">
              <EmailIcon 
                aria-hidden="true"
                className="w-5 h-5 text-gray"
                fill="currentColor"
              />
            </div>
            <input 
              type="email" 
              id="email" 
              className="dark:text-gray-900 text-xs sm:text-sm rounded-lg focus:ring-blue-500 block w-full pl-8 sm:pl-10 p-2 sm:p-2.5 border-darkgray placeholder-gray text-gray" 
              placeholder="name@digimatic.com" 
              value = {email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="relative mb-4 sm:mb-6">
            <div className="absolute inset-y-0 left-0 flex items-center pl-2 sm:pl-3 pointer-events-none">
              <PasswordIcon 
                aria-hidden="true"
                className="w-5 h-5 text-gray"
                fill="currentColor"
              />
            </div>
            <input 
              type="password" 
              id="password" 
              className="dark:text-gray-900 text-xs sm:text-sm rounded-lg focus:ring-blue-500 block w-full pl-8 sm:pl-10 p-2 sm:p-2.5 border-darkgray placeholder-gray text-gray" 
              placeholder="password" 
              value = {password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="pt-6 sm:pt-6">
            <LoadingButton             
              type="submit"
              onClick={handleLogin}
              className=
              "bg-backblack text-white rounded-md sm:rounded-xl h-fit w-fit duration-300 hover:bg-buttontext hover:text-buttonback hover:duration-300"

              loadingPosition="start" 
              loading={isLoading}
            >
              <p className="font-quicksand font-semibold text-sm sm:text-m px-14 py-1">
                LOGIN
              </p>
            </LoadingButton>
          </div>
        </form>

        {/* Bottom */}
        <div className="h-1/3 bg-thistle rounded-b-xl sm:rounded-b-3xl flex flex-wrap flex-col">
          {/* Errors */}
          {
            error && (
              <div className="p-3 sm:p-5">
                <p className="text-errors text-sm sm:text-m font-quicksand">
                  {error}
                </p>
              </div>
            )
          }

          {/* Bottom */}
          <div className="p-3 sm:p-5 flex flex-wrap flex-col sm:flex-row  justify-center">
            {/* Signup */}
            <div className="sm:pr-12">
              <Link href="/signup">
                <p className="text-backblack text-xs sm:text-s">
                  Don't have an account?
                </p>
              </Link>
            </div>

            {/* Forgot Password */}
            <div className="sm:pl-12">
              <Link href="/reset">
                <p className="text-backblack text-xs sm:text-s">
                  Forgot Password?
                </p>
              </Link>
            </div>
          </div>

        </div>
      </div>
    </main>
  )
}
