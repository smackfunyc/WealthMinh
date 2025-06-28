import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { month: 'Jan', value: 7200000 },
  { month: 'Feb', value: 7350000 },
  { month: 'Mar', value: 7180000 },
  { month: 'Apr', value: 7420000 },
  { month: 'May', value: 7580000 },
  { month: 'Jun', value: 7650000 },
  { month: 'Jul', value: 7525000 },
  { month: 'Aug', value: 7720000 },
  { month: 'Sep', value: 7890000 },
  { month: 'Oct', value: 7980000 },
  { month: 'Nov', value: 8150000 },
  { month: 'Dec', value: 8325000 },
];

export default function PortfolioChart() {
  const formatValue = (value: number) => {
    return `$${(value / 1000000).toFixed(1)}M`;
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-slate-900">Total Assets Under Management</h3>
        <div className="flex items-center space-x-4 mt-2">
          <span className="text-3xl font-bold text-slate-900">$8.33M</span>
          <span className="inline-flex items-center px-2.5 py-1 rounded-full text-sm font-medium bg-emerald-100 text-emerald-800">
            +12.3% YTD
          </span>
        </div>
      </div>
      
      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
            <XAxis 
              dataKey="month" 
              stroke="#64748b"
              fontSize={12}
              tickLine={false}
              axisLine={false}
            />
            <YAxis 
              stroke="#64748b"
              fontSize={12}
              tickLine={false}
              axisLine={false}
              tickFormatter={formatValue}
            />
            <Tooltip 
              formatter={[(value: number) => [formatValue(value), 'AUM']]}
              labelStyle={{ color: '#1e293b' }}
              contentStyle={{ 
                backgroundColor: 'white', 
                border: '1px solid #e2e8f0', 
                borderRadius: '8px',
                boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'
              }}
            />
            <Line 
              type="monotone" 
              dataKey="value" 
              stroke="#3b82f6" 
              strokeWidth={3}
              dot={{ fill: '#3b82f6', strokeWidth: 2, r: 4 }}
              activeDot={{ r: 6, stroke: '#3b82f6', strokeWidth: 2 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}