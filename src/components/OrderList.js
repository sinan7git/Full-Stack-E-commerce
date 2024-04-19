import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import * as PropTypes from "prop-types";
// ... Styling components (Table, TableRow, etc.)

function TableRow({ order }) {
  return (
    <tr>
      <td>{order.id}</td>
      {/* Render other order details here */}
      <td>
        <Link to={`/admin/orders/${order.id}`}>View Details</Link>
      </td>
    </tr>
  );
}

TableRow.propTypes = {
  order: PropTypes.object.isRequired,
};


function OrderList() {
  const [orders, setOrders] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchOrders = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get('http://localhost:8000/api/v1/products/orders/');
        setOrders(response.data);
      } catch (error) {
        console.error('Error fetching orders:', error);
        // Handle the error appropriately
      } finally {
        setIsLoading(false);
      }
    };

    fetchOrders();
  }, []);

  return (
    <div>
      <h1>Order Management</h1>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <table>
          <tbody>
            {orders.map((order) => (
              <TableRow key={order.id} order={order} />
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
export default OrderList;
