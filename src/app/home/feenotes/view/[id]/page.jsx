"use client"

import React, { useState, useEffect } from 'react'
import Link from 'next/link';
import jsPDF from 'jspdf'

import logo from '../../../../../../public/Logo.png'

const ViewFeenote = ({ params }) => {

  const [paymentData, setPaymentData] = useState([]);
  const [customerData, setCustomerData] = useState([]);

  const { id } = params;

  useEffect(() => {
    const fetchPaymentData = async () => {
      try {
        const response = await fetch(`http://127.0.0.1:8000/payment/${id}`);
        const jsonData = await response.json();
        setPaymentData(jsonData);
      } catch (error) {
        console.error('Error fetching data', error);
      }
    };

    fetchPaymentData();
  }, [id]);

  useEffect(() => {
    if (paymentData.customer) {
      const fetchCustomerData = async () => {
        try {
          const responseCustomer = await fetch(`http://127.0.0.1:8000/customer/${paymentData.customer}`);
          const jsonCustomer = await responseCustomer.json();
          setCustomerData(jsonCustomer);
        } catch (error) {
          console.error('Error fetching data', error);
        }
      }; 
      fetchCustomerData();
    }
  }, [paymentData]);

  console.log(customerData)

  function formatDate(dateString) {
    const options = { year: 'numeric', month: 'short', day: '2-digit' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  }

  // Generate PDF
  const pdfGenerate  = () => {
    const pdf = new jsPDF()

    const pdfImage = logo
    const pdfTitle = "DIGIMATIC MARKETERS"
    const pdfAddress = "Westlands Commercial Center \n wwww.digimaticmarketers.com \n info@digimaticmarketers.com \n +254 798 040 353"

    const pageWidth = pdf.internal.pageSize.width;
    const imageWidth = 30;
    // const xposition = (pageWidth - imageWidth) / 2;

    pdf.setFontSize(18)
    // pdf.addImage(pdfImage, 'PNG', xposition, 10, imageWidth, 30);
    pdf.text(105, 20, `Generated Feenote for ${pdfTitle}`, null, null, 'center');

    pdf.setFontSize(14);
    pdf.setFont('italic');
    pdf.text(105, 30, `${pdfAddress}`, null, null, 'center');
    pdf.setFont('normal');

    // Details
    pdf.setFontSize(12);
    pdf.text(10, 60, `Customer Name: ${customerData.first_name} ${customerData.last_name}`);
    pdf.text(10, 70, `Email Address: ${customerData.email}`);
    pdf.text(10, 80, `Phone Number: ${customerData.phone_number}`);
    pdf.text(10, 90, `Payment Details: ${paymentData.payment_details}`);
    pdf.text(10, 110, `Total Amount: ${paymentData.amount} | Amount Paid: ${paymentData.amount_paid} | Balance: ${paymentData.balance}`);
    pdf.text(10, 130, `Payment Date: ${paymentData.created_at}`);
    pdf.text(10, 150, `Sign Off: ${paymentData.sign_off}`);

    pdf.save(`${customerData.first_name} ${customerData.last_name}.pdf`);
  }

  return (
    <div className='w-full mt-28 mb-7 p-5 flex flex-col justify-center align-middle items-center text-center'>
      {/* Title */}
      <div className='font-kalam font-bold text-s sm:text-ml pb-8'>
        { customerData.first_name } { customerData.last_name } Feenote
      </div>

      {/* Body */}
      <div className='w-4/5 sm:w-1/2 h-fit bg-white rounded-xl sm:rounded-3xl flex flex-col align-middle text-center items-center px-5 py-2'>
        {/* Customer Name */}
        <div className='flex flex-row align-middle items-center text-center text-backblack pb-2'>
          <h1 className='pr-2 font-quicksand font-extrabold text-sm'>
            Customer Name:
          </h1>
          <h3 className='font-kalam text-sx '>
          { customerData.first_name } { customerData.last_name }
          </h3>
        </div>

        {/* Email Address */}
        <div className='flex flex-row align-middle items-center text-center text-backblack pb-2'>
          <h1 className='pr-2 font-quicksand font-extrabold text-sm'>
            Email Address:
          </h1>
          <h3 className='font-kalam text-sx '>
            { customerData.email }
          </h3>
        </div>

        {/* Phone Number */}
        <div className='flex flex-row align-middle items-center text-center text-backblack pb-2'>
          <h1 className='pr-2 font-quicksand font-extrabold text-sm'>
            Phonenumber:
          </h1>
          <h3 className='font-kalam text-sx '>
            { customerData.phone_number }
          </h3>
        </div>

        {/* Details */}
        <div className='flex flex-row align-middle items-center text-center text-backblack pb-2'>
          <h1 className='pr-2 font-quicksand font-extrabold text-sm'>
            Payment Details:
          </h1>
          <h3 className='font-kalam text-sx '>
            { paymentData.payment_details }
          </h3>
        </div>

        {/* Money */}
        <div className='flex flex-col md:flex-row justify-center align-middle items-center'>
          {/* Total Amount */}
          <div className='flex flex-row align-middle items-center text-center text-backblack pb-2 md:pr-2'>
            <h1 className='pr-2 font-quicksand font-extrabold text-sm'>
              Amount:
            </h1>
            <h3 className='font-kalam text-sx '>
              { paymentData.amount }
            </h3>
          </div>

          {/* Amount Paid */}
          <div className='flex flex-row align-middle items-center text-center text-backblack pb-2 md:pr-2'>
            <h1 className='pr-2 font-quicksand font-extrabold text-sm'>
              Amount Paid:
            </h1>
            <h3 className='font-kalam text-sx '>
              { paymentData.amount_paid }
            </h3>
          </div>

          {/* Balance */}
          <div className='flex flex-row align-middle items-center text-center text-backblack pb-2'>
            <h1 className='pr-2 font-quicksand font-extrabold text-sm'>
              Balance:
            </h1>
            <h3 className='font-kalam text-sx '>
              { paymentData.balance }
            </h3>
          </div>
        </div>

        {/* Latest Payment Date */}
        <div className='flex flex-row align-middle items-center text-center text-backblack pb-2'>
          <h1 className='pr-2 font-quicksand font-extrabold text-sm'>
            Payment Date:
          </h1>
          <h3 className='font-kalam text-sx '>
            { formatDate(paymentData.created_at) }
          </h3>
        </div>

        {/* Sign Off */}
        <div className='flex flex-row align-middle items-center text-center text-backblack pb-2'>
          <h1 className='pr-2 font-quicksand font-extrabold text-sm'>
            Sign Off:
          </h1>
          <h3 className='font-kalam text-sx '>
            { paymentData.sign_off }
          </h3>
        </div>

        {/* Buttons */}
        <div className='flex flex-row justify-around items-center align-middle w-full'>
          {/* New */}
          <Link 
            href="/home/feenotes/add"
            className='bg-buttontext text-buttonback hover:bg-buttonback hover:text-buttontext font-kalam text-xs px-5 py-2 rounded-2xl'
          >
            Record New Payment
          </Link>

          {/* Print */}
          <button
            onClick={pdfGenerate}
            className='bg-buttontext text-buttonback hover:bg-buttonback hover:text-buttontext font-kalam text-xs px-5 py-2 rounded-2xl'
          >
            Print
          </button>

          {/* <Link
            href=""
            className='bg-buttontext text-buttonback hover:bg-buttonback hover:text-buttontext font-kalam text-xs px-5 py-2 rounded-2xl'
          >
            Print
          </Link> */}
        </div>
      </div>
    </div>    
  )
}

export default ViewFeenote