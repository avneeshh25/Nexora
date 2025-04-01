// App.jsx
'use client'
import React, { useState } from 'react';
import { ArrowRight, Mic, Video, MessageSquare, VolumeX, FileText } from 'lucide-react';

import Particles from '@/components/Particles';

import BlurText from '@/components/BlurText';




const App = () => {
  const [activeTab, setActiveTab] = useState('audio');

  return (
    
    <div className="font-sans text-gray-800">
      <header className="flex flex-wrap  md:justify-start md:flex-nowrap z-50 w-full bg-white border-b border-gray-200 dark:bg-neutral-800 dark:border-neutral-700">
          <nav className="relative max-w-[85rem] w-full mx-auto md:flex md:items-center md:justify-between md:gap-3 py-2 px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center gap-x-1">
              <a
                className="flex-none font-semibold text-xl text-[#0de415] focus:outline-hidden focus:opacity-80"
                href="#"
                aria-label="Brand"
              >
                NEXORA
              </a>
              {/* Collapse Button */}
              <button
                type="button"
                className="hs-collapse-toggle md:hidden relative size-9 flex justify-center items-center font-medium text-sm rounded-lg border border-gray-200 text-gray-800 hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:border-neutral-700 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
                id="hs-header-base-collapse"
                aria-expanded="false"
                aria-controls="hs-header-base"
                aria-label="Toggle navigation"
                data-hs-collapse="#hs-header-base"
              >
                <svg
                  className="hs-collapse-open:hidden size-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1={3} x2={21} y1={6} y2={6} />
                  <line x1={3} x2={21} y1={12} y2={12} />
                  <line x1={3} x2={21} y1={18} y2={18} />
                </svg>
                <svg
                  className="hs-collapse-open:block shrink-0 hidden size-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 6 6 18" />
                  <path d="m6 6 12 12" />
                </svg>
                <span className="sr-only">Toggle navigation</span>
              </button>
              {/* End Collapse Button */}
            </div>
            {/* Collapse */}
            <div
              id="hs-header-base"
              className="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow md:block "
              aria-labelledby="hs-header-base-collapse"
            >
              <div className="overflow-hidden overflow-y-auto max-h-[75vh] [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-neutral-700 dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500">
                <div className="py-2 md:py-0  flex flex-col md:flex-row md:items-center gap-0.5 md:gap-1">
                  <div className="grow">
                    <div className="flex flex-col md:flex-row md:justify-end md:items-center gap-0.5 md:gap-1">
                      <a
                        className="p-2 flex items-center text-sm bg-gray-100 text-gray-800 hover:bg-gray-100 rounded-lg focus:outline-hidden focus:bg-gray-100 dark:bg-neutral-700 dark:text-[#0de415] dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
                        href="#"
                        aria-current="page"
                      >
                        <svg
                          className="shrink-0 size-4 me-3 md:me-2 block md:hidden"
                          xmlns="http://www.w3.org/2000/svg"
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8" />
                          <path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                        </svg>
                        Components
                      </a>
                      {/* Dropdown */}
                      <div className="hs-dropdown [--strategy:static] md:[--strategy:fixed] [--adaptive:none] [--is-collapse:true] md:[--is-collapse:false] ">
                        <button
                          id="hs-header-base-dropdown"
                          type="button"
                          className="hs-dropdown-toggle w-full p-2 flex items-center text-sm  hover:bg-gray-100 rounded-lg focus:outline-hidden focus:bg-gray-100 text-[#0de415] dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
                          aria-haspopup="menu"
                          aria-expanded="false"
                          aria-label="Dropdown"
                        >
                          <svg
                            className="shrink-0 size-4 me-3 md:me-2 block md:hidden"
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="m3 10 2.5-2.5L3 5" />
                            <path d="m3 19 2.5-2.5L3 14" />
                            <path d="M10 6h11" />
                            <path d="M10 12h11" />
                            <path d="M10 18h11" />
                          </svg>
                          More
                          <svg
                            className="hs-dropdown-open:-rotate-180 md:hs-dropdown-open:rotate-0 duration-300 shrink-0 size-4 ms-auto md:ms-1"
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="m6 9 6 6 6-6" />
                          </svg>
                        </button>
                        <div
                          className="hs-dropdown-menu transition-[opacity,margin] duration-[0.1ms] md:duration-[150ms] hs-dropdown-open:opacity-100 opacity-0 relative w-full md:w-52 hidden z-10 top-full ps-7 md:ps-0 md:bg-white md:rounded-lg md:shadow-md before:absolute before:-top-4 before:start-0 before:w-full before:h-5 md:after:hidden after:absolute after:top-1 after:start-4.5 after:w-0.5 after:h-[calc(100%-4px)] after:bg-gray-100 dark:md:bg-neutral-800 dark:after:bg-neutral-700"
                          role="menu"
                          aria-orientation="vertical"
                          aria-labelledby="hs-header-base-dropdown"
                        >
                          <div className="py-1 md:px-1 space-y-0.5">
                            <a
                              className="p-2 md:px-3 flex items-center text-sm text-gray-800 rounded-lg hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300 dark:focus:bg-neutral-700 dark:focus:text-neutral-300"
                              href="#"
                            >
                              About
                            </a>
                            <div className="hs-dropdown [--strategy:static] md:[--strategy:absolute] [--adaptive:none] md:[--trigger:hover] [--is-collapse:true] md:[--is-collapse:false] relative">
                              <button
                                id="hs-header-base-dropdown-sub"
                                type="button"
                                className="hs-dropdown-toggle w-full flex justify-between items-center text-sm text-gray-800 rounded-lg p-2 md:px-3 hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300 dark:focus:bg-neutral-700 dark:focus:text-neutral-300"
                              >
                                Sub Menu
                                <svg
                                  className="hs-dropdown-open:-rotate-180 md:hs-dropdown-open:-rotate-90 md:-rotate-90 duration-300 ms-auto shrink-0 size-4"
                                  xmlns="http://www.w3.org/2000/svg"
                                  width={24}
                                  height={24}
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth={2}
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                >
                                  <path d="m6 9 6 6 6-6" />
                                </svg>
                              </button>
                              <div
                                className="hs-dropdown-menu transition-[opacity,margin] duration-[0.1ms] md:duration-[150ms] hs-dropdown-open:opacity-100 opacity-0 relative md:w-48 hidden z-10 md:mt-2 md:mx-2.5! md:top-0 md:end-full ps-7 md:ps-0 md:bg-white md:rounded-lg md:shadow-md dark:bg-neutral-800 dark:divide-neutral-700 before:hidden md:before:block before:absolute before:-end-5 before:top-0 before:h-full before:w-5 md:after:hidden after:absolute after:top-1 after:start-4.5 after:w-0.5 after:h-[calc(100%-4px)] after:bg-gray-100 dark:md:bg-neutral-800 dark:after:bg-neutral-700"
                                role="menu"
                                aria-orientation="vertical"
                                aria-labelledby="hs-header-base-dropdown-sub"
                              >
                                <div className="p-1 space-y-1">
                                  <a
                                    className="p-2 md:px-3 flex items-center text-sm text-gray-800 rounded-lg hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300 dark:focus:bg-neutral-700 dark:focus:text-neutral-300"
                                    href="#"
                                  >
                                    About
                                  </a>
                                  <a
                                    className="p-2 md:px-3 flex items-center text-sm text-gray-800 rounded-lg hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300 dark:focus:bg-neutral-700 dark:focus:text-neutral-300"
                                    href="#"
                                  >
                                    Downloads
                                  </a>
                                  <a
                                    className="p-2 md:px-3 flex items-center text-sm text-gray-800 rounded-lg hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300 dark:focus:bg-neutral-700 dark:focus:text-neutral-300"
                                    href="#"
                                  >
                                    Team Account
                                  </a>
                                </div>
                              </div>
                            </div>
                            <a
                              className="p-2 md:px-3 flex items-center text-sm text-gray-800 rounded-lg hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300 dark:focus:bg-neutral-700 dark:focus:text-neutral-300"
                              href="#"
                            >
                              Downloads
                            </a>
                            <a
                              className="p-2 md:px-3 flex items-center text-sm text-gray-800 rounded-lg hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300 dark:focus:bg-neutral-700 dark:focus:text-neutral-300"
                              href="#"
                            >
                              Team Account
                            </a>
                          </div>
                        </div>
                      </div>
                      {/* End Dropdown */}
                      <a
                        className="p-2 flex items-center text-sm  hover:bg-gray-100 rounded-lg focus:outline-hidden focus:bg-gray-100 text-[#0de415] dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
                        href="#"
                      >
                        <svg
                          className="shrink-0 size-4 me-3 md:me-2 block md:hidden"
                          xmlns="http://www.w3.org/2000/svg"
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                          <circle cx={12} cy={7} r={4} />
                        </svg>
                        Account
                      </a>
                      <a
                        className="p-2 flex items-center text-sm  hover:bg-gray-100 rounded-lg focus:outline-hidden focus:bg-gray-100 text-[#0de415] dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
                        href="/contact"
                      >
                        <svg
                          className="shrink-0 size-4 me-3 md:me-2 block md:hidden"
                          xmlns="http://www.w3.org/2000/svg"
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M12 12h.01" />
                          <path d="M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
                          <path d="M22 13a18.15 18.15 0 0 1-20 0" />
                          <rect width={20} height={14} x={2} y={6} rx={2} />
                        </svg>
                        Contact Us
                      </a>
                      <a
                        className="p-2 flex items-center text-sm hover:bg-gray-100 rounded-lg focus:outline-hidden focus:bg-gray-100 text-[#0de415] dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
                        href="/about"
                      >
                        <svg
                          className="shrink-0 size-4 me-3 md:me-2 block md:hidden"
                          xmlns="http://www.w3.org/2000/svg"
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2" />
                          <path d="M18 14h-8" />
                          <path d="M15 18h-5" />
                          <path d="M10 6h8v4h-8V6Z" />
                        </svg>
                        About Us
                      </a>
                    </div>
                  </div>
                  <div className="my-2 md:my-0 md:mx-2">
                    <div className="w-full h-px md:w-px md:h-4 bg-gray-100 md:bg-gray-300 dark:bg-neutral-700" />
                  </div>
                  {/* Button Group */}
                  <div className=" flex flex-wrap items-center gap-x-1.5">
                    <a
                      className="py-[7px] px-2.5 inline-flex items-center font-medium text-sm rounded-lg border border-gray-200 bg-white text-gray-800 shadow-2xs hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 focus:outline-hidden focus:bg-gray-100 dark:border-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
                      href="#"
                    >
                      Sign in
                    </a>
                    <a
                      className="py-2 px-2.5 inline-flex items-center font-medium text-sm rounded-lg bg-blue-600 text-white hover:bg-blue-700 focus:outline-hidden focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:bg-blue-500 dark:hover:bg-blue-600 dark:focus:bg-blue-600"
                      href="#"
                    >
                      Get started
                    </a>
                  </div>
                  {/* End Button Group */}
                </div>
              </div>
            </div>
            {/* End Collapse */}
          </nav>
        </header>
        {/* ========== END HEADER ========== */}
    {/* <LampContainer>
      <motion.h1
        initial={{ opacity: 1, y: 0}}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="mt-8  bg-black bg-gradient-to-br from-white to-white py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl">
    NEXORA
      </motion.h1>
    </LampContainer> */}

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
            {/* <div className="md:w-1/2 text-white mb-10 md:mb-0">
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
            </div> */}
            <BlurText
  text="Isn't this so cool?!"
  delay={150}
  animateBy="words"
  direction="top"
  
  className="text-2xl mb-8"
/>
           
          

       

            
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
      <div style={{ width: '100%', height: '100%', position: 'absolute' }}>
  <Particles
    particleColors={['#0de415', '#0de415']}
    particleCount={800}
    particleSpread={10}
    speed={0.1}
    particleBaseSize={100}
    moveParticlesOnHover={false}
    alphaParticles={false}
    disableRotation={true}
  />
</div>
      <section id="features" className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-white">Powerful Real-Time Features</h2>
            <p className="text-xl bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent max-w-3xl mx-auto">Everything you need to build engaging interactive applications without the complexity</p>
          </div>
          

          <div className="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-6  ">
            <div className="flex-1 ">
              <div className="bg-white rounded-xl shadow-md overflow-hidden  transition-shadow">
                <div className="p-6">
                  <div className="w-12 h-12 bg-blue-100 rounded-full  flex items-center justify-center mb-4">
                    <Mic className="text-blue-800 w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 ">Crystal Clear Audio</h3>
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
