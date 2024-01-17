import React from 'react';
import { Link } from 'react-router-dom';
import'./TableSection.css'
const TableSection = () => {
  return (
    <div class="recent_order">
        <h2>Recent orders</h2>
      <table>
      <thead>
        <tr>
            <th>Product Name</th>
            <th>Product Number</th>
            <th>Payments</th>
            <th>Status</th>
        </tr>
        </thead>
        <tbody>
            <tr>
                <td>PPF 0.3 microm</td>
                <td>P103</td>
                <td>Not fulfilled</td>
                <td>Pending</td>
                <td>Details</td>
            </tr>
            <tr>
                <td>PPF 0.3 microm</td>
                <td>P103</td>
                <td>Not fulfilled</td>
                <td>Pending</td>
                <td>Details</td>
            </tr>
            <tr>
                <td>Dispenser bottle</td>
                <td>d11</td>
                <td>fulfilled</td>
                <td>Pending</td>
                <td>Details</td>
            </tr>
            <tr>
                <td>Watter wall</td>
                <td>WH3</td>
                <td>Not fulfilled</td>
                <td>Pending</td>
                <td>Details</td>
            </tr>
        </tbody>
      </table>
      <Link to="">Show All Orders</Link>
    </div>
  );
}

export default TableSection;
