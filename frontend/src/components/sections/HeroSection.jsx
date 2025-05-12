'use client';
import React from 'react';
import Link from 'next/link';
export default function HeroSection() {
  return (
    <section className="relative min-h-screen pt-32 flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Dark gradient background */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          background: 'linear-gradient(to bottom, rgba(2,6,23,0.95) 0%, rgba(17,24,39,0.95) 100%)'
        }}
      />

      {/* Large subtle gradient on the left */}
      <div 
        className="absolute z-5 left-0 top-0 h-screen w-[50vw]"
        style={{
          background: 'radial-gradient(circle at left, rgba(56, 189, 248, 0.15) 0%, rgba(59, 130, 246, 0.05) 30%, transparent 70%)',
          filter: 'blur(80px)',
        }}
      />

      {/* Large subtle gradient on the right */}
      <div 
        className="absolute z-5 right-0 top-0 h-screen w-[50vw]"
        style={{
          background: 'radial-gradient(circle at right, rgba(52, 211, 153, 0.15) 0%, rgba(16, 185, 129, 0.05) 30%, transparent 70%)',
          filter: 'blur(80px)',
        }}
      />

      {/* Glowing orb effects */}
      <div 
        className="absolute z-10 left-[10%] top-[20%] h-[300px] w-[300px] rounded-full mix-blend-screen"
        style={{
          background: 'radial-gradient(circle at center, rgba(56, 189, 248, 0.4) 0%, rgba(59, 130, 246, 0.1) 30%, transparent 70%)',
          filter: 'blur(40px)',
        }}
      />
      <div 
        className="absolute z-10 right-[15%] top-[60%] h-[250px] w-[250px] rounded-full mix-blend-screen"
        style={{
          background: 'radial-gradient(circle at center, rgba(52, 211, 153, 0.3) 0%, rgba(16, 185, 129, 0.1) 30%, transparent 70%)',
          filter: 'blur(40px)',
        }}
      />
      <div 
        className="absolute z-10 right-[5%] top-[10%] h-[200px] w-[200px] rounded-full mix-blend-screen"
        style={{
          background: 'radial-gradient(circle at center, rgba(125, 211, 252, 0.3) 0%, rgba(56, 189, 248, 0.1) 30%, transparent 70%)',
          filter: 'blur(40px)',
        }}
      />
      <div 
        className="absolute z-10 left-[15%] bottom-[15%] h-[280px] w-[280px] rounded-full mix-blend-screen"
        style={{
          background: 'radial-gradient(circle at center, rgba(52, 211, 153, 0.35) 0%, rgba(16, 185, 129, 0.1) 30%, transparent 70%)',
          filter: 'blur(40px)',
        }}
      />

      <div className="max-w-7xl mx-auto text-center relative z-10">
        {/* Main heading with refined gradient */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold leading-tight mb-8">
          Create Immersive{' '}
          <span className="bg-gradient-to-r from-sky-400 via-cyan-400 to-emerald-400 bg-clip-text text-transparent">
            Real-Time Experiences
          </span>
          <br />
          Without Complexity
        </h1>
        
        {/* Refined subheading */}
        <p className="text-xl sm:text-2xl text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed">
          Integrate high-quality{' '}
          <span className="bg-gradient-to-r from-sky-400 to-emerald-400 bg-clip-text text-transparent font-semibold">
            Chat, Audio & Video
          </span>{' '}
          with just a few lines of code. Enhanced with AI capabilities.
        </p>
        
        {/* CTA buttons with improved spacing */}
        <div className="flex flex-col sm:flex-row gap-8 justify-center mb-16">
          <Link
            href="/signup"
            className="relative group"
          >
            <div className="absolute -inset-0.5 bg-gradient-to-r from-sky-400 to-emerald-400 rounded-xl blur opacity-60 group-hover:opacity-100 transition duration-500" />
            <div className="relative px-6 py-3 bg-[#020617] rounded-xl leading-none">
              <div className="text-base font-medium bg-gradient-to-r from-sky-300 to-emerald-300 bg-clip-text text-transparent group-hover:from-sky-200 group-hover:to-emerald-200 transition-all duration-300">
                Get Started
              </div>
            </div>
          </Link>
          <Link
            href="/login"
            className="relative group"
          >
            <div className="absolute -inset-0.5 bg-gradient-to-r from-sky-400 to-emerald-400 rounded-xl blur opacity-60 group-hover:opacity-100 transition duration-500" />
            <div className="relative px-6 py-3 bg-[#020617] rounded-xl leading-none">
              <div className="text-base font-medium bg-gradient-to-r from-sky-300 to-emerald-300 bg-clip-text text-transparent group-hover:from-sky-200 group-hover:to-emerald-200 transition-all duration-300">
                Sign in
              </div>
            </div>
          </Link>
        </div>
        
        {/* Hero image card with refined styling */}
        <div
          className="relative w-full max-w-[1000px] mx-auto rounded-2xl overflow-hidden shadow-2xl group"
          id="card"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-sky-500/10 via-cyan-500/10 to-emerald-500/10 backdrop-blur-sm"></div>
          <div className="relative aspect-[16/9] rounded-2xl overflow-hidden bg-gray-900/80">
            {/* Ambient glow effect */}
            <div className="absolute -inset-2 bg-gradient-to-r from-sky-400/20 to-emerald-400/20 rounded-3xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-700" />
            
            <img
              src="/main.webp"
              alt="Platform Demo"
              className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity duration-300"
            />
            {/* Glass effect overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
          </div>
        </div>
      </div>
    </section>
  );
}