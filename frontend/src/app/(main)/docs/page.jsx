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
              <h2 className="text-2xl font-bold mb-2 text-white">CHAT AND VIDEO CALLING SDK</h2>
              <p className="text-white">A React-based SDK for implementing 1:1 chat and video calling functionality in your applications.</p>
            </div>

            <br/>

            <br/>
            <h2 className="text-2xl text-white font-bold mb-2">Installation</h2>
            <hr className="text-white"/>
            <div className="bg-blue-50 p-4 rounded mt-6">
              <pre className="text-xl text-gray-700 overflow-x-auto">
                npm install chat-video-sdk
              </pre>
            </div> 
            <br/>
            <h2 className="text-2xl text-white font-bold mb-2">Features</h2>
            <hr className="text-white"/>
            <ul className="list-disc list-inside text-white p-2">
              <li>1:1 Real Time chat messaging</li>
              <li>1:1 Video calling with WebRTC</li>
              <li>React components for easy integration</li>
              <li>TypeScript support</li>
              <li>Customizable UI</li>
            </ul>
            <br/>
            <h2 className="text-2xl text-white font-bold mb-2">Prerequisites</h2>
            <hr className="text-white"/>
            <ul className="list-disc list-inside text-white p-2">
              <li>React 19.0.0 or higher</li>  
              <li>A WebSocket/Socket.IO server for signaling</li>  
            </ul>
            <br/>
            <h2 className="text-2xl text-white font-bold mb-2">Usage</h2>
            <hr className="text-white"/>
            <p className="text-white text-xl font-bold p-2">Chat Component</p>
            <div className="bg-blue-50 p-4 rounded mt-6">
              <pre className="text-xl text-gray-700 overflow-x-auto">
                {`import { Chat } from 'chat-video-sdk';

function App() {
  return (
    <Chat
      userId="user1"
      receiverId="user2"
      serverUrl="https://your-signaling-server.com"
    />
  );
}`}
              </pre>
            </div> 
            <br/>
            <p className="text-white text-xl font-bold p-2">Video Call Component</p>
            <div className="bg-blue-50 p-4 rounded mt-6">
              <pre className="text-xl text-gray-700 overflow-x-auto">
                {`import { VideoCall } from 'chat-video-sdk';

function App() {
  return (
    <VideoCall
      userId="user1"
      receiverId="user2"
      serverUrl="https://your-signaling-server.com"
      onCallEnded={() => console.log('Call ended')}
    />
  );
}`}
              </pre>
            </div> 
            <br/>
            <h2 className="text-2xl text-white font-bold mb-2">Advanced Usage</h2>
            <hr className="text-white"/>
            <p className="text-white text-xl font-bold p-2">You can also use the services directly for more custom implementations:</p>
            <div className="bg-blue-50 p-4 rounded mt-6">
              <pre className="text-xl text-gray-700 overflow-x-auto">
                {`import { ChatService, VideoService } from 'chat-video-sdk';

// Initialize chat service
const chatService = new ChatService({
  userId: 'user1',
  serverUrl: 'https://your-signaling-server.com',
  onMessageReceived: (message) => {
    console.log('New message:', message);
  }
});

// Initialize video service
const videoService = new VideoService({
  userId: 'user1',
  serverUrl: 'https://your-signaling-server.com',
  onCallReceived: (callerId) => {
    console.log('Incoming call from:', callerId);
  }
});`}
              </pre>
            </div> 
            <br/>
            <h2 className="text-2xl text-white font-bold mb-2">Server Requirements</h2>
            <hr className="text-white"/>
            <p className="text-white p-2">You'll need a signaling server that supports:</p>
            <ul className="list-disc list-inside text-white p-2">
              <li>WebSocket/Socket.IO connections</li>
              <li>User registration/authentication</li>
              <li>Message relaying</li>
              <li>WebRTC signaling (offer/answer/ICE candidates)</li>
            </ul>
            <br/>
            <hr className="text-white"/>
            <br/>
            <h2 className="text-2xl text-white font-bold mb-2">License</h2>
            <p className="text-white text-xl font-bold">MIT</p>
            <br />
            <h3 className="text-white text-xl font-bold">keywords </h3>
            <hr className="text-white"/>
            <p className="text-red-500 hover:text-red-300">chat <br /> video-calling  <br />      web-rtc  <br />    real-time</p>
            <br/>
            <Button/>
          </div>
        );
      case "pricing":
        return (
          <div>
            <div className="bg-gradient-to-l from-green-300 to-blue-200 py-6 sm:py-8 lg:py-12">
              <div className="mx-auto max-w-screen-xl px-2 sm:px-4 md:px-8">
                <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-8 lg:text-3xl xl:mb-12">Pricing</h2>
                <div className="mb-6 grid gap-6 sm:grid-cols-2 md:mb-8 lg:grid-cols-3 lg:gap-8">
                  <div className="flex flex-col overflow-hidden rounded-lg border sm:mt-8">
                    <div className="h-2 bg-pink-500"></div>
                    <div className="flex flex-1 flex-col p-6 pt-8">
                      <div className="mb-12">
                        <div className="mb-2 text-center text-2xl font-bold text-gray-800">Free Trial</div>
                        <p className="mb-8 px-8 text-center text-gray-500">For individuals and organizations who want to try our system</p>
                        <div className="space-y-4">
                          <div className="flex items-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 shrink-0" fill="none" viewBox="0 0 16 16">
                              <circle cx="8" cy="8" r="8" fill="currentColor" className="text-gray-300" />
                              <circle cx="8" cy="8" r="3" fill="currentColor" className="text-gray-500" />
                            </svg>
                            <span className="text-gray-600">1.000 MB file storage</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 shrink-0" fill="none" viewBox="0 0 16 16">
                              <circle cx="8" cy="8" r="8" fill="currentColor" className="text-gray-300" />
                              <circle cx="8" cy="8" r="3" fill="currentColor" className="text-gray-500" />
                            </svg>
                            <span className="text-gray-600">2.000 MB bandwidth per month</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 shrink-0" fill="none" viewBox="0 0 16 16">
                              <circle cx="8" cy="8" r="8" fill="currentColor" className="text-gray-300" />
                              <circle cx="8" cy="8" r="3" fill="currentColor" className="text-gray-500" />
                            </svg>
                            <span className="text-gray-600">200 tasks per month</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 shrink-0" fill="none" viewBox="0 0 16 16">
                              <circle cx="8" cy="8" r="8" fill="currentColor" className="text-gray-300" />
                              <circle cx="8" cy="8" r="3" fill="currentColor" className="text-gray-500" />
                            </svg>
                            <span className="text-gray-600">Comunity support</span>
                          </div>
                        </div>
                      </div>
                      <div className="mt-auto">
                        <a href="#" className="block rounded-lg bg-gray-200 px-8 py-3 text-center text-sm font-semibold text-gray-500 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-300 focus-visible:ring active:text-gray-700 md:text-base">$0 / Free</a>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col overflow-hidden rounded-lg border-2 border-indigo-500">
                    <div className="bg-indigo-500 py-2 text-center text-sm font-semibold uppercase tracking-widest text-white">Popular choise</div>
                    <div className="flex flex-1 flex-col p-6 pt-8">
                      <div className="mb-12">
                        <div className="mb-2 text-center text-2xl font-bold text-gray-800">Team</div>
                        <p className="mx-auto mb-8 px-8 text-center text-gray-500">Avanced feaures for Individuals and organizations</p>
                        <div className="space-y-4">
                          <div className="flex items-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 shrink-0" fill="none" viewBox="0 0 16 16">
                              <circle cx="8" cy="8" r="8" fill="currentColor" className="text-gray-300" />
                              <circle cx="8" cy="8" r="3" fill="currentColor" className="text-gray-500" />
                            </svg>
                            <span className="text-gray-600">Unlimited file storage</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 shrink-0" fill="none" viewBox="0 0 16 16">
                              <circle cx="8" cy="8" r="8" fill="currentColor" className="text-gray-300" />
                              <circle cx="8" cy="8" r="3" fill="currentColor" className="text-gray-500" />
                            </svg>
                            <span className="text-gray-600">10 GB bandwidth per month</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 shrink-0" fill="none" viewBox="0 0 16 16">
                              <circle cx="8" cy="8" r="8" fill="currentColor" className="text-gray-300" />
                              <circle cx="8" cy="8" r="3" fill="currentColor" className="text-gray-500" />
                            </svg>
                            <span className="text-gray-600">10.000 tasks per month</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 shrink-0" fill="none" viewBox="0 0 16 16">
                              <circle cx="8" cy="8" r="8" fill="currentColor" className="text-gray-300" />
                              <circle cx="8" cy="8" r="3" fill="currentColor" className="text-gray-500" />
                            </svg>
                            <span className="text-gray-600">Email support</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 shrink-0" fill="none" viewBox="0 0 16 16">
                              <circle cx="8" cy="8" r="8" fill="currentColor" className="text-gray-300" />
                              <circle cx="8" cy="8" r="3" fill="currentColor" className="text-gray-500" />
                            </svg>
                            <span className="text-gray-600">100 Webhooks</span>
                          </div>
                        </div>
                      </div>
                      <div className="mt-auto">
                        <a href="#" className="block rounded-lg bg-indigo-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 md:text-base">$19</a>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col overflow-hidden rounded-lg border lg:mt-8">
                    <div className="h-2 bg-gray-800"></div>
                    <div className="flex flex-1 flex-col p-6 pt-8">
                      <div className="mb-12">
                        <div className="mb-2 text-center text-2xl font-bold text-gray-800">Enterprise</div>
                        <p className="mx-auto mb-8 px-8 text-center text-gray-500">Maximum performace for organisations</p>
                        <div className="space-y-4">
                          <div className="flex items-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 shrink-0" fill="none" viewBox="0 0 16 16">
                              <circle cx="8" cy="8" r="8" fill="currentColor" className="text-gray-300" />
                              <circle cx="8" cy="8" r="3" fill="currentColor" className="text-gray-500" />
                            </svg>
                            <span className="text-gray-600">Unlimited file storage</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 shrink-0" fill="none" viewBox="0 0 16 16">
                              <circle cx="8" cy="8" r="8" fill="currentColor" className="text-gray-300" />
                              <circle cx="8" cy="8" r="3" fill="currentColor" className="text-gray-500" />
                            </svg>
                            <span className="text-gray-600">Unlimited bandwidth per month</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 shrink-0" fill="none" viewBox="0 0 16 16">
                              <circle cx="8" cy="8" r="8" fill="currentColor" className="text-gray-300" />
                              <circle cx="8" cy="8" r="3" fill="currentColor" className="text-gray-500" />
                            </svg>
                            <span className="text-gray-600">1.000.000 tasks per month</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 shrink-0" fill="none" viewBox="0 0 16 16">
                              <circle cx="8" cy="8" r="8" fill="currentColor" className="text-gray-300" />
                              <circle cx="8" cy="8" r="3" fill="currentColor" className="text-gray-500" />
                            </svg>
                            <span className="text-gray-600">Email and phone support</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 shrink-0" fill="none" viewBox="0 0 16 16">
                              <circle cx="8" cy="8" r="8" fill="currentColor" className="text-gray-300" />
                              <circle cx="8" cy="8" r="3" fill="currentColor" className="text-gray-500" />
                            </svg>
                            <span className="text-gray-600">Unlimited Webhooks</span>
                          </div>
                        </div>
                      </div>
                      <div className="mt-auto">
                        <a href="#" className="block rounded-lg bg-gray-800 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-gray-700 focus-visible:ring active:bg-gray-600 md:text-base">$49</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-black">
      {/* Responsive Sidebar/Topbar */}
      <div className="md:hidden flex bg-black border-b border-gray-800 px-4 py-2">
        <select
          value={activeTab}
          onChange={e => setActiveTab(e.target.value)}
          className="w-full bg-gray-900 text-white rounded px-2 py-2"
        >
          <option value="overview">Overview</option>
          <option value="pricing">Pricing Details</option>
        </select>
      </div>
      <div className="flex flex-1 flex-col md:flex-row">
        {/* Sidebar */}
        <div className="hidden md:block w-full md:w-64 bg-black p-4 border-r border-gray-800">
          <h1 className="text-xl font-semibold mb-4 text-white">Documentation</h1>
          <ul className="space-y-2">
            <li>
              <button
                onClick={() => setActiveTab("overview")}
                className={`w-full text-white text-left px-2 py-1 rounded ${
                  activeTab === "overview" ? "bg-blue-500 text-white" : "hover:bg-blue-300"
                }`}
              >
                Overview
              </button>
            </li>
            <li>
              <button
                onClick={() => setActiveTab("pricing")}
                className={`w-full text-white text-left px-2 py-1 rounded ${
                  activeTab === "pricing" ? "bg-blue-500 text-white" : "hover:bg-blue-300"
                }`}
              >
                Pricing Details
              </button>
            </li>
          </ul>
        </div>
        {/* Content Area */}
        <div className="flex-1 p-4 sm:p-6 md:p-8">{renderContent()}</div>
      </div>
    </div>
  );
};

export default vediodocument;
