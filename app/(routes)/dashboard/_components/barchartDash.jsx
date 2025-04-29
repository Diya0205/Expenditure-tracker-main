import React from 'react';
import { Bar, BarChart, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

function BarchartDash({ budgetList }) {
  // Default values using JavaScript default parameters
  const { width = '80%', height = 300 } = {};

  return (
    <div className='border rounded-lg p-5'>
      <h2 className='font-bold text-lg'>Activity</h2>
      <ResponsiveContainer width={width} height={height}>
        <BarChart
          data={budgetList}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <XAxis dataKey='name' />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey='totalSpend' fill='#E11D48' stackId='a' />
          <Bar dataKey='amount' fill='#ec91a5' stackId='a' />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default BarchartDash;
