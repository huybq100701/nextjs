'use client'
import React, { useState, useEffect } from 'react';
import { getOrders } from '../api/orders/orders';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import moment from 'moment';

const localizer = momentLocalizer(moment);

const OrdersForm = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const payload = {
          columnFilters: {},
          sort: [],
          page: 1,
          pageSize: 10000,
        };

        const response = await getOrders(payload);
        if (response && response.result && Array.isArray(response.result)) {
          setEvents(response.result.map((event) => ({
            title: event.code,
            start: new Date(event.order_date),
            end: new Date(event.order_date),
          })));
          console.log('Fetched orders data:', response.result);
        } else {
          console.error('Invalid response data:', response);
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
        <div className="mt-4">
          <Calendar
            localizer={localizer}
            events={events}
            startAccessor="start"
            endAccessor="end"
            style={{ height: '500px' }} 
          />
        </div>
        <ul className="mt-4">
          {events.map((event, index) => (
            <li key={index} className="border-b py-2">
              <p className="text-lg font-semibold">ID: {event.id}</p>
              <p>Code: {event.title}</p>
              <p>Order Date: {moment(event.start).format('YYYY-MM-DD HH:mm')}</p>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default OrdersForm;
