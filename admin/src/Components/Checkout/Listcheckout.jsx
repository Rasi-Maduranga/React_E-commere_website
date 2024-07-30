import React, { useEffect, useState } from 'react';
import './Listcheckout.css';

const ListCheckout = () => {
  const [allCheckouts, setAllCheckouts] = useState([]);

  useEffect(() => {
    // Function to fetch all checkouts from the server
    const fetchCheckouts = async () => {
      try {
        const response = await fetch('http://localhost:4000/allcheckouts');
        if (!response.ok) {
          throw new Error('Failed to fetch checkouts');
        }
        const data = await response.json();
        setAllCheckouts(data);
      } catch (error) {
        console.error('Error fetching checkouts:', error);
      }
    };

    fetchCheckouts(); // Fetch checkouts when the component mounts
  }, []);

  return (
    <div className='list-checkout'>
      <h1>All Checkout List</h1>
      <table className="listcheckout-table">
        <thead>
          <tr>
            <th>Checkout ID</th>
            <th>Name</th>
            <th>Address</th>
            <th>City</th>
            <th>State</th>
            <th>Zip</th>
            <th>Credit Card No.</th>
            <th>Expiration</th>
            <th>CCV</th>
          </tr>
        </thead>
        <tbody>
          {allCheckouts.map((checkout, index) => (
            <tr key={index}>
              <td>{checkout._id}</td>
              <td>{checkout.name}</td>
              <td>{checkout.address}</td>
              <td>{checkout.city}</td>
              <td>{checkout.state}</td>
              <td>{checkout.zip}</td>
              <td>{checkout.cardNumber}</td>
              <td>{checkout.expiration}</td>
              <td>{checkout.ccv}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListCheckout;
