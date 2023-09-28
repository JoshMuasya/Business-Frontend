"use client"

import React, { useEffect, useState } from 'react'

import Link from 'next/link';

const Page = () => {

  const [feenoteData, setFeenoteData] = useState([]);
  const [customerData, setCustomerData] = useState([]);
  const [searchInput, setSearchInput] = useState('');

  useEffect(() => {
    const fetchFeenotes = async () => {
      try {
        const response = await fetch('http://127.0.0.1:8000/feenote/')
        const jsonData = await response.json()
        setFeenoteData(jsonData)
      } catch (error) {
        console.error ('Error Fetching Customers', error)
      }
    }

    const fetchCustomers = async () => {
      try {
        const responseData = await fetch('http://127.0.0.1:8000/customer/')
        const jsonData = await responseData.json();
        setCustomerData(jsonData)
      } catch (error) {
        console.error ('Error Fetching Customers', error)
      }
    }

    fetchFeenotes()
    fetchCustomers()
  }, [])

  const filteredFeenoteData = feenoteData.filter((feenote) => feenote.amount === 0);

  const customerIds = [...new Set(filteredFeenoteData.map((feenote) => feenote.customer))];

  const feeNotesCustomers = feenoteData.filter((feenote) => customerIds.includes(feenote.customer))

  const getCustomerById = (customerId) => {
    return customerData.find((customer) => customer.id === customerId)
  }

  return (
    <div className='w-full mt-28 p-5 flex flex-col justify-center align-middle items-center text-center'>
      <div className='font-kalam font-bold text-m pb-8'>
        PAID FEENOTES
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
        {feeNotesCustomers.map((feenote) => {
          const customerDetails = getCustomerById(feenote.customer)
          
          return (
            <div
              className='flex flex-col sm:flex-row justify-center items-center align-middle sm:pb-3 md:pb-8'
              key={feenote.id}
            >
              <div className='flex flex-col mb-5 sm:mb-0 sm:mr-5 md:mr-8 p-3 h-fit w-fit bg-thistle rounded-xl '>
                {customerDetails && (
                  <h3 className='text-backblack font-kalam font-semibold text-s pb-2'>
                    {customerDetails.first_name} {customerDetails.last_name}
                  </h3>
                )}

                <h3 className='text-backblack font-kalam font-semibold text-sx pb-2'>
                  Feenote Amount: {feenote.amount}
                </h3>

                <h3 className='text-backblack font-kalam font-semibold text-sx pb-2'>
                  Payment Details: {feenote.payment_details}
                </h3>

                <h3 className='text-backblack font-kalam font-semibold text-sx pb-2'>
                  Sign Off: {feenote.sign_off}
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
          )
        })}
      </div>
    </div>
  )
}

export default Page