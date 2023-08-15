"use client"

import React, { forwardRef, useEffect, useState } from 'react'

import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';

const UpdateCustomer = ({ params }) => {

    const [data, setData] = useState([]);

    const { id } = params;

    useEffect(() => {
        const fetchData = async () => {
            try{
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

    const [formData, setFormData] = useState({
        first_name: "",
        last_name: "",
        email: "",
        phone_number: "",
    });

    useEffect(() => {
      if (selectedItem) {
          setFormData({
              first_name: selectedItem.first_name,
              last_name: selectedItem.last_name,
              email: selectedItem.email,
              phone_number: selectedItem.phone_number,
          });
      }
    }, [selectedItem]);

    const handleInputChange = (event) => {
        const { id, value } = event.target;
        setFormData((prevData) => ({
          ...prevData,
          [id]: value,
        }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        console.log(`${id}`)
      
        try {
          const response = await fetch(`http://127.0.0.1:8000/customer/${id}/`, {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
          });
          console.log(JSON.stringify(formData));
      
          if (response.ok) {
            // Handle success, maybe redirect or show a success message
            console.log('Success')
          } else {
            // Handle error, show an error message
          }
        } catch (error) {
          console.error('Error updating customer data', error);
        }
    };

  return (
    <div className='flex flex-col justify-center align-middle items-center'>
      {/* Title */}
      <div className='mt-28 p-6 text-center font-kalam text-s md:text-m l:text-ml font-semibold'>
        UPDATE CUSTOMER
      </div>

      {/* Body */}
      <div className='bg-white h-fit w-4/5 rounded-xl sm:rounded-3xl pb-2 mb-12'>

        {/* Form */}
        <form 
          onSubmit={ handleSubmit } 
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
              id="first_name" 
              className="dark:text-gray-900 text-xs sm:text-sm rounded-lg focus:ring-blue-500 block w-full pl-8 sm:pl-10 p-2 sm:p-2.5 border-darkgray placeholder-gray text-gray" 
              placeholder="First Name"
              value = {formData.first_name}
              onChange={handleInputChange}
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
              type='text'
              id="last_name" 
              className="dark:text-gray-900 text-xs sm:text-sm rounded-lg focus:ring-blue-500 block w-full pl-10 sm:pl-10 p-2 sm:p-2.5 border-darkgray placeholder-gray text-gray" 
              placeholder="Last Name"
              value={formData.last_name}
              onChange={handleInputChange}
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
              value={formData.email}
              onChange={handleInputChange}
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
              id="phone_number" 
              className="dark:text-gray-900 text-xs sm:text-sm rounded-lg focus:ring-blue-500 block w-full pl-8 sm:pl-10 p-2 sm:p-2.5 border-darkgray placeholder-gray text-gray" 
              placeholder="Phone Number" 
              value={formData.phone_number} 
              onChange={handleInputChange}           
            />
          </div>

          <div className="pt-4 sm:pt-6">
            <button 
              type="submit"
              className=
              "bg-backblack text-white rounded-md sm:rounded-xl h-fit w-fit duration-300 hover:bg-buttontext hover:text-buttonback hover:duration-300">
              <p className="font-quicksand font-semibold text-sm sm:text-m px-14 py-1">
                UPDATE
              </p>
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default UpdateCustomer