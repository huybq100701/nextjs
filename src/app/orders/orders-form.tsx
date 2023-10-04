'use client'
import React, { useState, useEffect } from 'react';
import { getOrders } from '../api/orders/orders';
import Calendar from 'react-calendar';

const OrdersForm = () => {
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

  const [events, setEvents] = useState<Order[]>([]);
  const [selectedDate, setSelectedDate] = useState<Date[]>([new Date()]); // Đặt kiểu dữ liệu của selectedDate là Date[]

  const handleDateChange = (date: Date[]) => {
    setSelectedDate(date);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const ordersData = await getOrders({});
        setEvents(ordersData);
        console.log('Fetched orders data:', ordersData);
      } catch (error) {
        console.error('Error fetching orders:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container">
      <section className="order-data">
        <h2>Orders Data</h2>
        <Calendar onChange={handleDateChange} value={selectedDate} />
        <h3>Orders for {selectedDate[0].toISOString().split('T')[0]}</h3>
        <ul>
          {events
            .filter((event) => {
              const orderDate = new Date(event.order_date).toISOString().split('T')[0];
              return selectedDate.some((date) => date.toISOString().split('T')[0] === orderDate);
            })
            .map((event, index) => (
              <li key={index}>
                <p>ID: {event.id}</p>
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
