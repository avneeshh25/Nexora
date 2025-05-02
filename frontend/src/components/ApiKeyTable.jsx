'use client';
import React, { useState } from 'react';

const ApiKeyTable = () => {
  const [apiKeys, setApiKeys] = useState([
    {
      id: 1,
      project: 'Weather App',
      apiKey: 'sk_test_4eC39HqLyjWDarjtT1zdp7dc',
      usage: '45%',
      limit: '1000 req/day',
      status: 'active',
      lastUsed: '2023-05-15',
    },
    {
      id: 2,
      project: 'Stock Tracker',
      apiKey: 'sk_test_5aD39HqLyjWDarjtT1zdp8dc',
      usage: '78%',
      limit: '500 req/day',
      status: 'active',
      lastUsed: '2023-05-14',
    },
    {
      id: 3,
      project: 'E-commerce Analytics',
      apiKey: 'sk_test_6bE39HqLyjWDarjtT1zdp9dc',
      usage: '12%',
      limit: '2000 req/day',
      status: 'inactive',
      lastUsed: '2023-04-30',
    },
    {
      id: 4,
      project: 'Social Media Dashboard',
      apiKey: 'sk_test_7cF39HqLyjWDarjtT1zdp0dc',
      usage: '95%',
      limit: '800 req/day',
      status: 'limit_reached',
      lastUsed: '2023-05-15',
    },
    {
      id: 5,
      project: 'Financial Data API',
      apiKey: 'sk_test_8dG39HqLyjWDarjtT1zdp1dc',
      usage: '32%',
      limit: '1500 req/day',
      status: 'active',
      lastUsed: '2023-05-13',
    },
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const filteredKeys = apiKeys.filter(key =>
    key.project.toLowerCase().includes(searchTerm.toLowerCase()) ||
    key.apiKey.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.ceil(filteredKeys.length / itemsPerPage);
  const paginatedKeys = filteredKeys.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleStatusChange = (id, newStatus) => {
    setApiKeys(apiKeys.map(key =>
      key.id === id ? { ...key, status: newStatus } : key
    ));
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'active': return 'bg-green-100 text-green-800';
      case 'inactive': return 'bg-gray-100 text-gray-800';
      case 'limit_reached': return 'bg-red-100 text-red-800';
      default: return 'bg-blue-100 text-blue-800';
    }
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-medium text-gray-900">API Keys Management</h2>
        <div className="relative">
          <input
            type="text"
            placeholder="Search projects or keys..."
            className="pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <svg
            className="w-5 h-5 text-gray-400 absolute left-3 top-2.5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            ></path>
          </svg>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Project
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                API Key
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Usage
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Limit
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Last Used
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {paginatedKeys.map((key) => (
              <tr key={key.id}>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">{key.project}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-500 font-mono">{key.apiKey}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div 
                      className={`h-2.5 rounded-full ${
                        parseFloat(key.usage) > 90 ? 'bg-red-600' : 
                        parseFloat(key.usage) > 70 ? 'bg-yellow-500' : 'bg-green-600'
                      }`} 
                      style={{ width: key.usage }}
                    ></div>
                  </div>
                  <span className="text-xs text-gray-500">{key.usage}</span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {key.limit}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusColor(key.status)}`}>
                    {key.status.replace('_', ' ')}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {key.lastUsed}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <button className="text-blue-600 hover:text-blue-900 mr-3">Edit</button>
                  <button className="text-red-600 hover:text-red-900">Revoke</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-between mt-4">
        <div>
          <p className="text-sm text-gray-700">
            Showing <span className="font-medium">{(currentPage - 1) * itemsPerPage + 1}</span> to{' '}
            <span className="font-medium">
              {Math.min(currentPage * itemsPerPage, filteredKeys.length)}
            </span>{' '}
            of <span className="font-medium">{filteredKeys.length}</span> results
          </p>
        </div>
        <div className="flex space-x-2">
          <button
            onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
            disabled={currentPage === 1}
            className={`px-4 py-2 border rounded-md ${currentPage === 1 ? 'bg-gray-100 cursor-not-allowed' : 'hover:bg-gray-50'}`}
          >
            Previous
          </button>
          <button
            onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
            disabled={currentPage === totalPages}
            className={`px-4 py-2 border rounded-md ${currentPage === totalPages ? 'bg-gray-100 cursor-not-allowed' : 'hover:bg-gray-50'}`}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default ApiKeyTable;