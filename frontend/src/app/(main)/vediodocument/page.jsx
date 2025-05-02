'use client';
import Button from "@/components/Button";
import { useState } from "react";

const vediodocument = () => {
  const [activeTab, setActiveTab] = useState("overview");

  const renderContent = () => {
    switch (activeTab) {
      case "overview":
        return (
          <div>
            <div className=" ">
            <h2 className="text-2xl font-bold mb-2 text-white">Video Calling</h2>
            {/* <img className="" src="https://images.unsplash.com/photo-1521931961826-fe48677230a5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"></img> */}
            <p className="text-white">Nexora's Video Calling API delivers ultra-low-latency, high-definition video communication for one-to-one or group calls. With support for cross-platform integration and dynamic resolution adaptation, it ensures smooth, real-time video experiences, even in challenging network conditions. Use it for telehealth, education, team collaboration, or any app requiring face-to-face interaction.

Enhance Agora's Video Calling SDKs with additional capabilities such as recording, virtual backgrounds, and content moderation, or leverage the Extensions Marketplace to enable AI-powered features like noise cancelation, video effects, and more.</p>


</div>

<br/>

<br/>
<h2 className="text-2xl text-white font-bold mb-2">PRODUCT FEATURES</h2>
<br/>
<div className="grid grid-cols-1 md:grid-cols-3 gap-4 space-y-5 md:space-y-5">
    <div className="mb-4 p-2">
    <p className="text-blue-600 text-2xl">Global coverage</p>
    <p className="text-white">Nexora’s software-defined, real-time network (SD-RTN) supports video users in over 200 countries and regions.</p>
    </div>
    <div className="mb-4 p-2">
    <p className="text-blue-600 text-2xl">High-quality video at scale</p>
    <p className="text-white">Consistent high-quality video from 1:1 calls to thousands of concurrent users, even under challenging network conditions.</p>
    </div>
    <div className="mb-4 p-2">
    <p className="text-blue-600 text-2xl">Multiple audio and video tracks</p>
    <p className="text-white">Publish multiple audio and video tracks to one or more channels from a single instance, with support for multi-channel capture cameras and microphones.</p>
    </div>
    <div className="mb-4 p-2"> 
    <p className="text-blue-600 text-2xl">Screen sharing and collaboration
    </p>
    <p className="text-white">Enable screen sharing or interactive whiteboards that allow users to draw, annotate, and share content from multiple devices simultaneously.</p>
    </div>
    <div className="mb-4 p-2">
    <p className="text-blue-600 text-2xl">AI-powered audio enhancement</p>
    <p className="text-white">Support for high quality audio with 3D spatial audio, AI noise suppression, and gain control to provide an immersive audio experience.</p>
    </div>
    <div className="mb-4 p-2">
    <p className="text-blue-600 text-2xl">Call recording</p>
    <p className="text-white">Record video calls in the cloud or on premises with control over the format, path of storage, and quality.

</p>
    </div>
</div>
<br/>
<br/>
<Button/>


          </div>
        );
      case "pricing":
        return (
          <div >
            <div class="bg-white py-6 sm:py-8 lg:py-12">
  <div class="mx-auto max-w-screen-xl px-4 md:px-8">
    <h2 class="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-8 lg:text-3xl xl:mb-12">Pricing</h2>

    <div class="mb-6 grid gap-6 sm:grid-cols-2 md:mb-8 lg:grid-cols-3 lg:gap-8">
      <div class="flex flex-col overflow-hidden rounded-lg border sm:mt-8">
        <div class="h-2 bg-pink-500"></div>

        <div class="flex flex-1 flex-col p-6 pt-8">
          <div class="mb-12">
            <div class="mb-2 text-center text-2xl font-bold text-gray-800">Free Trial</div>

            <p class="mb-8 px-8 text-center text-gray-500">For individuals and organizations who want to try our system</p>

            <div class="space-y-4">
              <div class="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 shrink-0" fill="none" viewBox="0 0 16 16">
                  <circle cx="8" cy="8" r="8" fill="currentColor" class="text-gray-300" />
                  <circle cx="8" cy="8" r="3" fill="currentColor" class="text-gray-500" />
                </svg>

                <span class="text-gray-600">1.000 MB file storage</span>
              </div>

              <div class="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 shrink-0" fill="none" viewBox="0 0 16 16">
                  <circle cx="8" cy="8" r="8" fill="currentColor" class="text-gray-300" />
                  <circle cx="8" cy="8" r="3" fill="currentColor" class="text-gray-500" />
                </svg>

                <span class="text-gray-600">2.000 MB bandwidth per month</span>
              </div>

              <div class="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 shrink-0" fill="none" viewBox="0 0 16 16">
                  <circle cx="8" cy="8" r="8" fill="currentColor" class="text-gray-300" />
                  <circle cx="8" cy="8" r="3" fill="currentColor" class="text-gray-500" />
                </svg>

                <span class="text-gray-600">200 tasks per month</span>
              </div>

              <div class="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 shrink-0" fill="none" viewBox="0 0 16 16">
                  <circle cx="8" cy="8" r="8" fill="currentColor" class="text-gray-300" />
                  <circle cx="8" cy="8" r="3" fill="currentColor" class="text-gray-500" />
                </svg>

                <span class="text-gray-600">Comunity support</span>
              </div>
            </div>
          </div>

          <div class="mt-auto">
            <a href="#" class="block rounded-lg bg-gray-200 px-8 py-3 text-center text-sm font-semibold text-gray-500 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-300 focus-visible:ring active:text-gray-700 md:text-base">$0 / Free</a>
          </div>
        </div>
      </div>
      <div class="flex flex-col overflow-hidden rounded-lg border-2 border-indigo-500">
        <div class="bg-indigo-500 py-2 text-center text-sm font-semibold uppercase tracking-widest text-white">Popular choise</div>

        <div class="flex flex-1 flex-col p-6 pt-8">
          <div class="mb-12">
            <div class="mb-2 text-center text-2xl font-bold text-gray-800">Team</div>

            <p class="mx-auto mb-8 px-8 text-center text-gray-500">Avanced feaures for Individuals and organizations</p>

            <div class="space-y-4">

              <div class="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 shrink-0" fill="none" viewBox="0 0 16 16">
                  <circle cx="8" cy="8" r="8" fill="currentColor" class="text-gray-300" />
                  <circle cx="8" cy="8" r="3" fill="currentColor" class="text-gray-500" />
                </svg>

                <span class="text-gray-600">Unlimited file storage</span>
              </div>

              <div class="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 shrink-0" fill="none" viewBox="0 0 16 16">
                  <circle cx="8" cy="8" r="8" fill="currentColor" class="text-gray-300" />
                  <circle cx="8" cy="8" r="3" fill="currentColor" class="text-gray-500" />
                </svg>

                <span class="text-gray-600">10 GB bandwidth per month</span>
              </div>

              <div class="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 shrink-0" fill="none" viewBox="0 0 16 16">
                  <circle cx="8" cy="8" r="8" fill="currentColor" class="text-gray-300" />
                  <circle cx="8" cy="8" r="3" fill="currentColor" class="text-gray-500" />
                </svg>

                <span class="text-gray-600">10.000 tasks per month</span>
              </div>

              <div class="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 shrink-0" fill="none" viewBox="0 0 16 16">
                  <circle cx="8" cy="8" r="8" fill="currentColor" class="text-gray-300" />
                  <circle cx="8" cy="8" r="3" fill="currentColor" class="text-gray-500" />
                </svg>

                <span class="text-gray-600">Email support</span>
              </div>

              <div class="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 shrink-0" fill="none" viewBox="0 0 16 16">
                  <circle cx="8" cy="8" r="8" fill="currentColor" class="text-gray-300" />
                  <circle cx="8" cy="8" r="3" fill="currentColor" class="text-gray-500" />
                </svg>

                <span class="text-gray-600">100 Webhooks</span>
              </div>

            </div>
          </div>

          <div class="mt-auto">
            <a href="#" class="block rounded-lg bg-indigo-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 md:text-base">$19</a>
          </div>
        </div>
      </div>
  
      <div class="flex flex-col overflow-hidden rounded-lg border lg:mt-8">
        <div class="h-2 bg-gray-800"></div>

        <div class="flex flex-1 flex-col p-6 pt-8">
          <div class="mb-12">
            <div class="mb-2 text-center text-2xl font-bold text-gray-800">Enterprise</div>

            <p class="mx-auto mb-8 px-8 text-center text-gray-500">Maximum performace for organisations</p>

            <div class="space-y-4">
              <div class="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 shrink-0" fill="none" viewBox="0 0 16 16">
                  <circle cx="8" cy="8" r="8" fill="currentColor" class="text-gray-300" />
                  <circle cx="8" cy="8" r="3" fill="currentColor" class="text-gray-500" />
                </svg>

                <span class="text-gray-600">Unlimited file storage</span>
              </div>
              <div class="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 shrink-0" fill="none" viewBox="0 0 16 16">
                  <circle cx="8" cy="8" r="8" fill="currentColor" class="text-gray-300" />
                  <circle cx="8" cy="8" r="3" fill="currentColor" class="text-gray-500" />
                </svg>

                <span class="text-gray-600">Unlimited bandwidth per month</span>
              </div>

              <div class="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 shrink-0" fill="none" viewBox="0 0 16 16">
                  <circle cx="8" cy="8" r="8" fill="currentColor" class="text-gray-300" />
                  <circle cx="8" cy="8" r="3" fill="currentColor" class="text-gray-500" />
                </svg>

                <span class="text-gray-600">1.000.000 tasks per month</span>
              </div>

   
              <div class="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 shrink-0" fill="none" viewBox="0 0 16 16">
                  <circle cx="8" cy="8" r="8" fill="currentColor" class="text-gray-300" />
                  <circle cx="8" cy="8" r="3" fill="currentColor" class="text-gray-500" />
                </svg>

                <span class="text-gray-600">Email and phone support</span>
              </div>
              <div class="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 shrink-0" fill="none" viewBox="0 0 16 16">
                  <circle cx="8" cy="8" r="8" fill="currentColor" class="text-gray-300" />
                  <circle cx="8" cy="8" r="3" fill="currentColor" class="text-gray-500" />
                </svg>

                <span class="text-gray-600">Unlimited Webhooks</span>
              </div>
            </div>
          </div>

          <div class="mt-auto">
            <a href="#" class="block rounded-lg bg-gray-800 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-gray-700 focus-visible:ring active:bg-gray-600 md:text-base">$49</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
          </div>
        );
      case "integration":
        return (
          <div>
            <h2 className="text-2xl font-bold mb-2 text-white">Quickstart</h2> <br />
            <p className="text-white text-2xl">Understand the tech</p>
            <p className="text-white p-2">To start a Video Calling session, implement the following steps in your app:</p>
            <ul className="list-disc list-inside text-white p-2">
              <li>Initialize the Agora Engine: Before calling other APIs, create and initialize an Agora Engine instance.</li>
              <li>Join a channel: Call methods to create and join a channel.</li>
              <li>Send and receive audio and video: All users can publish streams to the channel and subscribe to audio and video streams published by other users in the channel.</li>
              <li>A Chat pricing plan. For details on how to subscribe, see Subscribe to the pricing plan.</li>
              </ul>
<br />
            <p className="text-white text-2xl">Prerequisites</p>
            <ol className="list-disc list-inside text-white p-2">
              <li>Android Studio 4.2 or higher.</li>
              <li>Android SDK API Level 21 or higher.</li>
              <li>Two mobile devices running Android 5.0 or higher.</li>
              <li>A camera and a microphon.</li>
              <li>A valid Agora account and project. Please refer to Agora account management for details.</li>
              </ol>
           <br />
           <br />
           <p className="text-white">For details about these advanced features, see the following:</p>
           <ul className="list-disc list-inside text-white p-2">
            <li className="text-white">Message Callback</li>    
            <li className="text-white">Message Recall</li>    
            <li className="text-white">Message Thread</li>    
            <li className="text-white">Reaction</li>    
            <li className="text-white">Offline Message Push (Advanced)</li>    
            <li className="text-white">Presence</li>    
            <li className="text-white">Translation</li>    
            <li className="text-white">Moderation</li>    
           </ul>
           <br />
           <h2 className="text-2xl font-bold mb-2 text-white">Get Chat project information</h2>
           <p className="text-white p-1">Nexora Console assigns the following information to each project that enables Chat:</p>
              <ul className="list-disc list-inside text-white p-2">
                <li>Nexora Console assigns the following information to each project that enables Chat:</li>
                <li>AppKey: The unique identifier that Chat assigns to each app.</li>
                <li>OrgName: The unique identifier that Chat assigns to each enterprise (organization).</li>
                <li>AppName: The name that Chat assigns to each app. Each app under the same enterprise (organization) must have a unique App Name.</li>
                <li>API request url: The domain of the WebSocket and RESTful API request that Agora assigns to each project.</li>
                </ul>
                <br />
                <p className="text-white">Follow these steps to get the project information:</p>
                <ol className="list-disc list-inside text-white p-2">
                  <li>Find your Chat-enabled project on the Project Management page on Agora Console and click Config.</li>
                  <li>On the project edit page, find Chat and click Config.</li>
                  <li>On the Chat config page, get the values of Data Center, AppKey, OrgName, AppName, WebSocket Address, and REST API.</li>
                  </ol>
                  <br />
                  <h2 className="text-2xl font-bold mb-2 text-white">Manage users and generate tokens</h2>
                  <p className="text-white p-2">For development purposes, Agora enables you to manage users and generate Chat user authentication tokens using Agora Console. In a production environment, you use the RESTful API to manage users and a token server to generate user authentication tokens.

This section shows you how to register Chat users and generate temporary tokens using Agora Console.</p>
                  
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <div className="w-64  bg-blue-300 p-4 border-r">
        <h1 className="text-xl font-semibold mb-4">Documentation</h1>
        <ul className="space-y-2">
          <li>
            <button
              onClick={() => setActiveTab("overview")}
              className={`w-full text-left px-2 py-1 rounded ${
                activeTab === "overview" ? "bg-blue-500 text-white" : "hover:bg-gray-200"
              }`}
            >
              Overview
            </button>
          </li>
          <li>
            <button
              onClick={() => setActiveTab("pricing")}
              className={`w-full text-left px-2 py-1 rounded ${
                activeTab === "pricing" ? "bg-blue-500 text-white" : "hover:bg-gray-200"
              }`}
            >
              Pricing Details
            </button>
          </li>
          <li>
            <button
              onClick={() => setActiveTab("integration")}
              className={`w-full text-left px-2 py-1 rounded ${
                activeTab === "integration" ? "bg-blue-500 text-white" : "hover:bg-gray-200"
              }`}
            >
              How to Integrate
            </button>
          </li>
        </ul>
      </div>

      {/* Content Area */}
      <div className=" bg-black flex-1 p-8">{renderContent()}</div>
    </div>
  );
};

export default vediodocument;
