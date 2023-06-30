"use client"

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { useState } from "react";

import EmailIcon from '@mui/icons-material/Email';
import PasswordIcon from '@mui/icons-material/Password';
import PersonIcon from '@mui/icons-material/Person';

export default function Home() {

  const router = useRouter();

  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirm_password, setconfirm_password] = useState('');
  const [error, setError] = useState('');

  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://127.0.0.1:8000/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, email, password, confirm_password })
      });

      if (response.ok) {
        console.log('Logged in')
        router.push('/login')
      } else if (response.status === 417) {
        console.log('Passwords do not match');
        setError("Passwords do not match")
      } else if (response.status === 410) {
        console.log('Username already exists');
        setError("Username already exists")
      } else if (response.status === 409) {
        console.log('Email already exists');
        setError("Email already exists")
      } else if (response.status === 403) {
        console.log('Email and Password fields cannot be empty');
        setError("Email and Password fields cannot be empty")
      } else {
        console.log('Failed to log in');
        setError("Failed to Log in");
      }

    } catch (error) {
      console.error('Signup error:', error);
      setError("Try Again")
    }
  }

  return (
    <main className='flex flex-wrap justify-center flex-col text-center content-center p-3 sm:p-5'>

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
        <h1 className="text-s sm:text-ml font-kalam pb-4 sm:pb-6">REGISTRATION FORM</h1>
      </div>

      {/* Main Body */}
      <div className="w-4/5 sm:w-1/2 h-fit bg-white rounded-xl sm:rounded-3xl">
        {/* Top */}
        <form onSubmit={handleSignup} className="p-5 sm:p-7">
          <div className="relative mb-4 sm:mb-6">
            <div className="absolute inset-y-0 left-0 flex items-center pl-2 sm:pl-3 pointer-events-none">
              <PersonIcon 
                aria-hidden="true"
                className="w-5 h-5 text-gray"
                fill="currentColor"
              />
            </div>
            
            {/* Username */}
            <input 
              type="text" 
              id="username" 
              className="dark:text-gray-900 text-xs sm:text-sm rounded-lg focus:ring-blue-500 block w-full pl-8 sm:pl-10 p-2 sm:p-2.5 border-darkgray placeholder-gray text-gray" 
              placeholder="name@digimatic.com" 
              value = {username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          {/* Email */}
          <div className="relative mb-6">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
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

          {/* Password */}
          <div className="relative mb-4 sm:mb-6">
            <div className="absolute inset-y-0 left-0 flex items-center pl-2 sm:pl-3 pointer-events-none">
              <PasswordIcon 
                aria-hidden="true"
                className="w-5 h-5 text-gray"
                fill="currentColor"
              />
            </div>
            
            {/* Password */}
            <input 
              type="password" 
              id="password" 
              className="dark:text-gray-900 text-xs sm:text-sm rounded-lg focus:ring-blue-500 block w-full pl-8 sm:pl-10 p-2 sm:p-2.5 border-darkgray placeholder-gray text-gray" 
              placeholder="password" 
              value = {password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          {/* Confirm Password */}
          <div className="relative mb-4 sm:mb-6">
            <div className="absolute inset-y-0 left-0 flex items-center pl-2 sm:pl-3 pointer-events-none">
              <PasswordIcon 
                aria-hidden="true"
                className="w-5 h-5 text-gray"
                fill="currentColor"
              />
            </div>
            
            {/* Password */}
            <input 
              type="password" 
              id="password" 
              className="dark:text-gray-900 text-xs sm:text-sm rounded-lg focus:ring-blue-500 block w-full pl-8 sm:pl-10 p-2 sm:p-2.5 border-darkgray placeholder-gray text-gray" 
              placeholder="password" 
              value = {confirm_password}
              onChange={(e) => setconfirm_password(e.target.value)}
            />
          </div>

          <div className="pt-4 sm:pt-6">
            <button 
              type="submit"
              className=
              "bg-backblack text-white rounded-md sm:rounded-xl h-fit w-fit duration-300 hover:bg-buttontext hover:text-buttonback hover:duration-300">
              <p className="font-quicksand font-semibold text-sm sm:text-m px-14 py-1">
                REGISTER
              </p>
            </button>
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
          <div className="p-3 sm:p-5 flex flex-wrap flex-row justify-center">
            {/* Signup */}
            <div>
              <Link href="/login">
                <p className="text-backblack text-xs sm:text-s">
                  Have an account?
                </p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
