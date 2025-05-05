'use client'
import React, { useState, useEffect } from 'react';
import { IconCopy, IconCheck, IconTrash } from '@tabler/icons-react';
import Button from '@/components/Buttoni';

// Get the JWT token from localStorage or your auth context
const getToken = () => localStorage.getItem('token'); // Adjust if you store token elsewhere

const chatapi = () => {
  const [feature, setFeature] = useState('chat');
  const [apiKey, setApiKey] = useState('');
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);
  const [keys, setKeys] = useState([]);
  const [refresh, setRefresh] = useState(false);

  // Fetch all API keys for the user
  useEffect(() => {
    const fetchKeys = async () => {
      try {
        const res = await fetch('http://localhost:5000/apikey/user', {
          headers: {
            'Authorization': `Bearer ${getToken()}`
          }
        });
        const data = await res.json();
        setKeys(data);
      } catch (err) {
        setKeys([]);
      }
    };
    fetchKeys();
  }, [refresh]);

  // Generate new API key
  const handleGenerateApiKey = async () => {
    setLoading(true);
    setApiKey('');
    setCopied(false);
    try {
      const res = await fetch('http://localhost:5000/apikey/generate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${getToken()}`
        },
        body: JSON.stringify({ feature }),
      });
      const data = await res.json();
      setApiKey(data.key || '');
      setRefresh(r => !r); // Refresh keys list
    } catch (err) {
      setApiKey('Error generating key');
    }
    setLoading(false);
  };

  // Copy API key
  const handleCopy = (key) => {
    navigator.clipboard.writeText(key);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  // Revoke API key
  const handleRevoke = async (key) => {
    if (!window.confirm('Are you sure you want to revoke this API key?')) return;
    try {
      await fetch('http://localhost:5000/apikey/revoke', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${getToken()}`
        },
        body: JSON.stringify({ key }),
      });
      setRefresh(r => !r);
    } catch (err) {
      alert('Failed to revoke key');
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black px-2 sm:px-4">
      <div className="w-full max-w-2xl mt-12 p-4 sm:p-8 bg-gray-900 rounded shadow">
        <h1 className="text-2xl font-bold mb-6 text-blue-700">SDK API Key Dashboard</h1>
        {/* Generate Section */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-white mb-2">
            Select Feature
          </label>
          <select
            className="block w-full rounded bg-white border-gray-300 focus:border-blue-500 focus:ring-blue-500 mb-4"
            value={feature}
            onChange={e => setFeature(e.target.value)}
          >
            <option value="chat">Chat</option>
            <option value="video">Video Calling</option>
          </select>
          <button
            className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded disabled:opacity-60"
            onClick={handleGenerateApiKey}
            disabled={loading}
          >
            {loading ? 'Generating...' : 'Generate API Key'}
          </button>
          {apiKey && (
            <div className="mt-4 flex items-center">
              <input
                type="text"
                readOnly
                className="flex-grow rounded-l text-white border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                value={apiKey}
              />
              <button
                className={`bg-gray-200 px-3 rounded-r border-l border-gray-300 ${!apiKey ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-300'}`}
                onClick={() => handleCopy(apiKey)}
                disabled={!apiKey}
                title="Copy to clipboard"
              >
                {copied ? <IconCheck size={20} className="text-green-600" /> : <IconCopy size={20} className="text-gray-600" />}
              </button>
            </div>
          )}
        </div>
        {/* List Section */}
        <div className="mb-6">
          <h2 className="font-semibold mb-2 text-blue-700">Your API Keys</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border">
              <thead>
                <tr>
                  <th className="px-2 py-1 border">Key</th>
                  <th className="px-2 py-1 border">Feature</th>
                  <th className="px-2 py-1 border">Status</th>
                  <th className="px-2 py-1 border">Created</th>
                  <th className="px-2 py-1 border">Actions</th>
                </tr>
              </thead>
              <tbody>
                {keys.length === 0 && (
                  <tr>
                    <td colSpan={5} className="text-center py-2 text-gray-400">No API keys found.</td>
                  </tr>
                )}
                {keys.map(k => (
                  <tr key={k.key}>
                    <td className="px-2 py-1 border text-xs break-all">{k.key}</td>
                    <td className="px-2 py-1 border">{k.feature}</td>
                    <td className="px-2 py-1 border">{k.status}</td>
                    <td className="px-2 py-1 border">{new Date(k.createdAt).toLocaleString()}</td>
                    <td className="px-2 py-1 border flex gap-2">
                      <button
                        className="bg-gray-200 px-2 py-1 rounded text-xs flex items-center"
                        onClick={() => handleCopy(k.key)}
                        title="Copy"
                      >
                        <IconCopy size={16} className="mr-1" />
                        Copy
                      </button>
                      {k.status === 'active' && (
                        <button
                          className="bg-red-500 text-white px-2 py-1 rounded text-xs flex items-center"
                          onClick={() => handleRevoke(k.key)}
                          title="Revoke"
                        >
                          <IconTrash size={16} className="mr-1" />
                          Revoke
                        </button>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        {/* Integration Example */}
        {/* <div className="bg-blue-50 p-4 rounded mt-6">
          <h2 className="font-semibold mb-2 text-blue-700">Integration Example</h2>
          <pre className="text-xs text-gray-700 overflow-x-auto">
            {`// JavaScript SDK Example:
import { ChatSDK } from 'chat-sdk';

const apiClient = new ChatSDK({
  apiKey: '${apiKey || 'YOUR_API_KEY'}',
  feature: '${feature}',
  // ...other config
});

// Initialize connection
apiClient.connect();
`}
          </pre>
        </div> */}
        {/* DOCS BUTTON */}
      <Button/>

      </div>
    </div>
  );
};

export default chatapi;