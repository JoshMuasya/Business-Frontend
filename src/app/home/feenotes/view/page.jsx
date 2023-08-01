import React from 'react';

import Link from 'next/link';

const page = () => {
  return (
    // Main
    <div className='w-full mt-28 p-5 flex flex-col justify-center align-middle items-center text-center'>
      {/* Title */}
      <div className='font-kalam font-bold text-m pb-8'>
        VIEW FEENOTES
      </div>

      {/* Body */}
      <div className='flex flex-col justify-between w-full'>
        {/* Feenote row 1 */}
        <div className='flex flex-col sm:flex-row justify-center items-center align-middle sm:pb-3 md:pb-8'>
          {/* Left */}
          <div className='flex flex-col mb-5 sm:mb-0 sm:mr-5 md:mr-8 p-3 h-fit w-fit bg-thistle rounded-xl '>
            {/* Title */}
            <h1 className='text-backblack text-m font-kalam font-bold'>
              Feenote 1
            </h1>

            {/* Subtitle */}
            <h3 className='text-backblack font-kalam font-semibold text-s pb-2'>
              Customer Name
            </h3>

            {/* Buttons */}
            <div className='flex flex-row justify-center items-center align-middle'>
              {/* View */}
              <Link
                href="/home/feenotes/view/1"
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

          {/* Right */}
          <div className='flex flex-col mb-5 sm:mb-0 p-3 h-fit w-fit bg-thistle rounded-xl'>
            {/* Title */}
            <h1 className='text-backblack text-m font-kalam font-bold'>
              Feenote 1
            </h1>

            {/* Subtitle */}
            <h3 className='text-backblack font-kalam font-semibold text-s pb-2'>
              Customer Name
            </h3>

            {/* Buttons */}
            <div className='flex flex-row justify-center items-center align-middle'>
              {/* View */}
              <Link
                href=""
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

        {/* Feenote row 2 */}
        <div className='flex flex-col sm:flex-row justify-center items-center align-middle sm:pb-3 md:pb-8'>
          {/* Left */}
          <div className='flex flex-col mb-5 sm:mb-0 sm:mr-5 md:mr-8 p-3 h-fit w-fit bg-thistle rounded-xl '>
            {/* Title */}
            <h1 className='text-backblack text-m font-kalam font-bold'>
              Feenote 1
            </h1>

            {/* Subtitle */}
            <h3 className='text-backblack font-kalam font-semibold text-s pb-2'>
              Customer Name
            </h3>

            {/* Buttons */}
            <div className='flex flex-row justify-center items-center align-middle'>
              {/* View */}
              <Link
                href=""
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

          {/* Right */}
          <div className='flex flex-col mb-5 sm:mb-0 p-3 h-fit w-fit bg-thistle rounded-xl'>
            {/* Title */}
            <h1 className='text-backblack text-m font-kalam font-bold'>
              Feenote 1
            </h1>

            {/* Subtitle */}
            <h3 className='text-backblack font-kalam font-semibold text-s pb-2'>
              Customer Name
            </h3>

            {/* Buttons */}
            <div className='flex flex-row justify-center items-center align-middle'>
              {/* View */}
              <Link
                href=""
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

        {/* Feenote row 3 */}
        <div className='flex flex-col sm:flex-row justify-center items-center align-middle sm:pb-3 md:pb-8'>
          {/* Left */}
          <div className='flex flex-col mb-5 sm:mb-0 sm:mr-5 md:mr-8 p-3 h-fit w-fit bg-thistle rounded-xl '>
            {/* Title */}
            <h1 className='text-backblack text-m font-kalam font-bold'>
              Feenote 1
            </h1>

            {/* Subtitle */}
            <h3 className='text-backblack font-kalam font-semibold text-s pb-2'>
              Customer Name
            </h3>

            {/* Buttons */}
            <div className='flex flex-row justify-center items-center align-middle'>
              {/* View */}
              <Link
                href=""
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

          {/* Right */}
          <div className='flex flex-col mb-5 sm:mb-0 p-3 h-fit w-fit bg-thistle rounded-xl'>
            {/* Title */}
            <h1 className='text-backblack text-m font-kalam font-bold'>
              Feenote 1
            </h1>

            {/* Subtitle */}
            <h3 className='text-backblack font-kalam font-semibold text-s pb-2'>
              Customer Name
            </h3>

            {/* Buttons */}
            <div className='flex flex-row justify-center items-center align-middle'>
              {/* View */}
              <Link
                href=""
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
      </div>
    </div>
  )
}

export default page