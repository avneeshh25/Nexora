"use client"

import { useEffect, useRef } from "react"

// Simple line chart component
export function LineChart() {
  const canvasRef = useRef(null)

  useEffect(() => {
    if (!canvasRef.current) return

    const ctx = canvasRef.current.getContext("2d")
    if (!ctx) return

    // Clear canvas
    ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height)

    // Set dimensions
    const width = canvasRef.current.width
    const height = canvasRef.current.height
    const padding = 40

    // Generate random data
    const dataPoints = 30
    const data = Array.from(
      { length: dataPoints },
      () => Math.floor(Math.random() * (height - padding * 2)) + padding
    )

    // Draw axes
    ctx.beginPath()
    ctx.strokeStyle = "#e2e8f0"
    ctx.moveTo(padding, padding)
    ctx.lineTo(padding, height - padding)
    ctx.lineTo(width - padding, height - padding)
    ctx.stroke()

    // Draw line chart
    ctx.beginPath()
    ctx.strokeStyle = "#3b82f6"
    ctx.lineWidth = 2

    const pointWidth = (width - padding * 2) / (dataPoints - 1)

    data.forEach((point, i) => {
      const x = padding + i * pointWidth
      const y = height - point

      if (i === 0) {
        ctx.moveTo(x, y)
      } else {
        ctx.lineTo(x, y)
      }
    })

    ctx.stroke()

    // Draw gradient
    const gradient = ctx.createLinearGradient(0, 0, 0, height)
    gradient.addColorStop(0, "rgba(59, 130, 246, 0.2)")
    gradient.addColorStop(1, "rgba(59, 130, 246, 0)")

    ctx.beginPath()
    ctx.fillStyle = gradient

    // Start at the bottom left
    ctx.moveTo(padding, height - padding)

    // Draw the data points again
    data.forEach((point, i) => {
      const x = padding + i * pointWidth
      const y = height - point

      if (i === 0) {
        ctx.lineTo(x, y)
      } else {
        ctx.lineTo(x, y)
      }
    })

    // Complete the path to form a closed shape
    ctx.lineTo(padding + (dataPoints - 1) * pointWidth, height - padding)
    ctx.closePath()
    ctx.fill()
  }, [])

  return (
    <canvas
      ref={canvasRef}
      width={800}
      height={400}
      className="w-full h-full"
    />
  )
}

// Simple bar chart component
export function BarChart() {
  const canvasRef = useRef(null)

  useEffect(() => {
    if (!canvasRef.current) return

    const ctx = canvasRef.current.getContext("2d")
    if (!ctx) return

    // Clear canvas
    ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height)

    // Set dimensions
    const width = canvasRef.current.width
    const height = canvasRef.current.height
    const padding = 40

    // Generate random data
    const dataPoints = 8
    const data = Array.from(
      { length: dataPoints },
      () => Math.floor(Math.random() * (height - padding * 2 - 20)) + 20
    )

    // Draw axes
    ctx.beginPath()
    ctx.strokeStyle = "#e2e8f0"
    ctx.moveTo(padding, padding)
    ctx.lineTo(padding, height - padding)
    ctx.lineTo(width - padding, height - padding)
    ctx.stroke()

    // Draw bars
    const barWidth = (width - padding * 2) / dataPoints - 10

    data.forEach((value, i) => {
      const x = padding + i * ((width - padding * 2) / dataPoints) + 5
      const y = height - padding - value
      const barHeight = value

      // Draw bar
      ctx.beginPath()
      const gradient = ctx.createLinearGradient(0, y, 0, height - padding)
      gradient.addColorStop(0, "#3b82f6")
      gradient.addColorStop(1, "#93c5fd")
      ctx.fillStyle = gradient
      ctx.fillRect(x, y, barWidth, barHeight)
    })
  }, [])

  return (
    <canvas
      ref={canvasRef}
      width={800}
      height={400}
      className="w-full h-full"
    />
  )
}

// Simple pie chart component
export function PieChart() {
  const canvasRef = useRef(null)

  useEffect(() => {
    if (!canvasRef.current) return

    const ctx = canvasRef.current.getContext("2d")
    if (!ctx) return

    // Clear canvas
    ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height)

    // Set dimensions
    const width = canvasRef.current.width
    const height = canvasRef.current.height
    const centerX = width / 2
    const centerY = height / 2
    const radius = Math.min(width, height) / 2 - 40

    // Generate random data
    const data = [
      { value: 30, color: "#3b82f6" },
      { value: 25, color: "#93c5fd" },
      { value: 20, color: "#60a5fa" },
      { value: 15, color: "#2563eb" },
      { value: 10, color: "#1d4ed8" }
    ]

    // Calculate total
    const total = data.reduce((sum, item) => sum + item.value, 0)

    // Draw pie chart
    let startAngle = 0

    data.forEach(item => {
      const sliceAngle = (2 * Math.PI * item.value) / total

      ctx.beginPath()
      ctx.fillStyle = item.color
      ctx.moveTo(centerX, centerY)
      ctx.arc(centerX, centerY, radius, startAngle, startAngle + sliceAngle)
      ctx.closePath()
      ctx.fill()

      startAngle += sliceAngle
    })

    // Draw center circle (donut style)
    ctx.beginPath()
    ctx.fillStyle = "#ffffff"
    ctx.arc(centerX, centerY, radius * 0.6, 0, 2 * Math.PI)
    ctx.fill()
  }, [])

  return (
    <canvas
      ref={canvasRef}
      width={800}
      height={400}
      className="w-full h-full"
    />
  )
}
