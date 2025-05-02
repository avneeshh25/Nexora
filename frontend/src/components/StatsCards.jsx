'use client';
import React from 'react';

const StatsCards = () => {
  const stats = [
    { title: 'Total API Keys', value: '1,234', change: '+12%', trend: 'up' },
    { title: 'Active Projects', value: '89', change: '+5%', trend: 'up' },
    { title: 'Data Used (GB)', value: '1,245', change: '-2%', trend: 'down' },
    { title: 'Limit Reached', value: '23', change: '+3%', trend: 'up' },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
      {stats.map((stat, index) => (
        <div key={index} className="bg-white rounded-lg shadow p-6">
          <h3 className="text-sm font-medium text-gray-500">{stat.title}</h3>
          <p className="mt-1 text-3xl font-semibold text-gray-900">{stat.value}</p>
          <div className={`mt-2 flex items-center text-sm ${stat.trend === 'up' ? 'text-green-600' : 'text-red-600'}`}>
            {stat.trend === 'up' ? (
              <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18"></path>
              </svg>
            ) : (
              <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
              </svg>
            )}
            <span>{stat.change}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StatsCards;