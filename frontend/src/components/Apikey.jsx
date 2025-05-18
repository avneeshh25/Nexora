'use client'
import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { IconCopy, IconCheck, IconTrash } from '@tabler/icons-react'
import Button from '@/components/Buttoni'

const getToken = () => localStorage.getItem('token')
const API_BASE = process.env.NEXT_PUBLIC_API_URL || ''  // ← ensure you set this in your .env

export default function ApiKeyDashboard({ onKeyGenerated }) {
  const [feature, setFeature] = useState('chat')
  const [apiKey, setApiKey] = useState('')
  const [loading, setLoading] = useState(false)
  const [copied, setCopied] = useState(false)
  const [keys, setKeys] = useState([])
  const [refresh, setRefresh] = useState(false)

  useEffect(() => {
    async function fetchKeys() {
      try {
        const res = await fetch(`${API_BASE}/apikey/user`, {
          headers: { Authorization: `Bearer ${getToken()}` }
        })
        if (!res.ok) throw await res.json()
        setKeys(await res.json())
      } catch (err) {
        console.error('Fetch keys error:', err)
        setKeys([])
      }
    }
    fetchKeys()
  }, [refresh])

  const handleGenerate = async () => {
    setLoading(true)
    setApiKey('')
    setCopied(false)

    try {
      const res = await fetch(`${API_BASE}/apikey/generate`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${getToken()}`
        },
        body: JSON.stringify({ feature })
      })
      
      // Check if response is actually JSON before parsing
      const contentType = res.headers.get('content-type')
      if (!contentType || !contentType.includes('application/json')) {
        const text = await res.text()
        console.error('Non-JSON response:', text)
        throw new Error(`Server returned non-JSON response: ${res.status} ${res.statusText}`)
      }
      
      const payload = await res.json()
      if (!res.ok) {
        throw new Error(payload.error || 'Failed to generate API key')
      }
      
      setApiKey(payload.key)
      onKeyGenerated(payload.key)          // ← notify parent
      setRefresh(r => !r)
      fetchUsageByKey(payload.key)         // optional: pre-fetch if you embed usage here
    } catch (err) {
      console.error('Generate key error:', err)
      alert(err.message)
    } finally {
      setLoading(false)
    }
  }

  const handleCopy = key => {
    navigator.clipboard.writeText(key)
    setCopied(true)
    setTimeout(() => setCopied(false), 1500)
  }

  const handleRevoke = async key => {
    if (!confirm('Revoke this API key?')) return
    try {
      const res = await fetch(`${API_BASE}/apikey/revoke`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${getToken()}`
        },
        body: JSON.stringify({ key })
      })
      if (!res.ok) throw await res.json()
      setRefresh(r => !r)
    } catch (err) {
      console.error('Revoke key error:', err)
      alert(err.error || 'Failed to revoke key')
    }
  }

  const handleViewUsage = key => {
    setApiKey(key)
    onKeyGenerated(key)                   // ← notify parent on “View Usage” click
    fetchUsageByKey(key)
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen flex flex-col items-center justify-start bg-gradient-to-r from-blue-900 via-purple-800 to-black py-12 px-4"
    >
      <motion.div
        whileHover={{ scale: 1.02 }}
        className="w-full max-w-2xl bg-black/60 backdrop-blur-md rounded-2xl shadow-xl p-6"
      >
        <h1 className="text-3xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-sky-300 animate-text">
          SDK API Key Dashboard
        </h1>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-6 space-y-4"
        >
          <label className="block text-sm font-medium text-white">
            Select Feature
          </label>
          <select
            className="w-full bg-black/40 border border-emerald-300 focus:border-sky-300 rounded-lg px-3 py-2 text-white transition"
            value={feature}
            onChange={e => setFeature(e.target.value)}
          >
            <option value="chat">Chat</option>
            <option value="video">Video Calling</option>
          </select>

          <button
            onClick={handleGenerate}
            disabled={loading}
            className="inline-flex items-center justify-center bg-gradient-to-r from-emerald-400 to-sky-300 hover:from-sky-300 hover:to-emerald-400 text-black font-semibold py-2 px-5 rounded-full shadow-lg transition-transform active:scale-95 disabled:opacity-50"
          >
            {loading ? 'Generating…' : 'Generate API Key'}
          </button>

          {apiKey && (
            <div className="mt-4 flex items-center bg-black/40 rounded-lg overflow-hidden">
              <input
                readOnly
                value={apiKey}
                className="flex-grow px-4 py-2 bg-transparent text-sm text-white"
              />
              <motion.button
                onClick={() => handleCopy(apiKey)}
                whileTap={{ scale: 0.9 }}
                className="px-3 bg-black/70 hover:bg-black/50 text-white"
              >
                {copied ? (
                  <IconCheck size={20} className="text-emerald-300" />
                ) : (
                  <IconCopy size={20} className="text-sky-300" />
                )}
              </motion.button>
            </div>
          )}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mb-6"
        >
          <h2 className="text-xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-emerald-300 to-sky-200">
            Your API Keys
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm bg-black/50 rounded-lg overflow-hidden">
              <thead className="bg-gradient-to-r from-emerald-500 to-sky-400 text-white">
                <tr>
                  {['Key','Feature','Status','Created','Actions'].map(h => (
                    <th key={h} className="px-3 py-2 text-left">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {keys.length === 0 ? (
                  <tr>
                    <td colSpan={5} className="py-4 text-center text-gray-300">
                      No API keys found.
                    </td>
                  </tr>
                ) : (
                  keys.map(k => (
                    <motion.tr
                      key={k.key}
                      whileHover={{ backgroundColor: 'rgba(255,255,255,0.05)' }}
                      transition={{ type: 'tween' }}
                    >
                      <td className="px-3 py-2 break-all text-xs text-gray-200">{k.key}</td>
                      <td className="px-3 py-2 text-gray-200">{k.feature}</td>
                      <td className="px-3 py-2 text-gray-200">{k.status}</td>
                      <td className="px-3 py-2 text-gray-200">
                        {new Date(k.createdAt).toLocaleString()}
                      </td>
                      <td className="px-3 py-2 flex gap-2">
                        <button
                          onClick={() => handleCopy(k.key)}
                          className="flex items-center text-sky-300 hover:underline"
                        >
                          <IconCopy size={16} className="mr-1" /> Copy
                        </button>
                        {k.status === 'active' && (
                          <button
                            onClick={() => handleRevoke(k.key)}
                            className="flex items-center text-red-500 hover:underline"
                          >
                            <IconTrash size={16} className="mr-1" /> Revoke
                          </button>
                        )}
                        <button
                          onClick={() => handleViewUsage(k.key)}
                          className="flex items-center text-emerald-300 hover:underline"
                        >
                          View Usage
                        </button>
                      </td>
                    </motion.tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </motion.div>

        <div className="text-center mt-4">
          <Button className="bg-gradient-to-r from-emerald-400 to-sky-300 hover:from-sky-300 hover:to-emerald-400 text-black px-6 py-2 rounded-full shadow-md">
            View Documentation
          </Button>
        </div>
      </motion.div>
    </motion.div>
  )
}