"use client"

import React, { useEffect, useState } from 'react'

import Link from 'next/link';

const Page = () => {

    const [feenoteData, setFeenoteData] = useState([]);
    const [customerData, setCustomerData] = useState([]);
    const [searchInput, setSearchInput] = useState('');

    useEffect (() => {
        const fetchFeenoteData = async () => {
            try {
            const response = await fetch('http://127.0.0.1:8000/feenote/');
            const jsonData = await response.json();
            setFeenoteData(jsonData);
            } catch (error) {
            console.error('Error fetching data', data);
            }
        };

        const fetchCustomerData = async () => {
            try {
            const responseCustomer = await fetch('http://127.0.0.1:8000/customer/');
            const jsonCustomer = await responseCustomer.json();
            setCustomerData(jsonCustomer);
            } catch (error) {
            console.error('Error fetching data', data);
            }
        };

        fetchFeenoteData();
        fetchCustomerData();
    }, []);

    // Group Feenotes by customer ID
    const feenotesByCustomer = {};
    feenoteData.forEach((feenote) => {
        if(!feenotesByCustomer[feenote.customer]) {
            feenotesByCustomer[feenote.customer] = [];
        }
        feenotesByCustomer[feenote.customer].push(feenote);
    });

    const latestFeenotes = [];

    for (const customerId in feenotesByCustomer) {
        const customerFeenotes = feenotesByCustomer[customerId];

        customerFeenotes.sort((a, b) => {
            return new Date(a.created_at) - new Date(b.created_at);
        });

        const latestFeenote = customerFeenotes[customerFeenotes.length - 1];

        if (latestFeenote && latestFeenote.amount !== 0) {
            latestFeenotes.push(latestFeenote);
        }
    }

    console.log(latestFeenotes)

  return (
    <div className='w-full mt-28 p-5 flex flex-col justify-center align-middle items-center text-center'>
      <div className='font-kalam font-bold text-m pb-8'>
        UNPAID FEENOTES
      </div>

      <div className='mb-4'>
        <input
          type='text'
          placeholder='Search by customer'
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          className='dark:text-gray-900 px-3 py-2 border rounded-md placeholder-gray text-gray'
        />
      </div>

      <div className='flex flex-col sm:flex-row sm:flex-wrap justify-between w-full'>
        {latestFeenotes.map((feenote) => {
          // Find the corresponding customer data using customer ID
          const correspondingCustomer = customerData.find(
            (customer) => customer.id === feenote.customer
          );

          return (
            <div
              className='flex flex-col sm:flex-row justify-center items-center align-middle sm:pb-3 md:pb-8'
              key={feenote.id}
            >
              <div className='flex flex-col mb-5 sm:mb-0 sm:mr-5 md:mr-8 p-3 h-fit w-fit bg-thistle rounded-xl '>
                <h1 className='text-backblack text-m font-kalam font-bold'>
                  {correspondingCustomer ? 
                    `${correspondingCustomer.first_name} ${correspondingCustomer.last_name} `: 
                    ''
                  }
                </h1>
                <h3 className='text-backblack font-kalam font-semibold text-s pb-2'>
                  Feenote Amount: {feenote.amount}
                </h3>
                <div className='flex flex-row justify-center items-center align-middle'>
                  <Link
                    href={`/home/feenotes/view/${feenote.id}`}
                    className='bg-buttontext text-buttonback hover:bg-buttonback hover:text-buttontext font-kalam text-xs px-5 py-2 mr-2 rounded-2xl'
                  >
                    View
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  )
}

export default Page