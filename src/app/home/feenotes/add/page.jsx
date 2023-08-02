"use client"

import React, { forwardRef, useState } from 'react';

import BusinessIcon from '@mui/icons-material/Business';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import NumbersIcon from '@mui/icons-material/Numbers';
import PersonIcon from '@mui/icons-material/Person';
import InfoIcon from '@mui/icons-material/Info';
import PaidIcon from '@mui/icons-material/Paid';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import CardMembershipIcon from '@mui/icons-material/CardMembership';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';

import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const page = () => {

  const [company_name, setcompany_name] = useState('');
  const [company_address, setcompany_address] = useState('');
  const [feenote_number, setfeenote_number] = useState('');
  const [customer_name, setcustomer_name] = useState('');
  const [reference, setreference] = useState('');
  const [total_amount, settotal_amount] = useState('');
  const [amount_paid, setamount_paid] = useState('');
  const [payment_details, setpayment_details] = useState('');
  const [sign_off, setsign_off] = useState('');

  const [open, setOpen] = useState(false);
  const [responseStatus, setResponseStatus] = useState(null);

  const Alert = forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant='filled' {...props} />;
  });

  const handleAdd = async (e) => {
    e.preventDefault();
    setOpen(true);

    try {
      const response = await fetch('http://127.0.0.1:8000/feenote/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ company_name, company_address, feenote_number, customer_name, reference, total_amount, amount_paid, payment_details, sign_off })
      });

      if (response.ok) {
        console.log('Feenote Added')
        console.log(response.ok)
        setResponseStatus(response.ok)
      } else {
        console.log('Failed')
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
        ADD FEENOTE
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
          onSubmit={handleAdd} 
          className="p-5 sm:p-7 flex flex-col justify-center align-middle items-center"
        >
          <div className="relative mb-4 sm:mb-6 w-4/5">
            {/* Company Name */}
            <div className="absolute inset-y-0 left-0 flex items-center pl-2 sm:pl-3 pointer-events-none">
              <BusinessIcon 
                aria-hidden="true"
                className="w-5 h-5 text-gray"
                fill="currentColor"
              />
            </div>
            
            <input 
              type="text" 
              id="companyname" 
              className="dark:text-gray-900 text-xs sm:text-sm rounded-lg focus:ring-blue-500 block w-full pl-8 sm:pl-10 p-2 sm:p-2.5 border-darkgray placeholder-gray text-gray" 
              placeholder="Company Name"
              value = {company_name}
              onChange={(e) => setcompany_name(e.target.value)}
            />
          </div>

          {/* Company Address */}
          <div className="relative mb-4 sm:mb-6 w-4/5">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <LocationCityIcon 
                aria-hidden="true"
                className="w-5 h-5 text-gray"
                fill="currentColor"
              />
            </div>

            <textarea 
              id="companyaddress" 
              className="dark:text-gray-900 text-xs sm:text-sm rounded-lg focus:ring-blue-500 block w-full pl-10 sm:pl-10 p-2 sm:p-2.5 border-darkgray placeholder-gray text-gray" 
              placeholder="Company Address"
              value={company_address}           
              onChange={(e) => setcompany_address(e.target.value)}
            />
          </div>

          {/* FeeNote Number */}
          <div className="relative mb-4 sm:mb-6 w-4/5">
            <div className="absolute inset-y-0 left-0 flex items-center pl-2 sm:pl-3 pointer-events-none">
              <NumbersIcon 
                aria-hidden="true"
                className="w-5 h-5 text-gray"
                fill="currentColor"
              />
            </div>
            
            <input 
              type="text" 
              id="feenotenumber" 
              className="dark:text-gray-900 text-xs sm:text-sm rounded-lg focus:ring-blue-500 block w-full pl-8 sm:pl-10 p-2 sm:p-2.5 border-darkgray placeholder-gray text-gray" 
              placeholder="Feenote Number" 
              value={feenote_number}
              onChange={(e) => setfeenote_number(e.target.value)}
            />
          </div>

          {/* Customer Name */}
          <div className="relative mb-4 sm:mb-6 w-4/5">
            <div className="absolute inset-y-0 left-0 flex items-center pl-2 sm:pl-3 pointer-events-none">
              <PersonIcon
                aria-hidden="true"
                className="w-5 h-5 text-gray"
                fill="currentColor"
              />
            </div>
            
            <input 
              type="text" 
              id="customername" 
              className="dark:text-gray-900 text-xs sm:text-sm rounded-lg focus:ring-blue-500 block w-full pl-8 sm:pl-10 p-2 sm:p-2.5 border-darkgray placeholder-gray text-gray" 
              placeholder="Customer Name" 
              value={customer_name}
              onChange={(e) => setcustomer_name(e.target.value)}              
            />
          </div>

          {/* Feenote Details */}
          <div className="relative mb-4 sm:mb-6 w-4/5">
            <div className="absolute inset-y-0 left-0 flex items-center pl-2 sm:pl-3 pointer-events-none">
              <InfoIcon
                aria-hidden="true"
                className="w-5 h-5 text-gray"
                fill="currentColor"
              />
            </div>
            
            <textarea 
              id="details" 
              className="dark:text-gray-900 text-xs sm:text-sm rounded-lg focus:ring-blue-500 block w-full pl-10 sm:pl-10 p-2 sm:p-2.5 border-darkgray placeholder-gray text-gray" 
              placeholder="Feenote Details" 
              value={reference}
              onChange={(e) => setreference(e.target.value)}              
            />
          </div>

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
                value={total_amount}
                onChange={(e) => settotal_amount(e.target.value)}                
              />
            </div>

            {/* Amount Paid */}
            <div className="relative mb-4 sm:mb-6">
              <div className="absolute inset-y-0 left-0 flex items-center pl-2 sm:pl-3 pointer-events-none">
                <PaidIcon
                  aria-hidden="true"
                  className="w-5 h-5 text-gray"
                  fill="currentColor"
                />
              </div>
              
              <input 
                type="number" 
                id="amountpaid" 
                className="dark:text-gray-900 text-xs sm:text-sm rounded-lg focus:ring-blue-500 block w-full pl-8 sm:pl-10 p-2 sm:p-2.5 border-darkgray placeholder-gray text-gray" 
                placeholder="Amount Paid"
                value={amount_paid}
                onChange={(e) => setamount_paid(e.target.value)}                
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
              placeholder="Sign Off"
              value={sign_off}
              onChange={(e) => setsign_off(e.target.value)}              
            />
          </div>

          <div className="pt-4 sm:pt-6">
            <button 
              type="submit"
              className=
              "bg-backblack text-white rounded-md sm:rounded-xl h-fit w-fit duration-300 hover:bg-buttontext hover:text-buttonback hover:duration-300">
              <p className="font-quicksand font-semibold text-sm sm:text-m px-14 py-1">
                ADD
              </p>
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default page