'use client'
import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function Navbar() {
  const [show, setShow] = useState(true)
  const [lastY, setLastY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY
      if (currentY > lastY && currentY > 100) {
        setShow(false)
      } else {
        setShow(true)
      }
      setLastY(currentY)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastY])

  const linkVariants = {
    hover: { scale: 1.1, color: '#60A5FA' }
  }

  return (
    <motion.nav
      initial={{ y: 0, opacity: 1 }}
      animate={{ y: show ? 0 : -100, opacity: show ? 1 : 0 }}
      transition={{ type: 'tween', duration: 0.3 }}
      className="fixed top-0 left-0 w-full bg-gradient-to-r from-blue-900 via-purple-800 to-black shadow-lg z-50"
    >
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        <motion.div
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Link href="/" className="text-white text-2xl font-extrabold tracking-wide">
            Nexora
          </Link>
        </motion.div>
        <ul className="flex space-x-8">
          {[
            { href: '/', label: 'Home' },
            { href: '/about', label: 'About Us' },
            { href: '/contact', label: 'Contact Us' }
          ].map((item) => (
            <motion.li
              key={item.href}
              variants={linkVariants}
              whileHover="hover"
              className="list-none"
            >
              <Link
                href={item.href}
                className="text-gray-200 hover:text-white font-medium transition-colors duration-200"
              >
                {item.label}
              </Link>
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.nav>
  )
}