"use client"

import React, { useEffect, useState } from 'react';

import Link from 'next/link';

const page = () => {

  const [customers, setCustomers] = useState([])
  const [feenotes, setFeenotes] = useState([])
  const [latestFeenotes, setLatestFeenotes] = useState([])
  const [totalUnpaidAmount, setTotalUnpaidAmount] = useState(0);
  const [totalPaidAmount, setTotalPaidAmount] = useState(0);

  useEffect (() => {
    const fetchCustomers = async () => {
      try {
        const response = await fetch('http://127.0.0.1:8000/customer/')
        const jsonData = await response.json();
        setCustomers(jsonData)
      } catch (error) {
        console.error('Error Fetching Customers', error)
      }
    }

    fetchCustomers();
  }, [])

  const totalCustomers = customers.length;
 
  useEffect(() => {
    const fetchFeenotes = async () => {
      try {
        const response = await fetch('http://127.0.0.1:8000/feenote/')
        const jsonData = await response.json();
        setFeenotes(jsonData)
      } catch (error) {
        console.error('Error fetching Feenotes', error)
      }
    }

    fetchFeenotes();
  }, [])

  useEffect(() => {
    const findLatestFeenotes = () => {
      const latestNotes = new Map();
      feenotes.forEach((feenote) => {
        const customerId = feenote.customer;
        const createdAt = new Date(feenote.created_at);

        if (!latestNotes.has(customerId) || createdAt > latestNotes.get(customerId).createdAt) {
          latestNotes.set(customerId, { ...feenote, createdAt })
        }
      });

      const latestFeenotesArray = Array.from(latestNotes.values());
      latestFeenotesArray.sort((a, b) => b.createdAt - a.createdAt)
      setLatestFeenotes(latestFeenotesArray)

      const total = latestFeenotesArray.reduce((acc, feenote) => acc + feenote.amount, 0);
      setTotalUnpaidAmount(total)

      const customersWithZeroTotal = latestFeenotesArray.filter((feenote) => feenote.amount === 0);

      const earliestAmounts = customersWithZeroTotal.map((customerFeenote) => {
        const customerId = customerFeenote.customer;
        return getEarliestFeenoteAmount(customerId);
      });

      const totalEarliestAmounts = earliestAmounts.reduce((acc, amount) => acc + (amount || 0), 0)

      setTotalPaidAmount(totalEarliestAmounts);
    };

    findLatestFeenotes()
  }, [feenotes]);

  const getEarliestFeenoteAmount = (customerId) => {
    const customerFeenotes = feenotes.filter((feenote) => feenote.customer === customerId);
    if (customerFeenotes.length === 0) {
      return null;
    }

    const earliestFeenote = customerFeenotes.reduce((earliest, feenote) => {
      const createdAt = new Date(feenote.created_at);
      if (!earliest || createdAt < earliest.createdAt) {
        return { ...feenote, createdAt };
      }

      return earliest
    }, null);

    return earliestFeenote.amount;
  }

  return (
    <div className='mt-28 p-5 flex flex-col justify-center align-middle items-center text-center'>
      {/* Title */}
      <div className='font-kalam font-bold text-ml sm:text-mxl md:text-l pb-8'>
        FINANCIAL STATEMENTS
      </div>

      {/* Body */}
      <div className='flex flex-col justify-center justify-items-center items-center align-middle md:w-full'>
        {/* Top */}
        <div className='flex flex-col md:flex-row w-3/4 md:w-full h-3/5 justify-around align-middle items-center md:pb-12'>
          {/* Left */}
          <div className='flex flex-col mb-5 sm:mb-0 sm:mr-5 md:mr-8 p-3 h-fit w-fit bg-thistle rounded-xl '>
            <h1 className='text-backblack text-m font-kalam font-bold'>
              UNPAID FEENOTES
            </h1>
            <h3 className='text-backblack font-kalam font-semibold text-s pb-2'>
              Total Amount: { totalUnpaidAmount }
            </h3>
            <div className='flex flex-row justify-center items-center align-middle'>
              <Link
                href='/home/financialstatements/unpaid'
                className='bg-buttontext text-buttonback hover:bg-buttonback hover:text-buttontext font-kalam text-xs px-5 py-2 mr-2 rounded-2xl'
              >
                View
              </Link>
            </div>
          </div>

          {/* Right */}
          <div className='flex flex-col mb-5 sm:mb-0 sm:mr-5 md:mr-8 p-3 h-fit w-fit bg-thistle rounded-xl '>
            <h1 className='text-backblack text-m font-kalam font-bold'>
              PAID FEENOTES
            </h1>
            <h3 className='text-backblack font-kalam font-semibold text-s pb-2'>
              Total Amount: { totalPaidAmount }
            </h3>
            <div className='flex flex-row justify-center items-center align-middle'>
              <Link
                href='/home/financialstatements/paid'
                className='bg-buttontext text-buttonback hover:bg-buttonback hover:text-buttontext font-kalam text-xs px-5 py-2 mr-2 rounded-2xl'
              >
                View
              </Link>
            </div>
          </div>
        </div>

        <div className='flex flex-col md:flex-row w-3/4 md:w-full h-3/5 justify-around align-middle items-center md:pb-12'>
          {/* Left */}
          <div className='flex flex-col mb-5 sm:mb-0 sm:mr-5 md:mr-8 p-3 h-fit w-fit bg-thistle rounded-xl '>
            <h1 className='text-backblack text-m font-kalam font-bold'>
              CUSTOMER HISTORY
            </h1>
            <h3 className='text-backblack font-kalam font-semibold text-s pb-2'>
              Total Customers: { totalCustomers }
            </h3>
            <div className='flex flex-row justify-center items-center align-middle'>
              <Link
                href='/home/customers/view'
                className='bg-buttontext text-buttonback hover:bg-buttonback hover:text-buttontext font-kalam text-xs px-5 py-2 mr-2 rounded-2xl'
              >
                View
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default page