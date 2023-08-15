"use client"

import React, { useState, useEffect } from 'react'

import Link from 'next/link';

const ViewCustomer = ({ params }) => {

    const [data, setData] = useState([]);

    const { id } = params;

    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await fetch('http://127.0.0.1:8000/customer/');
            const jsonData = await response.json();
            setData(jsonData);
          } catch {
            console.error('Error fetching data', data);
          }
        };
    
        fetchData();
    }, []);

    const selectedItem = data.find(item => item.id === parseInt(id));

    // First Name
    const first_name = selectedItem ? selectedItem.first_name : '';

    // Last Name
    const last_name = selectedItem ? selectedItem.last_name : '';

    // Email
    const email = selectedItem ? selectedItem.email : '';

    // Phone Number
    const phone_number = selectedItem ? selectedItem.phone_number : '';

  return (
    <div className='w-full mt-28 mb-7 p-5 flex flex-col justify-center align-middle items-center text-center'>
        {/* Title */}
        <div className='font-kalam font-bold text-s sm:text-ml pb-8'>
        { first_name } { last_name }
        </div>

        {/* Body */}
        <div className='w-4/5 sm:w-1/2 h-fit bg-white rounded-xl sm:rounded-3xl flex flex-col align-middle text-center items-center px-5 py-2'>
            {/* First Name */}
            <div className='flex flex-row align-middle items-center text-center text-backblack pb-2'>
                <h1 className='pr-2 font-quicksand font-extrabold text-sm'>
                    First Name:
                </h1>
                <h3 className='font-kalam text-sx '>
                    { first_name }
                </h3>
            </div>

            {/* Last Name */}
            <div className='flex flex-row align-middle items-center text-center text-backblack pb-2'>
                <h1 className='pr-2 font-quicksand font-extrabold text-sm'>
                    Last Name:
                </h1>
                <h3 className='font-kalam text-sx '>
                    { last_name }
                </h3>
            </div>

            {/* Email */}
            <div className='flex flex-row align-middle items-center text-center text-backblack pb-2'>
                <h1 className='pr-2 font-quicksand font-extrabold text-sm'>
                    Email:
                </h1>
                <h3 className='font-kalam text-sx '>
                    { email }
                </h3>
            </div>

            {/* Phone Number */}
            <div className='flex flex-row align-middle items-center text-center text-backblack pb-2'>
                <h1 className='pr-2 font-quicksand font-extrabold text-sm'>
                    Phone Number:
                </h1>
                <h3 className='font-kalam text-sx '>
                    { phone_number }
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
            </div>
        </div>
    </div>
  )
}

export default ViewCustomer