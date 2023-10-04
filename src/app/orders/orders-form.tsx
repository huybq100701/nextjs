'use client'
import React, { useState, useEffect } from 'react';
import { getOrders } from '../api/orders/orders';

interface Order {
  id: number;
  code: string;
  channel: string;
  total_price: number;
  order_date: string;
  order_status: number;
  email: string;
  full_name: string;
}

const OrdersForm = () => {
  const [events, setEvents] = useState<Order[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const payload = {
          columnFilters: {},
          sort: [],
          page: 1,
          pageSize: 10000,
        };

        const ordersData: Order[] = await getOrders(payload);

        if (Array.isArray(ordersData)) {
          setEvents(ordersData);
          console.log('Fetched orders data:', ordersData);
        } else {
          console.error('Data fetched is not an array:', ordersData);
        }
      } catch (error) {
        console.error('Error fetching orders:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container mx-auto">
      <section className="order-data bg-gray-100 p-4">
        <h2 className="text-2xl font-bold">Orders Data</h2>
        <ul className="mt-4">
          {events.map((event, index) => (
            <li key={index} className="border-b py-2">
              <p className="text-lg font-semibold">ID: {event.id}</p>
              <p>Code: {event.code}</p>
              <p>Channel: {event.channel}</p>
              <p>Total Price: {event.total_price}</p>
              <p>Order Date: {event.order_date}</p>
              <p>Order Status: {event.order_status}</p>
              <p>Email: {event.email}</p>
              <p>Full Name: {event.full_name}</p>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default OrdersForm;
