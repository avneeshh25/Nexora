import Footer from '@/components/sections/Footer';
import SpotlightCard from '@/components/SpotlightCard';
import React from 'react';

const chatting = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] sm:min-h-[80vh] lg:h-screen bg-black">
        <img
          className="absolute inset-0 w-full h-full object-cover opacity-12"
          src="https://img.freepik.com/premium-photo/businessman-uses-his-mobile-phone-receive-emails-with-white-colorful-envelope-floating_449728-18056.jpg?w=1380"
          alt="Chatting Hero"
        />
        <div className="relative z-10 bg-gradient-to-b from-violet-600/10 via-transparent to-black/50 h-full flex items-center">
          <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 lg:py-24 space-y-8">
            {/* Title */}
            <div className="max-w-3xl text-center mx-auto">
              <h1 className="block font-medium bg-gradient-to-r from-sky-400 to-emerald-400 bg-clip-text text-transparent text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
                Now It's Easier Than Ever To Build Real-Time Applications
              </h1>
            </div>
            {/* Subtitle */}
            <div className="max-w-3xl text-center mx-auto">
              <p className="text-base sm:text-lg md:text-xl text-white">
                Build your real-time chatting application without hassle and worry by using Nexora.
              </p>
            </div>
            {/* Buttons */}
            <div className="text-center">
              <a
                className="inline-flex justify-center items-center gap-x-3 text-center bg-gradient-to-tl from-blue-600 to-violet-600 shadow-lg hover:shadow-blue-700/50 border border-transparent text-white text-sm sm:text-base font-medium rounded-full focus:outline-none focus:shadow-blue-700/50 py-3 px-6"
                href="/user/docs"
              >
                Get Started
                <svg
                  className="shrink-0 w-5 h-5"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-black px-4 py-10 sm:px-8 sm:py-16 lg:px-20 lg:py-24">
        <h2 className="flex justify-center text-white text-3xl sm:text-4xl lg:text-5xl font-bold">
         <span className='bg-gradient-to-r from-sky-300 to-emerald-300 bg-clip-text text-transparent'> Chat Features</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          <SpotlightCard className="custom-spotlight-card hover:scale-90" spotlightColor="rgba(0, 229, 255, 0.2)">
            <svg className="size-15 p-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#ffffff" d="M64 0C28.7 0 0 28.7 0 64L0 352c0 35.3 28.7 64 64 64l96 0 0 80c0 6.1 3.4 11.6 8.8 14.3s11.9 2.1 16.8-1.5L309.3 416 448 416c35.3 0 64-28.7 64-64l0-288c0-35.3-28.7-64-64-64L64 0z"/></svg>
            <h1 className="text-gray-300 text-xl sm:text-2xl">Rich media messages</h1>
            <p className="text-white text-sm sm:text-base p-3">
              Support emojis, GPS locations, structured messages, push notifications, and rich-media files with auto-generated thumbnails with Nexora’s Chat API service.
            </p>
          </SpotlightCard>
          <SpotlightCard className="custom-spotlight-card hover:scale-90" spotlightColor="rgba(0, 229, 255, 0.2)">
            <svg className="size-15 p-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#ffffff" d="M278.6 9.4c-12.5-12.5-32.8-12.5-45.3 0l-64 64c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l9.4-9.4L224 224l-114.7 0 9.4-9.4c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-64 64c-12.5 12.5-12.5 32.8 0 45.3l64 64c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-9.4-9.4L224 288l0 114.7-9.4-9.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l64 64c12.5 12.5 32.8 12.5 45.3 0l64-64c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-9.4 9.4L288 288l114.7 0-9.4 9.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l64-64c12.5-12.5 12.5-32.8 0-45.3l-64-64c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l9.4 9.4L288 224l0-114.7 9.4 9.4c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-64-64z"/></svg>
            <h1 className="text-gray-300 text-xl sm:text-2xl">Channel and user management</h1>
            <p className="text-white text-sm sm:text-base p-3">
              Customize channel metadata, push notification behavior, and message history storage based on use cases and perform role-based user management.
            </p>
          </SpotlightCard>
          <SpotlightCard className="custom-spotlight-card hover:scale-90" spotlightColor="rgba(0, 229, 255, 0.2)">
            <svg className="size-15 p-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="#ffffff" d="M384 64c0-17.7 14.3-32 32-32l128 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-96 0 0 96c0 17.7-14.3 32-32 32l-96 0 0 96c0 17.7-14.3 32-32 32l-96 0 0 96c0 17.7-14.3 32-32 32L32 480c-17.7 0-32-14.3-32-32s14.3-32 32-32l96 0 0-96c0-17.7 14.3-32 32-32l96 0 0-96c0-17.7 14.3-32 32-32l96 0 0-96z"/></svg>
            <h1 className="text-gray-300 text-xl sm:text-2xl">Chat analytics</h1>
            <p className="text-white text-sm sm:text-base p-3">
              Easily monitor, measure, and improve quality of experience with Agora Analytics and Datadog integration, to keep a pulse on both usage and quality metrics from Agora’s Chat SDK for mobile and desktop.
            </p>
          </SpotlightCard>
          <SpotlightCard className="custom-spotlight-card hover:scale-90" spotlightColor="rgba(0, 229, 255, 0.2)">
            <svg className="size-15 p-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#ffffff" d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48L48 64zM0 176L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-208L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"/></svg>
            <h1 className="text-gray-300 text-xl sm:text-2xl">Message essentials</h1>
            <p className="text-white text-sm sm:text-base p-3">
              Allow offline messaging, message recall and delete, read receipts, presence and typing indicator, push notifications, and exporting chat history.
            </p>
          </SpotlightCard>
          <SpotlightCard className="custom-spotlight-card hover:scale-90" spotlightColor="rgba(0, 229, 255, 0.2)">
            <svg className="size-15 p-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#ffffff" d="M256 0c4.6 0 9.2 1 13.4 2.9L457.7 82.8c22 9.3 38.4 31 38.3 57.2c-.5 99.2-41.3 280.7-213.6 363.2c-16.7 8-36.1 8-52.8 0C57.3 420.7 16.5 239.2 16 140c-.1-26.2 16.3-47.9 38.3-57.2L242.7 2.9C246.8 1 251.4 0 256 0zm0 66.8l0 378.1C394 378 431.1 230.1 432 141.4L256 66.8s0 0 0 0z"/></svg>
            <h1 className="text-gray-300 text-xl sm:text-2xl">Security and compliance</h1>
            <p className="text-white text-sm sm:text-base p-3">
              Build a secure chat application with TLS/SSL and file encryption and ensure data privacy compliance by allowing users to erase their personal data.
            </p>
          </SpotlightCard>
          <SpotlightCard className="custom-spotlight-card hover:scale-90" spotlightColor="rgba(0, 229, 255, 0.2)">
            <svg className="size-15 p-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path fill="#ffffff" d="M0 128C0 92.7 28.7 64 64 64l192 0 48 0 16 0 256 0c35.3 0 64 28.7 64 64l0 256c0 35.3-28.7 64-64 64l-256 0-16 0-48 0L64 448c-35.3 0-64-28.7-64-64L0 128zm320 0l0 256 256 0 0-256-256 0zM178.3 175.9c-3.2-7.2-10.4-11.9-18.3-11.9s-15.1 4.7-18.3 11.9l-64 144c-4.5 10.1 .1 21.9 10.2 26.4s21.9-.1 26.4-10.2l8.9-20.1 73.6 0 8.9 20.1c4.5 10.1 16.3 14.6 26.4 10.2s14.6-16.3 10.2-26.4l-64-144zM160 233.2L179 276l-38 0 19-42.8zM448 164c11 0 20 9 20 20l0 4 44 0 16 0c11 0 20 9 20 20s-9 20-20 20l-2 0-1.6 4.5c-8.9 24.4-22.4 46.6-39.6 65.4c.9 .6 1.8 1.1 2.7 1.6l18.9 11.3c9.5 5.7 12.5 18 6.9 27.4s-18 12.5-27.4 6.9l-18.9-11.3c-4.5-2.7-8.8-5.5-13.1-8.5c-10.6 7.5-21.9 14-34 19.4l-3.6 1.6c-10.1 4.5-21.9-.1-26.4-10.2s.1-21.9 10.2-26.4l3.6-1.6c6.4-2.9 12.6-6.1 18.5-9.8l-12.2-12.2c-7.8-7.8-7.8-20.5 0-28.3s20.5-7.8 28.3 0l14.6 14.6 .5 .5c12.4-13.1 22.5-28.3 29.8-45L448 228l-72 0c-11 0-20-9-20-20s9-20 20-20l52 0 0-4c0-11 9-20 20-20z"/></svg>
            <h1 className="text-gray-300 text-xl sm:text-2xl ">Message translation</h1>
            <p className="text-white text-sm sm:text-base p-3">
              Enable auto, on-demand, or push translation so your users can chat in their preferred language.
            </p>
          </SpotlightCard>
        </div>
      </section>

      {/* Start Video Section */}
      <section className="bg-black">
        <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
          <div className="relative p-6 md:p-16">
            {/* Grid */}
            <div className="relative z-10 lg:grid lg:grid-cols-12 lg:gap-16 lg:items-center">
              <div className="mb-10 lg:mb-0 lg:col-span-6 lg:col-start-8 lg:order-2">
                <h2 className="text-3xl sm:text-4xl lg:text-6xl text-gray-800 font-bold dark:text-neutral-200">
                  <span className='bg-gradient-to-r from-sky-300 to-emerald-300 bg-clip-text text-transparent'>Boost</span> user engagement by adding <span className='bg-gradient-to-r from-sky-300 to-emerald-300 bg-clip-text text-transparent'>chat </span>to your RTC experience
                </h2>
                {/* Tab Navs */}
                <nav className="grid gap-4 mt-5 md:mt-10" aria-label="Tabs" role="tablist" aria-orientation="vertical">
                  <button type="button" className="hs-tab-active:bg-white hs-tab-active:shadow-md hs-tab-active:hover:border-transparent text-start hover:bg-gray-200 focus:outline-hidden focus:bg-gray-200 p-4 md:p-5 rounded-xl dark:hs-tab-active:bg-neutral-700 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700 active" id="tabs-with-card-item-1" aria-selected="true" data-hs-tab="#tabs-with-card-1" aria-controls="tabs-with-card-1" role="tab">
                    <span className="flex gap-x-6">
                      <svg className='shrink-0 mt-2 size-10 md:size-10 hs-tab-active:text-blue-600 text-gray-800 dark:hs-tab-active:text-blue-500 dark:text-neutral-200' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#ffffff" d="M64 0C28.7 0 0 28.7 0 64L0 352c0 35.3 28.7 64 64 64l96 0 0 80c0 6.1 3.4 11.6 8.8 14.3s11.9 2.1 16.8-1.5L309.3 416 448 416c35.3 0 64-28.7 64-64l0-288c0-35.3-28.7-64-64-64L64 0z"/></svg>
                      <span className="grow">
                        <span className="block text-2xl font-semibold hs-tab-active:text-blue-600 text-gray-800 dark:hs-tab-active:text-blue-500 dark:text-neutral-200">Integrate messaging effortlessly</span>
                        <span className="block mt-1 text-gray-800 dark:hs-tab-active:text-gray-200 dark:text-neutral-200">Build a truly immersive and engaging user experience with our web and mobile chat SDKs that work seamlessly with our video, voice, and streaming products.</span>
                      </span>
                    </span>
                  </button>

                  <button type="button" className="hs-tab-active:bg-white hs-tab-active:shadow-md hs-tab-active:hover:border-transparent text-start hover:bg-gray-200 focus:outline-hidden focus:bg-gray-200 p-4 md:p-5 rounded-xl dark:hs-tab-active:bg-neutral-700 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700" id="tabs-with-card-item-2" aria-selected="false" data-hs-tab="#tabs-with-card-2" aria-controls="tabs-with-card-2" role="tab">
                    <span className="flex gap-x-6">
                      <svg className='shrink-0 mt-2 size-10 md:size-10 hs-tab-active:text-blue-600 text-gray-800 dark:hs-tab-active:text-blue-500 dark:text-neutral-200' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#ffffff" d="M144 144l0 48 160 0 0-48c0-44.2-35.8-80-80-80s-80 35.8-80 80zM80 192l0-48C80 64.5 144.5 0 224 0s144 64.5 144 144l0 48 16 0c35.3 0 64 28.7 64 64l0 192c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 256c0-35.3 28.7-64 64-64l16 0z"/></svg>
                      <span className="grow">
                        <span className="block text-2xl font-semibold hs-tab-active:text-blue-600 text-gray-800 dark:hs-tab-active:text-blue-500 dark:text-neutral-200">Safeguard your community</span>
                        <span className="block mt-1 text-gray-800 dark:hs-tab-active:text-gray-200 dark:text-neutral-200">Protect users from unwanted profanity, offense, and inappropriate images or text with robust content moderation built into the chat platform.</span>
                      </span>
                    </span>
                  </button>

                  <button type="button" className="hs-tab-active:bg-white hs-tab-active:shadow-md hs-tab-active:hover:border-transparent text-start hover:bg-gray-200 focus:outline-hidden focus:bg-gray-200 p-4 md:p-5 rounded-xl dark:hs-tab-active:bg-neutral-700 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700" id="tabs-with-card-item-3" aria-selected="false" data-hs-tab="#tabs-with-card-3" aria-controls="tabs-with-card-3" role="tab">
                    <span className="flex gap-x-6">
                      <svg className='shrink-0 mt-2 size-10 md:size-10 hs-tab-active:text-blue-600 text-gray-800 dark:hs-tab-active:text-blue-500 dark:text-neutral-200' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#ffffff" d="M269.4 2.9C265.2 1 260.7 0 256 0s-9.2 1-13.4 2.9L54.3 82.8c-22 9.3-38.4 31-38.3 57.2c.5 99.2 41.3 280.7 213.6 363.2c16.7 8 36.1 8 52.8 0C454.7 420.7 495.5 239.2 496 140c.1-26.2-16.3-47.9-38.3-57.2L269.4 2.9zM256 112c8.8 0 16 7.2 16 16c0 33 39.9 49.5 63.2 26.2c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6C334.5 200.1 351 240 384 240c8.8 0 16 7.2 16 16s-7.2 16-16 16c-33 0-49.5 39.9-26.2 63.2c6.2 6.2 6.2 16.4 0 22.6s-16.4 6.2-22.6 0C311.9 334.5 272 351 272 384c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-33-39.9-49.5-63.2-26.2c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6C177.5 311.9 161 272 128 272c-8.8 0-16-7.2-16-16s7.2-16 16-16c33 0 49.5-39.9 26.2-63.2c-6.2-6.2-6.2-16.4 0-22.6s16.4-6.2 22.6 0C200.1 177.5 240 161 240 128c0-8.8 7.2-16 16-16zM232 256a24 24 0 1 0 0-48 24 24 0 1 0 0 48zm72 32a16 16 0 1 0 -32 0 16 16 0 1 0 32 0z"/></svg>
                      <span className="grow">
                        <span className="block text-2xl font-semibold hs-tab-active:text-blue-600 text-gray-800 dark:hs-tab-active:text-blue-500 dark:text-neutral-200">Ensure the highest level of security</span>
                        <span className="block mt-1 text-gray-800 dark:hs-tab-active:text-gray-200 dark:text-neutral-200">Nexora’s Chat APIs provide the flexibility to integrate powerful and interactive 3rd party solutions so you can fully customize the chat experience for your users.</span>
                      </span>
                    </span>
                  </button>
                </nav>
                {/* End Tab Navs */}
              </div>
              {/* End Col */}
              <div className="lg:col-span-6">
                <div className="relative">
                  {/* Tab Content */}
                  <div>
                    <div id="tabs-with-card-1" role="tabpanel" aria-labelledby="tabs-with-card-item-1">
                      <img className="shadow-xl shadow-gray-200 rounded-xl dark:shadow-gray-900/20 w-full h-64 sm:h-80 md:h-96 object-cover" src="https://plus.unsplash.com/premium_photo-1722169898948-5c7fa92f4042?q=80&w=2011&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Features Image" />
                    </div>
                    <div id="tabs-with-card-2" className="hidden" role="tabpanel" aria-labelledby="tabs-with-card-item-2">
                      <img className="shadow-xl shadow-gray-200 rounded-xl dark:shadow-gray-900/20 w-full h-64 sm:h-80 md:h-96 object-cover" src="https://images.unsplash.com/photo-1640021677186-54388b9e228c?q=80&w=2000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Features Image" />
                    </div>
                    <div id="tabs-with-card-3" className="hidden" role="tabpanel" aria-labelledby="tabs-with-card-item-3">
                      <img className="shadow-xl shadow-gray-200 rounded-xl dark:shadow-gray-900/20 w-full h-64 sm:h-80 md:h-96 object-cover" src="https://plus.unsplash.com/premium_photo-1677093905889-c60a2db5d5c8?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Features Image" />
                    </div>
                  </div>
                  {/* End Tab Content */}
                  {/* SVG Element */}
                  <div className="hidden absolute top-0 end-0 translate-x-20 md:block lg:translate-x-20">
                    <svg className="w-16 h-auto text-orange-500" width="121" height="135" viewBox="0 0 121 135" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 16.4754C11.7688 27.4499 21.2452 57.3224 5 89.0164" stroke="currentColor" strokeWidth="10" strokeLinecap="round"/>
                      <path d="M33.6761 112.104C44.6984 98.1239 74.2618 57.6776 83.4821 5" stroke="currentColor" strokeWidth="10" strokeLinecap="round"/>
                      <path d="M50.5525 130C68.2064 127.495 110.731 117.541 116 78.0874" stroke="currentColor" strokeWidth="10" strokeLinecap="round"/>
                    </svg>
                  </div>
                  {/* End SVG Element */}
                </div>
              </div>
              {/* End Col */}
            </div>
            {/* End Grid */}
            {/* Background Color */}
            <div className="absolute inset-0 grid grid-cols-12 size-full">
              <div className="col-span-full lg:col-span-7 lg:col-start-6 bg-gray-100 w-full h-5/6 rounded-xl sm:h-3/4 lg:h-full dark:bg-neutral-800"></div>
            </div>
            {/* End Background Color */}
          </div>
        </div>
      </section>

      {/* Use Case Section */}
      <section className="bg-black px-4 py-10 sm:px-8 lg:px-20 lg:py-24">
        <div className="py-6 sm:py-8 lg:py-12">
          <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
            <div className="mb-6 flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4">
              <h2 className="text-2xl font-bold bg-gradient-to-r from-sky-300 to-emerald-300 bg-clip-text text-transparent lg:text-5xl">Add chat to any real-time communication use case</h2>
              {/* <a href="#" className="inline-block rounded-lg border bg-white px-4 py-2 text-center text-sm font-semibold text-gray-500 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-100 focus-visible:ring active:bg-gray-200 md:px-8 md:py-3 md:text-base mt-4 sm:mt-0">Show more</a> */}
            </div>
            <div className="grid gap-x-3 gap-y-6 sm:grid-cols-2 md:gap-x-6 lg:grid-cols-2 xl:grid-cols-3">
              <div>
                <a href="#" className="group mb-2 block h-96 overflow-hidden rounded-lg bg-gray-100 shadow-lg lg:mb-3">
                  <img src="https://plus.unsplash.com/premium_photo-1663013500813-328e1ab77be7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" loading="lazy" alt="Photo by Austin Wade" className="h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
                </a>
                <div className="flex flex-col">
                  <span className="text-white text-3xl">EDUCATION</span>
                  <a href="#" className="text-lg font-bold text-white transition duration-100 hover:text-gray-500 lg:text-xl">Make learning more accessible to students everywhere with virtual classrooms, leveraging real-time communication to enhance interaction and engagement in the educational process.</a>
                </div>
              </div>
              <div>
                <a href="#" className="group mb-2 block h-96 overflow-hidden rounded-lg bg-gray-100 shadow-lg lg:mb-3">
                  <img src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" loading="lazy" alt="Photo by engin akyurt" className="h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
                </a>
                <div className="flex flex-col">
                  <span className="text-white text-3xl">FUTURE OF WORK</span>
                  <a href="#" className="text-lg font-bold text-white transition duration-100 hover:text-gray-500 lg:text-xl">Connect professionals worldwide for more productive collaboration with a cross-platform video conferencing API, integrating live streaming, video chat functionality, and virtual backgrounds, and chat messaging to facilitate real-time engagement in professional settings.</a>
                </div>
              </div>
              <div>
                <a href="#" className="group mb-2 block h-96 overflow-hidden rounded-lg bg-gray-100 shadow-lg lg:mb-3">
                  <img src="https://images.unsplash.com/photo-1623934199716-dc28818a6ec7?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" loading="lazy" alt="Photo by Austin Wade" className="h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
                </a>
                <div className="flex flex-col">
                  <span className="text-white text-3xl">GAMING</span>
                  <a href="#" className="text-lg font-bold text-white transition duration-100 hover:text-gray-500 lg:text-xl">Increase in-game session time, stickiness, and gamer retention with live video chatting, extending compatibility across multiple platforms to ensure a seamless gaming experience for all users.</a>
                </div>
              </div>
              <div>
                <a href="#" className="group mb-2 block h-96 overflow-hidden rounded-lg bg-gray-100 shadow-lg lg:mb-3">
                  <img src="https://images.unsplash.com/photo-1542744095-291d1f67b221?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" loading="lazy" alt="Photo by Austin Wade" className="h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
                </a>
                <div className="flex flex-col">
                  <span className="text-white text-3xl">RETAIL</span>
                  <a href="#" className="text-lg font-bold text-white transition duration-100 hover:text-gray-500 lg:text-xl">Create new revenue streams through live interactive shopping experiences with our video APIs.</a>
                </div>
              </div>
              <div>
                <a href="#" className="group mb-2 block h-96 overflow-hidden rounded-lg bg-gray-100 shadow-lg lg:mb-3">
                  <img src="https://images.unsplash.com/photo-1516251193007-45ef944ab0c6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" loading="lazy" alt="Photo by Austin Wade" className="h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
                </a>
                <div className="flex flex-col">
                  <span className="text-white text-3xl">SOCIAL</span>
                  <a href="#" className="text-lg font-bold text-white transition duration-100 hover:text-gray-500 lg:text-xl">Drive deeper connections with friends and family across the world, enriching each moment with customized video experiences tailored to your personal interactions and preferences.</a>
                </div>
              </div>
              <div>
                <a href="#" className="group mb-2 block h-96 overflow-hidden rounded-lg bg-gray-100 shadow-lg lg:mb-3">
                  <img src="https://plus.unsplash.com/premium_photo-1661670161789-f3d20b78fcab?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" loading="lazy" alt="Photo by engin akyurt" className="h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
                </a>
                <div className="flex flex-col">
                  <span className="text-white text-3xl">TELEHEALTH</span>
                  <a href="#" className="text-lg font-bold text-white transition duration-100 hover:text-gray-500 lg:text-xl">Improve patient healthcare access, provider communication, and enhance continuing medical education, utilizing video conferencing APIs to facilitate secure and reliable virtual consultations and learning sessions.</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
     <div className='bg-gray-900/80'>
     <Footer/>

     </div>
    </div>
  );
};

export default chatting;