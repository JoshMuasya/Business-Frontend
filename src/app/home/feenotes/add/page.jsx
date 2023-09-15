"use client"

import React, { forwardRef, useEffect, useState } from 'react';

import Link from 'next/link';

import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import CardMembershipIcon from '@mui/icons-material/CardMembership';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';

import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

import useAuth from '../../auth';

const page = () => {

  const [amount, setamount] = useState('');
  const [payment_details, setpayment_details] = useState('');
  const [sign_off, setsign_off] = useState('');

  const [customers, setCustomers] = useState([]);
  const [customer, setCustomer] = useState('');
  const [customerName, setCustomerName] = useState('');

  const [feenotes, setFeenotes] = useState([]);
  
  const [latestBalance, setLatestBalance] = useState(0)

  const [open, setOpen] = useState(false);
  const [responseStatus, setResponseStatus] = useState(null);

  const [feenoteId, setFeenoteId] = useState('')
  const [showPrintButton, setShowPrintButton] = useState(false);

  const { authenticated, username } = useAuth();
  const [isLoading, setIsLoading] = useState(true);

  setTimeout(() => {
      setIsLoading(false);
      console.log('Finished loading', isLoading);

      if (!isLoading) {
          console.log('Auth', authenticated)
          if(!authenticated) {
              window.location.href = '/login';
          } else {
              setsign_off(username)
          }
      }
  }, 3000)

  useEffect(() => {
    fetch('http://127.0.0.1:8000/customer/')
    .then(response => response.json())
    .then(data => setCustomers(data))
    .catch(error => console.error('Error fetching customers details:', error));

    // Fetch Feenotes
    fetch('http://127.0.0.1:8000/feenote/')
    .then(response => response.json())
    .then(data => {
      setFeenotes(data);
    })
    .catch(error => console.error('Error fetching Feenote details:', error));
  }, []);

  const customersArray = feenotes.map(feenote => feenote.customer)

  const isCustomer = customersArray.includes(parseInt(customer))

  const Alert = forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant='filled' {...props} />;
  });

  const handleAddFeenote = async (e) => {
    e.preventDefault();
    setOpen(true);

    try {
      const response = await fetch('http://127.0.0.1:8000/feenote/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ customer, amount, payment_details, sign_off })
      });

      if (response.ok) {
        setResponseStatus(response.ok)
        setShowPrintButton(true)

        const responseData = await response.json()
        setFeenoteId(responseData.id);

        setamount('')
        setpayment_details('')
        setsign_off('')
        setCustomer('')
        setCustomerName('')
      } else {
        setResponseStatus(null)
        setShowPrintButton(false)
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
        RECORD FEENOTES
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
                The Feenote was added Successfully
              </Alert>
            ) : (
              <Alert 
                severity="error"
              >
                Failed!! The Feenote was not Added Successfully
              </Alert>
            )
          }          
        </Snackbar>

        {/* Form */}
        <form 
          onSubmit={handleAddFeenote} 
          className="p-5 sm:p-7 flex flex-col justify-center align-middle items-center"
        >
          {/* Customer Dropdown */}
          <input 
            className="dark:text-gray-900 text-xs sm:text-sm rounded-lg focus:ring-blue-500 block w-full pl-10 sm:pl-10 p-2 sm:p-2.5 border-darkgray placeholder-gray text-gray mb-4 sm:mb-6" 
            id="customer"
            placeholder='Search for a Customer'
            value={customer}
            onChange={(e) => setCustomer(e.target.value)}
          />

          {/* Dropdown */}
          <select
            className="dark:text-gray-900 text-xs sm:text-sm rounded-lg focus:ring-blue-500 block w-full pl-10 sm:pl-10 p-2 sm:p-2.5 border-darkgray placeholder-gray text-gray mb-4 sm:mb-6"
            id="customer"
            value={customer}
            onChange={
              (e) => {
                setCustomer(e.target.value);
                const selectedCustomer = customers.find(customerObj => customerObj.id === parseInt(e.target.value));
                if (selectedCustomer) {
                  setCustomerName(selectedCustomer.first_name);
                } else {
                  setCustomerName('')
                }
              }
            }
          >
            <option value=''>{customerName ? customerName : 'Select a Customer'}</option>
            {customers
              .filter(customerObj => {
                const firstName = `${customerObj.first_name}`
                return firstName.toLowerCase().includes(customer.toLowerCase())
              })
              .map(customerObj => (
                <option key={customerObj.id} value={customerObj.id}>
                  {customerObj.first_name} {customerObj.last_name}
                </option>
              ))}
          </select>

          {/* Amount */}
          <div className='flex flex-row justify-between align-middle'>
            {/* Total Amount */}
            <div className="relative mb-4 sm:mb-6 pr-2 md:pr-4 l:pr-6 xl:pr-8">
              <div className="absolute inset-y-0 left-0 flex items-center pl-2 sm:pl-3 pointer-events-none">
                <AccountBalanceIcon
                  aria-hidden="true"
                  className="w-5 h-5 text-gray"
                  fill="currentColor"
                />
              </div>
              
              <input 
                type="number" 
                id="totalamount" 
                className="dark:text-gray-900 text-xs sm:text-sm rounded-lg focus:ring-blue-500 block w-full pl-8 sm:pl-10 p-2 sm:p-2.5 border-darkgray placeholder-gray text-gray" 
                placeholder="Total Amount" 
                value={amount}
                onChange={(e) => setamount(e.target.value)}
                disabled = {latestBalance !== 0 && latestBalance !== null}
              />
            </div>
          </div>

          {/* Payment Details */}
          <div className="relative mb-4 sm:mb-6 w-4/5">
            <div className="absolute inset-y-0 left-0 flex items-center pl-2 sm:pl-3 pointer-events-none">
              <CardMembershipIcon
                aria-hidden="true"
                className="w-5 h-5 text-gray"
                fill="currentColor"
              />
            </div>
            
            <textarea 
              id="paymentdetails" 
              className="dark:text-gray-900 text-xs sm:text-sm rounded-lg focus:ring-blue-500 block w-full pl-10 sm:pl-10 p-2 sm:p-2.5 border-darkgray placeholder-gray text-gray" 
              placeholder="Payment Details"
              value={payment_details}
              onChange={(e) => setpayment_details(e.target.value)}              
            />
          </div>

          {/* Sign Off */}
          <div className="relative mb-4 sm:mb-6 w-4/5">
            <div className="absolute inset-y-0 left-0 flex items-center pl-2 sm:pl-3 pointer-events-none">
              <AssignmentIndIcon
                aria-hidden="true"
                className="w-5 h-5 text-gray"
                fill="currentColor"
              />
            </div>
            
            <textarea 
              id="signoff" 
              className="dark:text-gray-900 text-xs sm:text-sm rounded-lg focus:ring-blue-500 block w-full pl-10 sm:pl-10 p-2 sm:p-2.5 border-darkgray placeholder-gray text-gray" 
              placeholder={sign_off}
              value={sign_off}
              disabled          
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

            {/* Print Button */}
            {showPrintButton && (
              <Link
                href={`/home/feenotes/view/${feenoteId}`}
                className=
                "bg-backblack text-white rounded-md sm:rounded-xl h-fit w-fit duration-300 hover:bg-buttontext hover:text-buttonback hover:duration-300">
                <p className="font-quicksand font-semibold text-sm sm:text-m px-14 py-1">
                  PRINT
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