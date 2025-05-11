'use client';
import React from 'react';

export default function AcademicUseCasesSection() {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6">
            Academic <span className="bg-gradient-to-r from-sky-400 to-emerald-400 bg-clip-text text-transparent">Applications</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            See how Nexora is enhancing educational experiences across campus
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Use Case 1 */}
          <div className="bg-gray-900/60 p-8 rounded-2xl hover-scale relative group">
            <div className="absolute inset-0 bg-gradient-to-b from-sky-400/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative z-10">
              <div className="w-16 h-16 bg-gradient-to-r from-sky-400 to-emerald-400 rounded-full mb-6 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">Virtual Classrooms</h3>
              <p className="text-gray-300 mb-6">
                Create interactive online classrooms with breakout rooms, shared whiteboards, and student participation tracking - perfect for remote learning scenarios.
              </p>
              <div className="flex items-center text-sm text-gray-400">
                <span className="mr-2">Used by:</span>
                <span className="bg-gray-800 rounded-full px-3 py-1">Computer Science Dept.</span>
              </div>
            </div>
          </div>
          
          {/* Use Case 2 */}
          <div className="bg-gray-900/60 p-8 rounded-2xl hover-scale relative group">
            <div className="absolute inset-0 bg-gradient-to-b from-sky-400/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative z-10">
              <div className="w-16 h-16 bg-gradient-to-r from-sky-400 to-emerald-400 rounded-full mb-6 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">Student Group Projects</h3>
              <p className="text-gray-300 mb-6">
                Facilitate seamless collaboration between student teams with integrated project management tools, real-time code sharing, and meeting recordings.
              </p>
              <div className="flex items-center text-sm text-gray-400">
                <span className="mr-2">Used by:</span>
                <span className="bg-gray-800 rounded-full px-3 py-1">Engineering Students</span>
              </div>
            </div>
          </div>
          
          {/* Use Case 3 */}
          <div className="bg-gray-900/60 p-8 rounded-2xl hover-scale relative group">
            <div className="absolute inset-0 bg-gradient-to-b from-sky-400/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative z-10">
              <div className="w-16 h-16 bg-gradient-to-r from-sky-400 to-emerald-400 rounded-full mb-6 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">Research Collaboration</h3>
              <p className="text-gray-300 mb-6">
                Connect research teams and faculty mentors with secure data sharing, AI-assisted transcription for interviews, and multi-participant video conferencing.
              </p>
              <div className="flex items-center text-sm text-gray-400">
                <span className="mr-2">Used by:</span>
                <span className="bg-gray-800 rounded-full px-3 py-1">Graduate Studies</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}