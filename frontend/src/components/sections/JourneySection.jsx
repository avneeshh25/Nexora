'use client';
import React from 'react';

export default function JourneySection() {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6">
            Our <span className="bg-gradient-to-r from-sky-400 to-emerald-400 bg-clip-text text-transparent">Journey</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            From concept to creation - how our final year project evolved into a powerful communication SDK
          </p>
        </div>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-sky-400 via-emerald-400 to-emerald-400"></div>
          
          {/* Timeline items */}
          <div className="space-y-16">
            {/* Milestone 1 */}
            <div className="relative flex items-center justify-between">
              <div className="w-5/12 pr-8 text-right animate-float">
                <h3 className="text-2xl font-bold mb-2">Project Conception</h3>
                <p className="text-gray-300">We identified the need for an accessible communication SDK that students and educators could use without expensive licensing fees.</p>
              </div>
              <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-gradient-to-r from-sky-400 to-emerald-400 z-10 flex items-center justify-center">
                <span className="text-white text-xl font-bold">1</span>
              </div>
              <div className="w-5/12 pl-8"></div>
            </div>
            
            {/* Milestone 2 */}
            <div className="relative flex items-center justify-between">
              <div className="w-5/12 pr-8"></div>
              <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-gradient-to-r from-sky-400 to-emerald-400 z-10 flex items-center justify-center">
                <span className="text-white text-xl font-bold">2</span>
              </div>
              <div className="w-5/12 pl-8 animate-float-slow">
                <h3 className="text-2xl font-bold mb-2">Research & Development</h3>
                <p className="text-gray-300">Exploring WebRTC, socket connections, and encryption protocols to build a secure and efficient communication framework.</p>
              </div>
            </div>
            
            {/* Milestone 3 */}
            <div className="relative flex items-center justify-between">
              <div className="w-5/12 pr-8 text-right animate-float">
                <h3 className="text-2xl font-bold mb-2">Prototype Testing</h3>
                <p className="text-gray-300">Rigorous testing with fellow students across different devices and network conditions to ensure reliability.</p>
              </div>
              <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-gradient-to-r from-sky-400 to-emerald-400 z-10 flex items-center justify-center">
                <span className="text-white text-xl font-bold">3</span>
              </div>
              <div className="w-5/12 pl-8"></div>
            </div>
            
            {/* Milestone 4 */}
            <div className="relative flex items-center justify-between">
              <div className="w-5/12 pr-8"></div>
              <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-gradient-to-r from-sky-400 to-emerald-400 z-10 flex items-center justify-center">
                <span className="text-white text-xl font-bold">4</span>
              </div>
              <div className="w-5/12 pl-8 animate-float-slow">
                <h3 className="text-2xl font-bold mb-2">Nexora is Born</h3>
                <p className="text-gray-300">Launch of our final year project as a free, open SDK for educational institutions and student developers to integrate into their applications.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}