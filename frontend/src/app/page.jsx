// App.jsx
'use client'
import React, { useState } from 'react';
import { ArrowRight, Mic, Video, MessageSquare, VolumeX, FileText } from 'lucide-react';

const App = () => {
  const [activeTab, setActiveTab] = useState('audio');

  return (
    <div className="font-sans text-gray-800">
      {/* Header */}<button className="relative px-10 py-4 text-lg font-semibold text-white bg-green-500 rounded-full shadow-lg transition-all overflow-hidden group">
      <span className="absolute inset-0 w-full h-full bg-green-400 scale-0 group-hover:scale-100 transition-transform duration-300 ease-out"></span>
      <span className="relative z-10 group-hover:text-black transition-colors duration-300">
        Book a Demo
      </span>
    </button>
      
      

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-black">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover opacity-50"
          autoPlay
          loop
          muted
        >
          <source src="/3130284-uhd_3840_2160_30fps.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 text-white mb-10 md:mb-0">
              <h2 className="text-4xl lg:text-5xl font-bold leading-tight mb-6">
                Build Real-Time Interactive <span className="bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">Experiences</span>
              </h2>
              <p className="text-xl text-blue-100 mb-8">Integrate high-quality audio, video, and chat with just a few lines of code. Enhanced with AI-powered features.</p>
              <div className="flex flex-wrap gap-4">
                <button className="px-6 py-3 rounded-md bg-white text-blue-900 font-medium hover:bg-blue-50 transition-colors flex items-center">
                  Start Building <ArrowRight className="ml-2 w-5 h-5" />
                </button>
                <button className="px-6 py-3 rounded-md border border-white text-white font-medium hover:bg-black hover:bg-opacity-10 transition-colors">View Documentation</button>
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="bg-white p-6 rounded-xl shadow-xl">
                <div className="bg-gradient-to-r from-blue-100 to-indigo-100 rounded-lg p-6 h-64 flex items-center justify-center">
                  <img src="friends-family-making" alt="Platform demonstration" className="rounded-lg shadow-md" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      

      {/* Features Section */}
      <section id="features" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Powerful Real-Time Features</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Everything you need to build engaging interactive applications without the complexity</p>
          </div>
          

          <div className="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-6">
            <div className="flex-1">
              <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div className="p-6">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                    <Mic className="text-blue-800 w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Crystal Clear Audio</h3>
                  <p className="text-gray-600">Deliver high-quality audio with minimal latency, perfect for virtual events and meetings.</p>
                </div>
              </div>
            </div>

            <div className="flex-1">
              <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div className="p-6">
                  <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mb-4">
                    <Video className="text-indigo-800 w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">HD Video Streaming</h3>
                  <p className="text-gray-600">Smooth video communication with adaptive quality to maintain connections regardless of network conditions.</p>
                </div>
              </div>
            </div>

            <div className="flex-1">
              <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div className="p-6">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                    <MessageSquare className="text-purple-800 w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Real-Time Chat</h3>
                  <p className="text-gray-600">Engage users with text messaging that seamlessly integrates with audio and video experiences.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-6 mt-6">
            <div className="flex-1">
              <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div className="p-6">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                    <FileText className="text-green-800 w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Speech to Text</h3>
                  <p className="text-gray-600">Convert audio to text in real-time with our AI-powered transcription service.</p>
                </div>
              </div>
            </div>

            <div className="flex-1">
              <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div className="p-6">
                  <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-4">
                    <VolumeX className="text-red-800 w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">AI Noise Suppression</h3>
                  <p className="text-gray-600">Eliminate background noise and enhance voice clarity automatically with our AI algorithms.</p>
                </div>
              </div>
            </div>

            <div className="flex-1 invisible md:visible">
              {/* Empty div for grid alignment */}
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Tabs */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Build Any Interactive Experience</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Solutions for every industry and use case</p>
          </div>

          <div className="mb-8 flex justify-center">
            <div className="inline-flex rounded-md shadow-sm">
              <button
                onClick={() => setActiveTab('audio')}
                className={`px-5 py-2 text-sm font-medium rounded-l-lg border ${
                  activeTab === 'audio' 
                    ? 'bg-gradient-to-r from-blue-800 to-indigo-600 text-white' 
                    : 'bg-white text-gray-700 hover:bg-gray-50'
                }`}
              >
                Audio
              </button>
              <button
                onClick={() => setActiveTab('video')}
                className={`px-5 py-2 text-sm font-medium border-t border-b ${
                  activeTab === 'video' 
                    ? 'bg-gradient-to-r from-blue-800 to-indigo-600 text-white' 
                    : 'bg-white text-gray-700 hover:bg-gray-50'
                }`}
              >
                Video
              </button>
              <button
                onClick={() => setActiveTab('chat')}
                className={`px-5 py-2 text-sm font-medium border-t border-b ${
                  activeTab === 'chat' 
                    ? 'bg-gradient-to-r from-blue-800 to-indigo-600 text-white' 
                    : 'bg-white text-gray-700 hover:bg-gray-50'
                }`}
              >
                Chat
              </button>
              <button
                onClick={() => setActiveTab('ai')}
                className={`px-5 py-2 text-sm font-medium rounded-r-lg border ${
                  activeTab === 'ai' 
                    ? 'bg-gradient-to-r from-blue-800 to-indigo-600 text-white' 
                    : 'bg-white text-gray-700 hover:bg-gray-50'
                }`}
              >
                AI Features
              </button>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="p-6 md:p-8">
              {activeTab === 'audio' && (
                <div className="flex flex-col md:flex-row items-center">
                  <div className="md:w-1/2 mb-6 md:mb-0 md:pr-8">
                    <h3 className="text-2xl font-bold mb-4">Crystal Clear Audio</h3>
                    <p className="text-gray-600 mb-4">Our audio SDK delivers exceptional quality with minimal latency, perfect for:</p>
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-blue-800 rounded-full mr-2"></span>
                        Virtual events and conferences
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-blue-800 rounded-full mr-2"></span>
                        Team collaboration and meetings
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-blue-800 rounded-full mr-2"></span>
                        Live podcasts and broadcasts
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-blue-800 rounded-full mr-2"></span>
                        Interactive classrooms
                      </li>
                    </ul>
                  </div>
                  <div className="md:w-1/2">
                    <div className="bg-gradient-to-r from-blue-100 to-indigo-100 rounded-lg p-6 h-64 flex items-center justify-center">
                      <img src="/api/placeholder/400/320" alt="Audio platform" className="rounded-lg shadow-md" />
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'video' && (
                <div className="flex flex-col md:flex-row items-center">
                  <div className="md:w-1/2 mb-6 md:mb-0 md:pr-8">
                    <h3 className="text-2xl font-bold mb-4">HD Video Streaming</h3>
                    <p className="text-gray-600 mb-4">High-definition video communication with adaptive quality for:</p>
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-indigo-800 rounded-full mr-2"></span>
                        Remote work collaboration
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-indigo-800 rounded-full mr-2"></span>
                        Telemedicine and healthcare
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-indigo-800 rounded-full mr-2"></span>
                        Live streaming applications
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-indigo-800 rounded-full mr-2"></span>
                        Virtual events and webinars
                      </li>
                    </ul>
                  </div>
                  <div className="md:w-1/2">
                    <div className="bg-gradient-to-r from-blue-100 to-indigo-100 rounded-lg p-6 h-64 flex items-center justify-center">
                      <img src="/api/placeholder/400/320" alt="Video platform" className="rounded-lg shadow-md" />
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'chat' && (
                <div className="flex flex-col md:flex-row items-center">
                  <div className="md:w-1/2 mb-6 md:mb-0 md:pr-8">
                    <h3 className="text-2xl font-bold mb-4">Real-Time Chat</h3>
                    <p className="text-gray-600 mb-4">Engage users with text messaging that integrates seamlessly for:</p>
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-purple-800 rounded-full mr-2"></span>
                        Community platforms
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-purple-800 rounded-full mr-2"></span>
                        Customer support applications
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-purple-800 rounded-full mr-2"></span>
                        Interactive streaming events
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-purple-800 rounded-full mr-2"></span>
                        Team collaboration tools
                      </li>
                    </ul>
                  </div>
                  <div className="md:w-1/2">
                    <div className="bg-gradient-to-r from-blue-100 to-indigo-100 rounded-lg p-6 h-64 flex items-center justify-center">
                      <img src="/api/placeholder/400/320" alt="Chat platform" className="rounded-lg shadow-md" />
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'ai' && (
                <div className="flex flex-col md:flex-row items-center">
                  <div className="md:w-1/2 mb-6 md:mb-0 md:pr-8">
                    <h3 className="text-2xl font-bold mb-4">AI-Powered Features</h3>
                    <p className="text-gray-600 mb-4">Enhance user experience with our intelligent features:</p>
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-green-800 rounded-full mr-2"></span>
                        Real-time speech to text transcription
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-green-800 rounded-full mr-2"></span>
                        Advanced noise suppression
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-green-800 rounded-full mr-2"></span>
                        Auto-generated meeting summaries
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-green-800 rounded-full mr-2"></span>
                        Content moderation
                      </li>
                    </ul>
                  </div>
                  <div className="md:w-1/2">
                    <div className="bg-gradient-to-r from-blue-100 to-indigo-100 rounded-lg p-6 h-64 flex items-center justify-center">
                      <img src="/api/placeholder/400/320" alt="AI features" className="rounded-lg shadow-md" />
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-indigo-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Build Your Real-Time Experience?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">Get started with our SDKs today and launch your interactive application in minutes.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="px-8 py-4 rounded-md bg-white text-blue-900 font-medium hover:bg-blue-50 transition-colors text-lg">Start For Free</button>
            <button className="px-8 py-4 rounded-md border border-white text-white font-medium hover:bg-white hover:bg-opacity-10 transition-colors text-lg">Contact Sales</button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold text-white mb-4">RealTime Connect</h3>
              <p className="mb-4">Build interactive experiences with our simple yet powerful APIs.</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Platform</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white">Audio SDK</a></li>
                <li><a href="#" className="hover:text-white">Video SDK</a></li>
                <li><a href="#" className="hover:text-white">Chat SDK</a></li>
                <li><a href="#" className="hover:text-white">AI Features</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Resources</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white">Documentation</a></li>
                <li><a href="#" className="hover:text-white">API Reference</a></li>
                <li><a href="#" className="hover:text-white">Sample Projects</a></li>
                <li><a href="#" className="hover:text-white">Community</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Company</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white">About Us</a></li>
                <li><a href="#" className="hover:text-white">Blog</a></li>
                <li><a href="#" className="hover:text-white">Careers</a></li>
                <li><a href="#" className="hover:text-white">Contact</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p>© 2025 RealTime Connect. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-white">Terms</a>
              <a href="#" className="hover:text-white">Privacy</a>
              <a href="#" className="hover:text-white">Security</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
