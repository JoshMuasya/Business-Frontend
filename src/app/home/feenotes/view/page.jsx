"use client"

import React, { useEffect, useState } from 'react';

import Link from 'next/link';

const page = () => {

  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://127.0.0.1:8000/feenote/');
        const jsonData = await response.json();
        setData(jsonData);
        console.log(jsonData)
      } catch {
        console.error('Error fetching data', data);
      }
    };

    fetchData();
  }, []);

  return (
    // Main
    <div className='w-full mt-28 p-5 flex flex-col justify-center align-middle items-center text-center'>
      {/* Title */}
      <div className='font-kalam font-bold text-m pb-8'>
        VIEW FEENOTES
      </div>

      {/* Body */}
      <div className='flex flex-col sm:flex-row sm:flex-wrap justify-between w-full'>
        {/* Display Feenotes */}
        {data.map((feenote, index) => (
          <div 
            className='flex flex-col sm:flex-row justify-center items-center align-middle sm:pb-3 md:pb-8'
            key={index}
          >
            {/* Feenotes */}
            <div className='flex flex-col mb-5 sm:mb-0 sm:mr-5 md:mr-8 p-3 h-fit w-fit bg-thistle rounded-xl '>
              {/* Company Name */}
              <h1 className='text-backblack text-m font-kalam font-bold'>
                {feenote.company_name}
              </h1>

              {/* Customer Name */}
              <h3 className='text-backblack font-kalam font-semibold text-s pb-2'>
                {feenote.customer_name}
              </h3>

              {/* Buttons */}
              <div className='flex flex-row justify-center items-center align-middle'>
                {/* View */}
                <Link
                  href={`/home/feenotes/view/${feenote.id}`}
                  className='bg-buttontext text-buttonback hover:bg-buttonback hover:text-buttontext font-kalam text-xs px-5 py-2 mr-2 rounded-2xl'
                >
                  View
                </Link>

                {/* Update */}
                <Link 
                  href=""
                  className='bg-buttontext text-buttonback hover:bg-buttonback hover:text-buttontext font-kalam text-xs px-5 py-2 mr-2 rounded-2xl'
                >
                  Update
                </Link>

                {/* Delete */}
                <Link
                  href=""
                  className='bg-buttontext text-buttonback hover:bg-buttonback hover:text-buttontext font-kalam text-xs px-5 py-2 mr-2 rounded-2xl'
                >
                  Delete
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default page