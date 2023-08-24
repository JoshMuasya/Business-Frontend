"use client"

import React, { useEffect, useState } from 'react';

import Link from 'next/link';

const page = () => {

  const [paymentData, setPaymentData] = useState([]);
  const [customerData, setCustomerData] = useState([]);

  const [filteredPayments, setFilteredPayments] = useState([]);
  const [searchInput, setSearchInput] = useState('');
  const [filtersApplied, setFilteredApplied] = useState(false);

  useEffect(() => {
    const fetchPaymentData = async () => {
      try {
        const response = await fetch('http://127.0.0.1:8000/payment/');
        const jsonData = await response.json();
        setPaymentData(jsonData);
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

    fetchPaymentData();
    fetchCustomerData();
  }, []);

  useEffect(() => {
   const filtered = paymentData.filter((payment) => {
    const correspondingCustomer = customerData.find(
      (customer) => customer.id === payment.customer
    );

    if (correspondingCustomer) {
      const customerName = `${correspondingCustomer.first_name} ${correspondingCustomer.last_name}`.toLowerCase();
      const searchLower = searchInput.toLowerCase();
      return customerName.includes(searchLower);
    }

    return false;
   });
   
   setFilteredPayments(filtered);
  }, [searchInput, paymentData, customerData]);


  const paidPayments = filteredPayments.filter(payment => payment.balance === 0);
  const unpaidPayments = filteredPayments.filter(payment => payment.balance > 0);
  const resetPayments = () => {
    setFilteredApplied(false);
    setFilteredPayments(paymentData)
  };

  return (
    <div className='w-full mt-28 p-5 flex flex-col justify-center align-middle items-center text-center'>
      <div className='font-kalam font-bold text-m pb-8'>
        VIEW FEENOTES
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

      <div className='flex flex-row justify-center items-center align-middle mb-4'>
        <button
          onClick={() => setFilteredPayments(paidPayments)}
          className='bg-buttontext text-buttonback hover:bg-buttonback hover:text-buttontext font-kalam text-xs px-5 py-2 mr-2 rounded-2xl'
        >
          Paid Feenotes
        </button>
        
        <button
          onClick={() => setFilteredPayments(unpaidPayments)}
          className='bg-buttontext text-buttonback hover:bg-buttonback hover:text-buttontext font-kalam text-xs px-5 py-2 mr-2 rounded-2xl'
        >
          Unpaid Feenotes
        </button>

        <button
          onClick={resetPayments}
          className='bg-buttontext text-buttonback hover:bg-buttonback hover:text-buttontext font-kalam text-xs px-5 py-2 mr-2 rounded-2xl'
        >
          Reset
        </button>
      </div>

      <div className='flex flex-col sm:flex-row sm:flex-wrap justify-between w-full'>
        {filteredPayments.map((payment) => {
          // Find the corresponding customer data using customer ID
          const correspondingCustomer = customerData.find(
            (customer) => customer.id === payment.customer
          );

          return (
            <div
              className='flex flex-col sm:flex-row justify-center items-center align-middle sm:pb-3 md:pb-8'
              key={payment.id}
            >
              <div className='flex flex-col mb-5 sm:mb-0 sm:mr-5 md:mr-8 p-3 h-fit w-fit bg-thistle rounded-xl '>
                <h1 className='text-backblack text-m font-kalam font-bold'>
                  {correspondingCustomer ? 
                    `${correspondingCustomer.first_name} ${correspondingCustomer.last_name} `: 
                    ''
                  }
                </h1>
                <h3 className='text-backblack font-kalam font-semibold text-s pb-2'>
                  Payment Amount: {payment.amount}
                </h3>
                <div className='flex flex-row justify-center items-center align-middle'>
                  <Link
                    href={`/home/feenotes/view/${payment.id}`}
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
};

export default page;