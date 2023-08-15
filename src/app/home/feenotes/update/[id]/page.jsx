"use client"

import React, { useEffect, useState } from 'react'

const UpdateFeenote = ({ params }) => {

    const [data, setData] = useState([]);

    const { id } = params;

    useEffect(() => {
        const fetchData = async () => {
            try{
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

  return (
    <div>page</div>
  )
}

export default UpdateFeenote