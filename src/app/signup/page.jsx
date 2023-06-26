"use client"

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { useState } from "react";

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
    <main className='flex flex-wrap justify-center flex-col text-center content-center p-5'>

      {/* Logo */}
      <div className="flex items-center flex-col pb-4">
        <Image 
          src="/Logo.png"
          width={77.42}
          height={75}
          alt="Logo"
        />        
      </div>

      {/* Title */}
      <div className="flex flex-col pt-4 pb-4">
        <h1 className="text-ml font-kalam pb-6">REGISTRATION FORM</h1>
      </div>

      {/* Main Body */}
      <div className="w-1/2 h-fit bg-white rounded-3xl">
        {/* Top */}
        <form onSubmit={handleSignup} className="p-7">
          <div className="relative mb-6">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg>
            </div>
            
            {/* Username */}
            <input 
              type="text" 
              id="input-group-1" 
              className="dark:bg-gray-50 border dark:border-gray-300 dark:text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  bg-gray-700 border-gray-600 placeholder-gray-400 text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
              placeholder="Username"
              value = {username}
              onChange = {(e) => setUsername(e.target.value)}
            />
          </div>

          {/* Email */}
          <div className="relative mb-6">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg>
            </div>
            <input 
              type="email" 
              id="input-group-1" 
              className="dark:bg-gray-50 border dark:border-gray-300 dark:text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  bg-gray-700 border-gray-600 placeholder-gray-400 text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
              placeholder="name@digimatic.com"
              value = {email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          {/* Password */}
          <div className="flex mb-6">
            <span className="inline-flex items-center px-3 text-sm dark:text-gray-900 dark:bg-gray-200 border border-r-0 dark:border-gray-300 rounded-l-md bg-gray-600 text-gray-400 border-gray-600">
              @
            </span>
            <input 
              type="password" 
              id="website-admin" 
              className="rounded-none rounded-r-lg dark:bg-gray-50 border dark:text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm dark:border-gray-300 p-2.5  bg-gray-700 border-gray-600 placeholder-gray-400 text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          {/* Confirm Password */}
          <div className="flex">
            <span className="inline-flex items-center px-3 text-sm dark:text-gray-900 dark:bg-gray-200 border border-r-0 dark:border-gray-300 rounded-l-md bg-gray-600 text-gray-400 border-gray-600">
              @
            </span>
            <input 
              type="password" 
              id="website-admin" 
              className="rounded-none rounded-r-lg dark:bg-gray-50 border dark:text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm dark:border-gray-300 p-2.5  bg-gray-700 border-gray-600 placeholder-gray-400 text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
              placeholder="Confirm Password"
              value={confirm_password}
              onChange={(e) => setconfirm_password(e.target.value)}
            />
          </div>

          <div className="pt-6">
            <button 
              type="submit"
              className=
              "bg-backblack text-white rounded-xl h-fit w-fit duration-300 hover:bg-buttontext hover:text-buttonback hover:duration-300">
              <p className="font-quicksand font-semibold text-m px-32 py-1">
                REGISTER
              </p>
            </button>
          </div>
        </form>

        {/* Bottom */}
        <div className="h-1/3 bg-thistle rounded-b-3xl flex flex-wrap flex-col">
          {/* Errors */}
          {
            error && (
              <div className="p-5">
                <p className="text-errors">
                  {error}
                </p>
              </div>
            )
          }

          {/* Bottom */}
          <div className="p-5 flex flex-wrap flex-row justify-center">
            {/* Signup */}
            <div>
              <Link href="/login">
                <p className="text-backblack">
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
