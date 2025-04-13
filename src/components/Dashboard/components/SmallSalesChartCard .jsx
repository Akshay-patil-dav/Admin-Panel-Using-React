import React from 'react';
import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
} from 'recharts';

const chartData = [
  { time: '00:00', Sales: 30, Revenue: 12, Customers: 10 },
  { time: '01:00', Sales: 40, Revenue: 30, Customers: 9 },
  { time: '02:00', Sales: 25, Revenue: 40, Customers: 30 },
  { time: '03:00', Sales: 45, Revenue: 30, Customers: 20 },
  { time: '04:00', Sales: 35, Revenue: 32, Customers: 15 },
  { time: '05:00', Sales: 80, Revenue: 50, Customers: 25 },
  { time: '06:00', Sales: 60, Revenue: 40, Customers: 10 },
];

const SmallSalesChartCard = () => {
  return (
    <div className="sales-chart-card-container" id="sales-chart-card-wrapper">
      <div className="sales-chart-card-header">
        <h3 className="sales-chart-amount">200K</h3>
        <p className="sales-chart-subtitle">Today Sales</p>
      </div>
      <ResponsiveContainer width="100%" height={480}>
        <AreaChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="time" />
          <YAxis />
          <Tooltip />
          <Legend verticalAlign="top" height={30} />
          <Area type="monotone" dataKey="Sales" stroke="#3b82f6" fill="#3b82f622" />
          <Area type="monotone" dataKey="Revenue" stroke="#10b981" fill="#10b98122" />
          <Area type="monotone" dataKey="Customers" stroke="#f97316" fill="#f9731622" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SmallSalesChartCard;
