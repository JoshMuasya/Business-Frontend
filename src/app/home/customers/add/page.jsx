"use client"

import React, { forwardRef, useState } from 'react';

import Link from 'next/link';

import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';

import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const page = () => {

  const [open, setOpen] = useState(false);
  const [responseStatus, setResponseStatus] = useState(null);

  const [first_name, setfirst_name] = useState('');
  const [last_name, setlast_name] = useState('');
  const [email, setemail] = useState('');
  const [phone_number, setphone_number] = useState('');

  const [showAddPaymentButton, setShowAddPaymentButton] = useState(false)

  const Alert = forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant='filled' {...props} />;
  });

  const handleAdd = async (e) => {
    e.preventDefault();
    setOpen(true);

    try {
      const response = await fetch('http://127.0.0.1:8000/customer/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ first_name, last_name, email, phone_number })
      });

      if (response.ok) {
        setResponseStatus(response.ok)
        setShowAddPaymentButton(true)

        setfirst_name('')
        setlast_name('')
        setemail('')
        setphone_number('')
      } else {
        setResponseStatus(null)
        setShowAddPaymentButton(false)
      }
    } catch (error) {
      console.error('Adding Error:', error);
    }
  }

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  }

  return (
    <div className='flex flex-col justify-center align-middle items-center'>
      {/* Title */}
      <div className='mt-28 p-6 text-center font-kalam text-s md:text-m l:text-ml font-semibold'>
        ADD CUSTOMER
      </div>

      {/* Body */}
      <div className='bg-white h-fit w-4/5 rounded-xl sm:rounded-3xl pb-2 mb-12'>

        {/* SnackBar */}
        <Snackbar
          open = {open}
          autoHideDuration={3000}
          onClose={handleClose}
        >
          {
            responseStatus === true ? (
              <Alert 
                onClose={handleClose} 
                severity="success"
                sx={{ width: "100%" }}
              >
                The Customer was added Successfully
              </Alert>
            ) : (
              <Alert 
                severity="error"
              >
                Failed!! The Customer was not Added Successfully
              </Alert>
            )
          }          
        </Snackbar>

        {/* Form */}
        <form 
          onSubmit={handleAdd} 
          className="p-5 sm:p-7 flex flex-col justify-center align-middle items-center"
        >
          <div className="relative mb-4 sm:mb-6 w-4/5">
            {/* First Name */}
            <div className="absolute inset-y-0 left-0 flex items-center pl-2 sm:pl-3 pointer-events-none">
              <PersonIcon
                aria-hidden="true"
                className="w-5 h-5 text-gray"
                fill="currentColor"
              />
            </div>
            
            <input 
              type="text" 
              id="firstname" 
              className="dark:text-gray-900 text-xs sm:text-sm rounded-lg focus:ring-blue-500 block w-full pl-8 sm:pl-10 p-2 sm:p-2.5 border-darkgray placeholder-gray text-gray" 
              placeholder="First Name"
              value = {first_name}
              onChange={(e) => setfirst_name(e.target.value)}
            />
          </div>

          {/* Last Name */}
          <div className="relative mb-4 sm:mb-6 w-4/5">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <PersonIcon 
                aria-hidden="true"
                className="w-5 h-5 text-gray"
                fill="currentColor"
              />
            </div>

            <input 
              id="lastname" 
              className="dark:text-gray-900 text-xs sm:text-sm rounded-lg focus:ring-blue-500 block w-full pl-10 sm:pl-10 p-2 sm:p-2.5 border-darkgray placeholder-gray text-gray" 
              placeholder="Last Name"
              value={last_name}           
              onChange={(e) => setlast_name(e.target.value)}
            />
          </div>

          {/* Email */}
          <div className="relative mb-4 sm:mb-6 w-4/5">
            <div className="absolute inset-y-0 left-0 flex items-center pl-2 sm:pl-3 pointer-events-none">
              <EmailIcon 
                aria-hidden="true"
                className="w-5 h-5 text-gray"
                fill="currentColor"
              />
            </div>
            
            <input 
              type="text" 
              id="email" 
              className="dark:text-gray-900 text-xs sm:text-sm rounded-lg focus:ring-blue-500 block w-full pl-8 sm:pl-10 p-2 sm:p-2.5 border-darkgray placeholder-gray text-gray" 
              placeholder="Email" 
              value={email}
              onChange={(e) => setemail(e.target.value)}
            />
          </div>

          {/* Phone Number */}
          <div className="relative mb-4 sm:mb-6 w-4/5">
            <div className="absolute inset-y-0 left-0 flex items-center pl-2 sm:pl-3 pointer-events-none">
              <LocalPhoneIcon
                aria-hidden="true"
                className="w-5 h-5 text-gray"
                fill="currentColor"
              />
            </div>
            
            <input 
              type="text" 
              id="phonenumber" 
              className="dark:text-gray-900 text-xs sm:text-sm rounded-lg focus:ring-blue-500 block w-full pl-8 sm:pl-10 p-2 sm:p-2.5 border-darkgray placeholder-gray text-gray" 
              placeholder="Phone Number" 
              value={phone_number}
              onChange={(e) => setphone_number(e.target.value)}              
            />
          </div>

          <div className="w-full pt-4 sm:pt-6 flex flex-col sm:flex-row justify-around">
            <button 
              type="submit"
              className=
              "bg-backblack text-white rounded-md sm:rounded-xl h-fit w-fit duration-300 hover:bg-buttontext hover:text-buttonback hover:duration-300">
              <p className="font-quicksand font-semibold text-sm sm:text-m px-14 py-1">
                ADD
              </p>
            </button>

            {showAddPaymentButton && (
              <Link
                href="/home/feenotes/add"
                className=
                "bg-backblack text-white rounded-md sm:rounded-xl h-fit w-fit duration-300 hover:bg-buttontext hover:text-buttonback hover:duration-300">
                <p className="font-quicksand font-semibold text-sm sm:text-m px-14 py-1">
                  RECORD FEENOTE
                </p>
              </Link>
            )}
          </div>
        </form>
      </div>
    </div>
  )
}

export default page