import Footer from '@/components/sections/Footer';
import SpotlightCard from '@/components/SpotlightCard';
import React from 'react';

const vedio = () => {
  return (
    <div>
      {/* Hero Section */}
      {/* <section className="relative min-h-[60vh] sm:min-h-[80vh] lg:h-screen bg-black"> */}
        {/* <iframe
          className="absolute inset-0 w-full h-full object-cover opacity-50"
          src="https://www.youtube.com/embed/K-0zJxppzBo?autoplay=1&loop=1&mute=1&playlist=K-0zJxppzBo"
          title="YouTube video player"
          allow="autoplay; encrypted-media; fullscreen"
          allowFullScreen
        ></iframe> */}
        {/* <div className="relative z-10 bg-gradient-to-b from-violet-600/10 via-transparent to-black/50 h-full flex items-center"> */}
          {/* <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 lg:py-24 space-y-8"> */}
            {/* Buttons */}
            {/* <div className="text-center"> */}
              {/* <a */}
                {/* className="inline-flex justify-center items-center gap-x-3 text-center bg-gradient-to-tl from-blue-600 to-violet-600 shadow-lg hover:shadow-blue-700/50 border border-transparent text-white text-sm sm:text-base font-medium rounded-full focus:outline-none focus:shadow-blue-700/50 py-3 px-6" */}
                {/* href="/docs" */}
              {/* > */}
                {/* Get started */}
                {/* <svg
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
                </svg> */}
             {/* </div> </a> */}
            {/* </div> */}
          {/* </div> */}
        {/* </div> */}
      {/* </section> */}
       <section className="relative min-h-[60vh] sm:min-h-[80vh] lg:h-screen bg-black">
        
        <img
          className="absolute inset-0 w-full h-full object-cover opacity-30"
          src="https://cdn.pixabay.com/photo/2016/11/18/17/47/iphone-1836071_1280.jpg"
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
        <h2 className="flex justify-center  text-3xl sm:text-4xl lg:text-5xl font-bold">
          <span className='bg-gradient-to-r from-sky-400 to-emerald-400 bg-clip-text text-transparent'>Video Calling Features</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          <SpotlightCard className="custom-spotlight-card hover:scale-90" spotlightColor="rgba(0, 229, 255, 0.2)">
            <svg className="size-15 p-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="#ffffff" d="M0 128C0 92.7 28.7 64 64 64l256 0c35.3 0 64 28.7 64 64l0 256c0 35.3-28.7 64-64 64L64 448c-35.3 0-64-28.7-64-64L0 128zM559.1 99.8c10.4 5.6 16.9 16.4 16.9 28.2l0 256c0 11.8-6.5 22.6-16.9 28.2s-23 5-32.9-1.6l-96-64L416 337.1l0-17.1 0-128 0-17.1 14.2-9.5 96-64c9.8-6.5 22.4-7.2 32.9-1.6z"/></svg>
            <h1 className="text-gray-300 text-xl sm:text-2xl">High Quality Video</h1>
            <p className="text-white text-sm sm:text-base p-3">
              Nexora's video chat API ensures high-quality video and audio, providing a seamless communication experience for users.
            </p>
          </SpotlightCard>
          <SpotlightCard className="custom-spotlight-card hover:scale-90" spotlightColor="rgba(0, 229, 255, 0.2)">
            <svg className="size-15 p-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#ffffff" d="M246.6 9.4c-12.5-12.5-32.8-12.5-45.3 0l-128 128c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 109.3 192 320c0 17.7 14.3 32 32 32s32-14.3 32-32l0-210.7 73.4 73.4c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-128-128zM64 352c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 64c0 53 43 96 96 96l256 0c53 0 96-43 96-96l0-64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 64c0 17.7-14.3 32-32 32L96 448c-17.7 0-32-14.3-32-32l0-64z"/></svg>
            <h1 className="text-gray-300 text-xl sm:text-2xl">Screen Sharing and Collaboration</h1>
            <p className="text-white text-sm sm:text-base p-3">
              Video conferencing solutions support screen sharing, interactive whiteboards, and other advanced collaboration features.
            </p>
          </SpotlightCard>
          <SpotlightCard className="custom-spotlight-card hover:scale-90" spotlightColor="rgba(0, 229, 255, 0.2)">
            <svg className="size-15 p-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"> <path fill="#ffffff" d="M192 104.8c0-9.2-5.8-17.3-13.2-22.8C167.2 73.3 160 61.3 160 48c0-26.5 28.7-48 64-48s64 21.5 64 48c0 13.3-7.2 25.3-18.8 34c-7.4 5.5-13.2 13.6-13.2 22.8c0 12.8 10.4 23.2 23.2 23.2l56.8 0c26.5 0 48 21.5 48 48l0 56.8c0 12.8 10.4 23.2 23.2 23.2c9.2 0 17.3-5.8 22.8-13.2c8.7-11.6 20.7-18.8 34-18.8c26.5 0 48 28.7 48 64s-21.5 64-48 64c-13.3 0-25.3-7.2-34-18.8c-5.5-7.4-13.6-13.2-22.8-13.2c-12.8 0-23.2 10.4-23.2 23.2L384 464c0 26.5-21.5 48-48 48l-56.8 0c-12.8 0-23.2-10.4-23.2-23.2c0-9.2 5.8-17.3 13.2-22.8c11.6-8.7 18.8-20.7 18.8-34c0-26.5-28.7-48-64-48s-64 21.5-64 48c0 13.3 7.2 25.3 18.8 34c7.4 5.5 13.2 13.6 13.2 22.8c0 12.8-10.4 23.2-23.2 23.2L48 512c-26.5 0-48-21.5-48-48L0 343.2C0 330.4 10.4 320 23.2 320c9.2 0 17.3 5.8 22.8 13.2C54.7 344.8 66.7 352 80 352c26.5 0 48-28.7 48-64s-21.5-64-48-64c-13.3 0-25.3 7.2-34 18.8C40.5 250.2 32.4 256 23.2 256C10.4 256 0 245.6 0 232.8L0 176c0-26.5 21.5-48 48-48l120.8 0c12.8 0 23.2-10.4 23.2-23.2z"/></svg>
            <h1 className="text-gray-300 text-xl sm:text-2xl">Easy-to-Add Extensions</h1>
            <p className="text-white text-sm sm:text-base p-3">
              Quick integration of powerful video conferencing features from AI Noise Suppression to Real-Time Speech to Text.
            </p>
          </SpotlightCard>
          <SpotlightCard className="custom-spotlight-card hover:scale-90" spotlightColor="rgba(0, 229, 255, 0.2)">
            <svg className="size-15 p-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#ffffff" d="M0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm256-96a96 96 0 1 1 0 192 96 96 0 1 1 0-192zm0 224a128 128 0 1 0 0-256 128 128 0 1 0 0 256zm0-96a32 32 0 1 0 0-64 32 32 0 1 0 0 64z"/></svg>
            <h1 className="text-gray-300 text-xl sm:text-2xl">Call Recording</h1>
            <p className="text-white text-sm sm:text-base p-3">
              Enable video meeting recording in the cloud or on-premises with control over the format, storage, and quality.
            </p>
          </SpotlightCard>
          <SpotlightCard className="custom-spotlight-card hover:scale-90" spotlightColor="rgba(0, 229, 255, 0.2)">
            <svg className="size-15 p-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#ffffff" d="M403.8 34.4c12-5 25.7-2.2 34.9 6.9l64 64c6 6 9.4 14.1 9.4 22.6s-3.4 16.6-9.4 22.6l-64 64c-9.2 9.2-22.9 11.9-34.9 6.9s-19.8-16.6-19.8-29.6l0-32-32 0c-10.1 0-19.6 4.7-25.6 12.8L284 229.3 244 176l31.2-41.6C293.3 110.2 321.8 96 352 96l32 0 0-32c0-12.9 7.8-24.6 19.8-29.6zM164 282.7L204 336l-31.2 41.6C154.7 401.8 126.2 416 96 416l-64 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l64 0c10.1 0 19.6-4.7 25.6-12.8L164 282.7zm274.6 188c-9.2 9.2-22.9 11.9-34.9 6.9s-19.8-16.6-19.8-29.6l0-32-32 0c-30.2 0-58.7-14.2-76.8-38.4L121.6 172.8c-6-8.1-15.5-12.8-25.6-12.8l-64 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l64 0c30.2 0 58.7 14.2 76.8 38.4L326.4 339.2c6 8.1 15.5 12.8 25.6 12.8l32 0 0-32c0-12.9 7.8-24.6 19.8-29.6s25.7-2.2 34.9 6.9l64 64c6 6 9.4 14.1 9.4 22.6s-3.4 16.6-9.4 22.6l-64 64z"/></svg>
            <h1 className="text-gray-300 text-xl sm:text-2xl">Multi-Track Video</h1>
            <p className="text-white text-sm sm:text-base p-3">
              Support for multiple audio and video tracks, making it easy to publish multiple camera or microphone streams in one instance.
            </p>
          </SpotlightCard>
          <SpotlightCard className="custom-spotlight-card hover:scale-90" spotlightColor="rgba(0, 229, 255, 0.2)">
            <svg className="size-15 p-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#ffffff" d="M352 256c0 22.2-1.2 43.6-3.3 64l-185.3 0c-2.2-20.4-3.3-41.8-3.3-64s1.2-43.6 3.3-64l185.3 0c2.2 20.4 3.3 41.8 3.3 64zm28.8-64l123.1 0c5.3 20.5 8.1 41.9 8.1 64s-2.8 43.5-8.1 64l-123.1 0c2.1-20.6 3.2-42 3.2-64s-1.1-43.4-3.2-64zm112.6-32l-116.7 0c-10-63.9-29.8-117.4-55.3-151.6c78.3 20.7 142 77.5 171.9 151.6zm-149.1 0l-176.6 0c6.1-36.4 15.5-68.6 27-94.7c10.5-23.6 22.2-40.7 33.5-51.5C239.4 3.2 248.7 0 256 0s16.6 3.2 27.8 13.8c11.3 10.8 23 27.9 33.5 51.5c11.6 26 20.9 58.2 27 94.7zm-209 0L18.6 160C48.6 85.9 112.2 29.1 190.6 8.4C165.1 42.6 145.3 96.1 135.3 160zM8.1 192l123.1 0c-2.1 20.6-3.2 42-3.2 64s1.1 43.4 3.2 64L8.1 320C2.8 299.5 0 278.1 0 256s2.8-43.5 8.1-64zM194.7 446.6c-11.6-26-20.9-58.2-27-94.6l176.6 0c-6.1 36.4-15.5 68.6-27 94.6c-10.5 23.6-22.2 40.7-33.5 51.5C272.6 508.8 263.3 512 256 512s-16.6-3.2-27.8-13.8c-11.3-10.8-23-27.9-33.5-51.5zM135.3 352c10 63.9 29.8 117.4 55.3 151.6C112.2 482.9 48.6 426.1 18.6 352l116.7 0zm358.1 0c-30 74.1-93.6 130.9-171.9 151.6c25.5-34.2 45.2-87.7 55.3-151.6l116.7 0z"/></svg>
            <h1 className="text-gray-300 text-xl sm:text-2xl">Global Scalability</h1>
            <p className="text-white text-sm sm:text-base p-3">
              Power noise suppression at a global scale on the network that powers billions of minutes of real-time video annually to users in over 200 countries and regions.
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
                   <span className='bg-gradient-to-r from-sky-400 to-emerald-400 bg-clip-text text-transparent'>Boost</span> in-app engagement with  <span className='bg-gradient-to-r from-sky-400 to-emerald-400 bg-clip-text text-transparent'> realtime </span>
                   video
                </h2>
                {/* Tab Navs */}
                <nav className="grid gap-4 mt-5 md:mt-10" aria-label="Tabs" role="tablist" aria-orientation="vertical">
                  <button type="button" className="hs-tab-active:bg-white hs-tab-active:shadow-md hs-tab-active:hover:border-transparent text-start hover:bg-gray-200 focus:outline-hidden focus:bg-gray-200 p-4 md:p-5 rounded-xl dark:hs-tab-active:bg-neutral-700 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700 active" id="tabs-with-card-item-1" aria-selected="true" data-hs-tab="#tabs-with-card-1" aria-controls="tabs-with-card-1" role="tab">
                    <span className="flex gap-x-6">
                      <svg className='shrink-0 mt-2 size-10 md:size-10 hs-tab-active:text-blue-600 text-gray-800 dark:hs-tab-active:text-blue-500 dark:text-neutral-200' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#f7f7f7" d="M156.6 384.9L125.7 354c-8.5-8.5-11.5-20.8-7.7-32.2c3-8.9 7-20.5 11.8-33.8L24 288c-8.6 0-16.6-4.6-20.9-12.1s-4.2-16.7 .2-24.1l52.5-88.5c13-21.9 36.5-35.3 61.9-35.3l82.3 0c2.4-4 4.8-7.7 7.2-11.3C289.1-4.1 411.1-8.1 483.9 5.3c11.6 2.1 20.6 11.2 22.8 22.8c13.4 72.9 9.3 194.8-111.4 276.7c-3.5 2.4-7.3 4.8-11.3 7.2l0 82.3c0 25.4-13.4 49-35.3 61.9l-88.5 52.5c-7.4 4.4-16.6 4.5-24.1 .2s-12.1-12.2-12.1-20.9l0-107.2c-14.1 4.9-26.4 8.9-35.7 11.9c-11.2 3.6-23.4 .5-31.8-7.8zM384 168a40 40 0 1 0 0-80 40 40 0 1 0 0 80z"/></svg>
                      <span className="grow">
                        <span className="block text-2xl font-semibold hs-tab-active:text-blue-600 text-gray-800 dark:hs-tab-active:text-blue-500 dark:text-neutral-200">Get to market faster</span>
                        <span className="block mt-1 text-gray-800 dark:hs-tab-active:text-gray-200 dark:text-neutral-200">Increase development speed and get your video chat experience to market faster with tools like our no-code App Builder and library of extensions like recording, noise suppression, and more.</span>
                      </span>
                    </span>
                  </button>

                  <button type="button" className="hs-tab-active:bg-white hs-tab-active:shadow-md hs-tab-active:hover:border-transparent text-start hover:bg-gray-200 focus:outline-hidden focus:bg-gray-200 p-4 md:p-5 rounded-xl dark:hs-tab-active:bg-neutral-700 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700" id="tabs-with-card-item-2" aria-selected="false" data-hs-tab="#tabs-with-card-2" aria-controls="tabs-with-card-2" role="tab">
                    <span className="flex gap-x-6">
                      <svg className='shrink-0 mt-2 size-10 md:size-10 hs-tab-active:text-blue-600 text-gray-800 dark:hs-tab-active:text-blue-500 dark:text-neutral-200' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#fafcff" d="M0 416c0 17.7 14.3 32 32 32l54.7 0c12.3 28.3 40.5 48 73.3 48s61-19.7 73.3-48L480 448c17.7 0 32-14.3 32-32s-14.3-32-32-32l-246.7 0c-12.3-28.3-40.5-48-73.3-48s-61 19.7-73.3 48L32 384c-17.7 0-32 14.3-32 32zm128 0a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zM320 256a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm32-80c-32.8 0-61 19.7-73.3 48L32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l246.7 0c12.3 28.3 40.5 48 73.3 48s61-19.7 73.3-48l54.7 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-54.7 0c-12.3-28.3-40.5-48-73.3-48zM192 128a32 32 0 1 1 0-64 32 32 0 1 1 0 64zm73.3-64C253 35.7 224.8 16 192 16s-61 19.7-73.3 48L32 64C14.3 64 0 78.3 0 96s14.3 32 32 32l86.7 0c12.3 28.3 40.5 48 73.3 48s61-19.7 73.3-48L480 128c17.7 0 32-14.3 32-32s-14.3-32-32-32L265.3 64z"/></svg>
                      <span className="grow">
                        <span className="block text-2xl font-semibold hs-tab-active:text-blue-600 text-gray-800 dark:hs-tab-active:text-blue-500 dark:text-neutral-200">Customize for your use case</span>
                        <span className="block mt-1 text-gray-800 dark:hs-tab-active:text-gray-200 dark:text-neutral-200">Nexora’s flexible, cross-platform live video SDK gives you full control over the user experience so you can build video calling for any use case from telehealth to live shopping.</span>
                      </span>
                    </span>
                  </button>

                  <button type="button" className="hs-tab-active:bg-white hs-tab-active:shadow-md hs-tab-active:hover:border-transparent text-start hover:bg-gray-200 focus:outline-hidden focus:bg-gray-200 p-4 md:p-5 rounded-xl dark:hs-tab-active:bg-neutral-700 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700" id="tabs-with-card-item-3" aria-selected="false" data-hs-tab="#tabs-with-card-3" aria-controls="tabs-with-card-3" role="tab">
                    <span className="flex gap-x-6">
                      <svg  className='shrink-0 mt-2 size-10 md:size-10 hs-tab-active:text-blue-600 text-gray-800 dark:hs-tab-active:text-blue-500 dark:text-neutral-200' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="#fafcff" d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg>
                      <span className="grow">
                        <span className="block text-2xl font-semibold hs-tab-active:text-blue-600 text-gray-800 dark:hs-tab-active:text-blue-500 dark:text-neutral-200">Ensure reliability and quality</span>
                        <span className="block mt-1 text-gray-800 dark:hs-tab-active:text-gray-200 dark:text-neutral-200">Deliver a seamless and uninterrupted video call experience for your users on the world’s only network built to power real-time video with ultra-low latency and intelligent routing.</span>
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
                      <img className="shadow-xl shadow-gray-200 rounded-xl dark:shadow-gray-900/20 w-full h-64 sm:h-80 md:h-96 object-cover" src="https://img.freepik.com/free-photo/connect-incoming-call-communication-concept_53876-125112.jpg?t=st=1745599045~exp=1745602645~hmac=798e11f93bda744fc5875ee5dad4d9e747617499c76e74a93c21c4484172d269&w=1380" alt="Features Image" />
                    </div>
                    <div id="tabs-with-card-2" className="hidden" role="tabpanel" aria-labelledby="tabs-with-card-item-2">
                      <img className="shadow-xl shadow-gray-200 rounded-xl dark:shadow-gray-900/20 w-full h-64 sm:h-80 md:h-96 object-cover" src="https://img.freepik.com/free-photo/calling-communication-connect-networking-concept_53876-124784.jpg?t=st=1745599161~exp=1745602761~hmac=e55a1a440f4fde95a222671370d94935c9fe704113724649f8319446de1f6eb6&w=1380" alt="Features Image" />
                    </div>
                    <div id="tabs-with-card-3" className="hidden" role="tabpanel" aria-labelledby="tabs-with-card-item-3">
                      <img className="shadow-xl shadow-gray-200 rounded-xl dark:shadow-gray-900/20 w-full h-64 sm:h-80 md:h-96 object-cover" src="https://img.freepik.com/free-photo/business-video-call-representation_23-2148667503.jpg?t=st=1745599217~exp=1745602817~hmac=e012af1f1c0b76878d28351118e50585ec7678f1d8c4b152bbca4ec608a2e933&w=1060" alt="Features Image" />
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

      {/* Real-time Video Chat Section */}
      <section className="bg-black px-4 py-10 sm:px-8 lg:px-20 lg:py-24">
        <div className="py-6 sm:py-8 lg:py-12">
          <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
            <div className="mb-6 flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4">
              <h2 className="text-2xl font-bold bg-gradient-to-r from-sky-400 to-emerald-400 bg-clip-text text-transparent lg:text-6xl">Real-time video chat for any application</h2>
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

export default vedio;