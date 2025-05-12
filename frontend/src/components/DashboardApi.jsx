'use client'
import React, { useEffect, useState } from 'react'
import { Line } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js'

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend)

const API_BASE = process.env.NEXT_PUBLIC_API_URL || ''

export default function DashboardApi({ apiKey }) {
  const [usageHistory, setUsageHistory] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [user, setUser] = useState({ name: '', email: '' })  // ← new

  useEffect(() => {
    if (!apiKey) {
      setUsageHistory([])
      setLoading(false)
      return
    }
    setLoading(true)

    // fetch usage
    fetch(`${API_BASE}/apikey/usage?key=${apiKey}`, {
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
    })
      .then(res => {
        if (!res.ok) throw new Error('Failed to fetch usage')
        return res.json()
      })
      .then(data => setUsageHistory(data))
      .catch(() => setError('Unable to load usage data'))
      .finally(() => setLoading(false))

    // fetch user profile
    fetch(`${API_BASE}/user/me`, {
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
    })
      .then(res => res.ok ? res.json() : Promise.reject())
      .then(profile => setUser({ name: profile.name, email: profile.email }))
      .catch(() => {})
  }, [apiKey])

  if (loading) return <p className="text-white">Loading…</p>
  if (error) return <p className="text-red-500">{error}</p>
  if (!apiKey) return <p className="text-gray-300">Select or generate an API key first.</p>

  const labels = usageHistory.map(u => new Date(u.timestamp).toLocaleString())
  const counts = usageHistory.map(u => u.count)
  const chartData = {
    labels,
    datasets: [{
      label: 'Calls',
      data: counts,
      borderColor: 'cyan',
      backgroundColor: 'rgba(0,255,255,0.3)',
      fill: true
    }]
  }

  return (
    <div className="space-y-6">
      {/* display key and user info */}
      <div className="text-white space-y-1">
        <p><span className="font-semibold">API Key:</span> {apiKey}</p>
        <p><span className="font-semibold">User:</span> {user.name} ({user.email})</p>
      </div>

      <Line data={chartData} options={{ responsive: true }} />

      <table className="w-full text-sm text-gray-200">
        <thead>
          <tr>
            <th className="py-2 text-left">Timestamp</th>
            <th className="py-2">Count</th>
          </tr>
        </thead>
        <tbody>
          {usageHistory.map((u, i) => (
            <tr key={i} className="hover:bg-gray-800 transition">
              <td className="py-1">{new Date(u.timestamp).toLocaleString()}</td>
              <td className="py-1 text-center">{u.count}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}