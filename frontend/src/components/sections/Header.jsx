'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Glassmorphism overlay */}
      <div 
        className={`fixed top-0 left-0 w-full h-24 transition-all duration-500 ${
          isScrolled ? 'bg-black/50 backdrop-blur-xl' : 'bg-transparent'
        }`}
      />

      <header className={`fixed top-0 left-0 w-full z-50 px-6 transition-all duration-500 ${
        isScrolled ? 'py-4' : 'py-6'
      }`}>
        <div className="max-w-7xl mx-auto">
          <div className="relative flex items-center justify-between">
            {/* Logo with futuristic animation */}
            <Link href="/" className="group relative">
              <div className="absolute -inset-2 bg-gradient-to-r from-sky-400 to-emerald-400 rounded-lg opacity-20 group-hover:opacity-100 blur transition duration-500" />
              <div className="relative text-3xl font-bold bg-gradient-to-r from-white via-sky-200 to-white bg-clip-text text-transparent">
                Nexora
              </div>
            </Link>

            {/* Navigation Links */}
            <nav className="hidden md:block">
              <div className="relative flex space-x-2 bg-white/5 backdrop-blur-sm px-3 py-2 rounded-2xl">
                {/* Animated selection pill */}
                <div 
                  className="absolute h-full top-0 left-0 bg-gradient-to-r from-sky-400/20 to-emerald-400/20 backdrop-blur-sm rounded-xl transition-all duration-300"
                  style={{
                    width: '120px',
                    transform: `translateX(${activeLink === 'home' ? '0' : activeLink === 'about' ? '120px' : activeLink === 'features' ? '240px' : '360px'})`
                  }}
                />
                
                {['home', 'about', 'features', 'contact'].map((link) => (
                  <Link
                    key={link}
                    href={link === 'home' ? '/' : `/${link}`}
                    className={`relative px-8 py-2 text-sm font-medium rounded-xl transition-all duration-300 ${
                      activeLink === link 
                        ? 'text-white' 
                        : 'text-gray-400 hover:text-white'
                    }`}
                    onClick={() => setActiveLink(link)}
                  >
                    {link.charAt(0).toUpperCase() + link.slice(1)}
                  </Link>
                ))}
              </div>
            </nav>

            {/* Auth Buttons with futuristic design */}
            <div className="flex items-center space-x-4">
              <Link
                href="/login"
                className="relative px-6 py-2 text-sm font-medium text-white/80 hover:text-white transition-colors group"
              >
                <span className="relative z-10">Login</span>
                <div className="absolute inset-0 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left rounded-lg bg-gradient-to-r from-sky-400/20 to-emerald-400/20 backdrop-blur-sm" />
              </Link>
              <Link
                href="/signup"
                className="relative group"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-sky-400 to-emerald-400 rounded-xl blur opacity-60 group-hover:opacity-100 transition duration-500" />
                <div className="relative px-6 py-2 bg-black rounded-xl leading-none">
                  <div className="text-sm font-medium bg-gradient-to-r from-sky-400 to-emerald-400 bg-clip-text text-transparent group-hover:from-sky-300 group-hover:to-emerald-300 transition-all duration-300">
                    Sign Up
                  </div>
                </div>
              </Link>
            </div>

            {/* Mobile menu button */}
            <button className="md:hidden relative group p-2">
              <div className="absolute -inset-1 bg-gradient-to-r from-sky-400 to-emerald-400 rounded-lg opacity-20 group-hover:opacity-100 blur transition duration-500" />
              <div className="relative w-6 h-6 flex flex-col justify-center space-y-1.5">
                <span className="block w-full h-0.5 bg-white"></span>
                <span className="block w-full h-0.5 bg-white"></span>
                <span className="block w-full h-0.5 bg-white"></span>
              </div>
            </button>
          </div>
        </div>
      </header>
    </>
  );
}