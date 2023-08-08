"use client"

import React, { useState, useEffect } from 'react'

import Link from 'next/link';

const ViewFeenote = ({ params }) => {

  const [data, setData] = useState([]);

  const { id } = params;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://127.0.0.1:8000/feenote/');
        const jsonData = await response.json();
        setData(jsonData);
      } catch {
        console.error('Error fetching data', data);
      }
    };

    fetchData();
  }, []);

  const selectedItem = data.find(item => item.id === parseInt(id));

  // Company Name
  const company_name = selectedItem ? selectedItem.company_name : '';

  // Company Address
  const company_address = selectedItem ? selectedItem.company_address : '';

  // Feenote Number
  const feenote_number = selectedItem ? selectedItem.feenote_number : '';

  // Customer Name
  const customer_name = selectedItem ? selectedItem.customer_name : '';

  // Transaction Detail
  const reference = selectedItem ? selectedItem.reference : '';

  // Total Amount
  const total_amount = selectedItem ? selectedItem.total_amount : '';

  // Amount Paid
  const amount_paid = selectedItem ? selectedItem.amount_paid : '';

  // Balance
  const balance = total_amount - amount_paid;

  // Payment Details
  const payment_details = selectedItem ? selectedItem.payment_details : '';

  // Sign Off
  const sign_off = selectedItem ? selectedItem.sign_off : '';

  // Date Created
  const date_created = selectedItem ? selectedItem.created_at : '';

  return (
    <div className='w-full mt-28 mb-7 p-5 flex flex-col justify-center align-middle items-center text-center'>
      {/* Title */}
      <div className='font-kalam font-bold text-s sm:text-ml pb-8'>
        { company_name } Feenote
      </div>

      {/* Body */}
      <div className='w-4/5 sm:w-1/2 h-fit bg-white rounded-xl sm:rounded-3xl flex flex-col align-middle text-center items-center px-5 py-2'>
        {/* Company Name */}
        <div className='flex flex-row align-middle items-center text-center text-backblack pb-2'>
          <h1 className='pr-2 font-quicksand font-extrabold text-sm'>
            Company Name:
          </h1>
          <h3 className='font-kalam text-sx '>
            { company_name }
          </h3>
        </div>

        {/* Company Address */}
        <div className='flex flex-row align-middle items-center text-center text-backblack pb-2'>
          <h1 className='pr-2 font-quicksand font-extrabold text-sm'>
            Company Address:
          </h1>
          <h3 className='font-kalam text-sx '>
            { company_address }
          </h3>
        </div>

        {/* Feenote Number */}
        <div className='flex flex-row align-middle items-center text-center text-backblack pb-2'>
          <h1 className='pr-2 font-quicksand font-extrabold text-sm'>
            Feenote Number:
          </h1>
          <h3 className='font-kalam text-sx '>
            { feenote_number }
          </h3>
        </div>

        {/* Customer Name */}
        <div className='flex flex-row align-middle items-center text-center text-backblack pb-2'>
          <h1 className='pr-2 font-quicksand font-extrabold text-sm'>
            Customer Name:
          </h1>
          <h3 className='font-kalam text-sx '>
            { customer_name }
          </h3>
        </div>

        {/* Details */}
        <div className='flex flex-row align-middle items-center text-center text-backblack pb-2'>
          <h1 className='pr-2 font-quicksand font-extrabold text-sm'>
            Transaction Details:
          </h1>
          <h3 className='font-kalam text-sx '>
            { reference }
          </h3>
        </div>

        {/* Money */}
        <div className='flex flex-col md:flex-row justify-center align-middle items-center'>
          {/* Total Amount */}
          <div className='flex flex-row align-middle items-center text-center text-backblack pb-2 md:pr-2'>
            <h1 className='pr-2 font-quicksand font-extrabold text-sm'>
              Total Amount:
            </h1>
            <h3 className='font-kalam text-sx '>
              { total_amount }
            </h3>
          </div>

          {/* Amount Paid */}
          <div className='flex flex-row align-middle items-center text-center text-backblack pb-2 md:pr-2'>
            <h1 className='pr-2 font-quicksand font-extrabold text-sm'>
              Amount Paid:
            </h1>
            <h3 className='font-kalam text-sx '>
              { amount_paid }
            </h3>
          </div>

          {/* Balance */}
          <div className='flex flex-row align-middle items-center text-center text-backblack pb-2'>
            <h1 className='pr-2 font-quicksand font-extrabold text-sm'>
              Balance:
            </h1>
            <h3 className='font-kalam text-sx '>
              { balance }
            </h3>
          </div>
        </div>

        {/* Payment Details */}
        <div className='flex flex-row align-middle items-center text-center text-backblack pb-2'>
          <h1 className='pr-2 font-quicksand font-extrabold text-sm'>
            Payment Details:
          </h1>
          <h3 className='font-kalam text-sx '>
            { payment_details }
          </h3>
        </div>

        {/* Sign Off */}
        <div className='flex flex-row align-middle items-center text-center text-backblack pb-2'>
          <h1 className='pr-2 font-quicksand font-extrabold text-sm'>
            Sign Off:
          </h1>
          <h3 className='font-kalam text-sx '>
            { sign_off }
          </h3>
        </div>

        {/* Date */}
        <div className='flex flex-row align-middle items-center text-center text-backblack pb-2'>
          <h1 className='pr-2 font-quicksand font-extrabold text-sm'>
            Date Created:
          </h1>
          <h3 className='font-kalam text-xs'>
            { date_created }
          </h3>
        </div>

        {/* Buttons */}
        <div className='flex flex-row justify-around items-center align-middle w-full'>
          {/* Update */}
          <Link 
            href=""
            className='bg-buttontext text-buttonback hover:bg-buttonback hover:text-buttontext font-kalam text-xs px-5 py-2 rounded-2xl'
          >
            Update
          </Link>

          {/* Delete */}
          <Link
            href=""
            className='bg-buttontext text-buttonback hover:bg-buttonback hover:text-buttontext font-kalam text-xs px-5 py-2 rounded-2xl'
          >
            Delete
          </Link>

          {/* Print */}
          <Link
            href=""
            className='bg-buttontext text-buttonback hover:bg-buttonback hover:text-buttontext font-kalam text-xs px-5 py-2 rounded-2xl'
          >
            Print
          </Link>
        </div>
      </div>
    </div>    
  )
}

export default ViewFeenote