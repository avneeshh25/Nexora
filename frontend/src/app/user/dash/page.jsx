'use client'

import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export default function DashboardApi() {
  const [keysData, setKeysData] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    async function fetchKeys() {
      try {
        const res = await fetch('/apikey/user', {
          headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
        })
        const data = await res.json()
        // assume API returns [{ key, feature, createdAt, usageCount }, ...]
        setKeysData(data)
      } catch (err) {
        setError('Failed to load API data')
      } finally {
        setLoading(false)
      }
    }
    fetchKeys()
  }, [])

  const totalKeys = keysData.length
  const totalUsage = keysData.reduce((sum, k) => sum + (k.usageCount || 0), 0)
  const maxUsage = Math.max(...keysData.map(k => k.usageCount || 0), 1)

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64 text-white">
        Loading…
      </div>
    )
  }
  if (error) {
    return (
      <div className="text-red-400 text-center py-8">
        {error}
      </div>
    )
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen bg-gradient-to-r from-blue-900 via-purple-800 to-black p-6"
    >
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Summary cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <motion.div
            whileHover={{ scale: 1.03 }}
            className="p-6 bg-black/50 backdrop-blur rounded-xl shadow-lg text-center"
          >
            <h3 className="text-lg font-medium text-gray-300">API Keys Generated</h3>
            <p className="text-4xl font-bold text-white">{totalKeys}</p>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.03 }}
            className="p-6 bg-black/50 backdrop-blur rounded-xl shadow-lg text-center"
          >
            <h3 className="text-lg font-medium text-gray-300">Total API Calls</h3>
            <p className="text-4xl font-bold text-white">{totalUsage}</p>
          </motion.div>
        </div>

        {/* Detailed list */}
        <div className="bg-black/40 backdrop-blur rounded-xl p-6 shadow-inner">
          <h2 className="text-2xl font-semibold text-white mb-4">
            Your API Keys & Usage
          </h2>
          <ul className="space-y-4">
            {keysData.map((k) => (
              <motion.li
                key={k.key}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4 }}
                className="p-4 bg-black/30 rounded-lg flex flex-col md:flex-row md:items-center gap-4"
              >
                <div className="flex-1">
                  <p className="text-sm text-gray-400 break-all">
                    <span className="font-medium text-white">Key:</span>{' '}
                    {k.key.slice(0, 8)}…{k.key.slice(-6)}
                  </p>
                  <p className="text-sm text-gray-400">
                    <span className="font-medium text-white">Feature:</span>{' '}
                    {k.feature}
                  </p>
                  <p className="text-sm text-gray-400">
                    <span className="font-medium text-white">Created:</span>{' '}
                    {new Date(k.createdAt).toLocaleDateString()}
                  </p>
                </div>
                <div className="flex-1">
                  <p className="text-sm text-gray-400 mb-1">
                    <span className="font-medium text-white">Usage:</span>{' '}
                    {k.usageCount || 0} calls
                  </p>
                  <div className="w-full h-2 bg-gray-700 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-blue-500"
                      style={{
                        width: `${((k.usageCount || 0) / maxUsage) * 100}%`
                      }}
                    />
                  </div>
                </div>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  )
}