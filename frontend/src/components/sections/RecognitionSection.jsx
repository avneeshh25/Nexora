import React from 'react';

export default function RecognitionSection() {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6">
            Project <span className="bg-gradient-to-r from-sky-400 to-emerald-400 bg-clip-text text-transparent">Recognition</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            The impact our final year project has made in the academic community
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Recognition Item 1 */}
          <div className="bg-gray-900/60 p-8 rounded-2xl hover-scale gradient-border relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 -mt-12 -mr-12 bg-gradient-to-br from-sky-400 to-emerald-400 rounded-full opacity-20"></div>
            <h3 className="text-2xl font-bold mb-4">Department Showcase Winner</h3>
            <p className="text-gray-300 mb-6">
              Selected as the top project in the Computer Science department's annual project showcase for innovation in accessible technology.
            </p>
            <div className="flex items-center text-sm text-gray-400">
              <span className="mr-2">Recognized by:</span>
              <span className="bg-gray-800 rounded-full px-3 py-1">University CS Department</span>
            </div>
          </div>
          
          {/* Recognition Item 2 */}
          <div className="bg-gray-900/60 p-8 rounded-2xl hover-scale gradient-border relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 -mt-12 -mr-12 bg-gradient-to-br from-sky-400 to-emerald-400 rounded-full opacity-20"></div>
            <h3 className="text-2xl font-bold mb-4">Student Innovation Award</h3>
            <p className="text-gray-300 mb-6">
              Received recognition for creating an open-source solution that addresses real educational needs during pandemic remote learning challenges.
            </p>
            <div className="flex items-center text-sm text-gray-400">
              <span className="mr-2">Awarded by:</span>
              <span className="bg-gray-800 rounded-full px-3 py-1">University Innovation Hub</span>
            </div>
          </div>
          
          {/* Recognition Item 3 */}
          <div className="bg-gray-900/60 p-8 rounded-2xl hover-scale gradient-border relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 -mt-12 -mr-12 bg-gradient-to-br from-sky-400 to-emerald-400 rounded-full opacity-20"></div>
            <h3 className="text-2xl font-bold mb-4">Open Source Contribution</h3>
            <p className="text-gray-300 mb-6">
              Project contributed to the GitHub student developer program as an exemplary educational project with real-world applications.
            </p>
            <div className="flex items-center text-sm text-gray-400">
              <span className="mr-2">Featured by:</span>
              <span className="bg-gray-800 rounded-full px-3 py-1">GitHub Education</span>
            </div>
          </div>
        </div>
        
        <div className="mt-16 bg-gray-900/40 p-8 rounded-2xl hover-scale gradient-border">
          <div className="flex flex-col md:flex-row items-center">
            <div className="w-full md:w-1/3 text-center mb-6 md:mb-0">
              <div className="font-mono text-5xl font-bold bg-gradient-to-r from-sky-400 to-emerald-400 bg-clip-text text-transparent">1,200+</div>
              <p className="text-gray-400 mt-2">Student Developers</p>
            </div>
            <div className="w-full md:w-1/3 text-center mb-6 md:mb-0">
              <div className="font-mono text-5xl font-bold bg-gradient-to-r from-sky-400 to-emerald-400 bg-clip-text text-transparent">15+</div>
              <p className="text-gray-400 mt-2">University Courses</p>
            </div>
            <div className="w-full md:w-1/3 text-center">
              <div className="font-mono text-5xl font-bold bg-gradient-to-r from-sky-400 to-emerald-400 bg-clip-text text-transparent">350+</div>
              <p className="text-gray-400 mt-2">GitHub Stars</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}