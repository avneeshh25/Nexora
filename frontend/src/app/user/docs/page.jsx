'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Button from '@/components/Button'
import Apikey from '@/components/Apikey'
import DashboardApi from '@/components/DashboardApi'   // ← import usage component

const tabs = [
  { key: 'overview', label: 'Overview' },
  { key: 'pricing',  label: 'Pricing Details' },
  { key: 'api',      label: 'API Generation' },
  { key: 'usage',    label: 'Usage Stats' }         // ← new tab
]

const containerVariants = {
  hidden:   { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.1 } }
}
const itemVariants = {
  hidden:   { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0 }
}

export default function DocsPage() {
  const [activeTab, setActiveTab] = useState('overview')
  const [selectedKey, setSelectedKey] = useState('')   // ← track generated/viewed key

  return (
    <div className="flex flex-col min-h-screen py-10 bg-black text-white overflow-hidden">
      {/* Top bar on mobile */}
      <div className="md:hidden bg-gradient-to-r from-blue-900 via-purple-800 to-black p-4">
        <select
          value={activeTab}
          onChange={e => setActiveTab(e.target.value)}
          className="w-full bg-gray-900 text-white rounded-lg px-3 py-2 shadow-inner focus:outline-none"
        >
          {tabs.map(t => (
            <option key={t.key} value={t.key}>{t.label}</option>
          ))}
        </select>
      </div>
      <div className="flex flex-1">
        {/* Sidebar */}
        <aside className="hidden md:flex flex-col w-64 p-6 bg-gradient-to-b from-black to-gray-900 border-r border-gray-800">
          <h2 className="text-2xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
            Documentation
          </h2>
          <motion.ul initial="hidden" animate="visible" variants={containerVariants} className="space-y-4">
            {tabs.map((t) => (
              <motion.li key={t.key} variants={itemVariants}>
                <button
                  onClick={() => setActiveTab(t.key)}
                  className={`w-full text-left px-4 py-2 rounded-lg font-medium transition ${
                    activeTab === t.key
                      ? 'bg-gradient-to-r from-blue-600 to-violet-600 text-white shadow-lg'
                      : 'text-gray-400 hover:bg-gray-800 hover:text-white'
                  }`}
                >
                  {t.label}
                </button>
              </motion.li>
            ))}
          </motion.ul>
        </aside>

        {/* Content */}
        <main className="flex-1 p-6 sm:p-8 md:p-10 overflow-y-auto">
          <AnimatePresence exitBeforeEnter>
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.4 }}
            >
              {activeTab === 'overview' ? (
                <motion.div variants={containerVariants} initial="hidden" animate="visible" className="space-y-8">
                  <motion.div variants={itemVariants}>
                    <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
                      CHAT AND VIDEO CALLING SDK
                    </h2>
                    <p>A React‐based SDK for 1:1 chat & video calling.</p>
                  </motion.div>

                  <motion.div variants={itemVariants} className="space-y-2">
                    <h3 className="text-2xl font-semibold">Installation</h3>
                    <div className="relative group">
                      <pre className="relative bg-gradient-to-r from-blue-800 to-purple-800 p-4 rounded-lg overflow-x-auto text-gray-100">
                        <code>npm install chat-video-sdk</code>
                        <motion.div
                          className="absolute inset-0 rounded-lg border-2 border-transparent group-hover:border-blue-400 transition"
                          layout
                        />
                      </pre>
                    </div>
                  </motion.div>

                  <motion.div variants={itemVariants} className="space-y-2">
                    <h3 className="text-2xl font-semibold">Features</h3>
                    <ul className="list-disc list-inside space-y-1">
                      {[
                        '1:1 Real-Time chat messaging',
                        '1:1 Video calling with WebRTC',
                        'React components for easy integration',
                        'TypeScript support',
                        'Customizable UI'
                      ].map((f,i) => (
                        <motion.li key={i} variants={itemVariants} className="pl-2">
                          {f}
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>

                  <motion.div variants={itemVariants} className="space-y-2">
                    <h3 className="text-2xl font-semibold">Prerequisites</h3>
                    <ul className="list-disc list-inside space-y-1">
                      {[
                        'React 19.0.0 or higher',
                        'A WebSocket/Socket.IO server for signaling'
                      ].map((p,i) => (
                        <motion.li key={i} variants={itemVariants} className="pl-2">
                          {p}
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>

                  <motion.div variants={itemVariants} className="space-y-2">
                    <h3 className="text-2xl font-semibold">Usage</h3>
                    <div className="relative group">
                      <pre className="relative bg-gradient-to-r from-blue-800 to-purple-800 p-4 rounded-lg overflow-x-auto text-gray-100">
                        <code>{`import { Chat } from 'chat-video-sdk';

function App() {
  return (
    <Chat
      userId="user1"
      receiverId="user2"
      serverUrl="https://your-signaling-server.com"
    />
  );
}`}</code>
                        <motion.div
                          className="absolute inset-0 rounded-lg border-2 border-transparent group-hover:border-blue-400 transition"
                          layout
                        />
                      </pre>
                    </div>
                    <div className="relative group">
                      <pre className="relative bg-gradient-to-r from-blue-800 to-purple-800 p-4 rounded-lg overflow-x-auto text-gray-100">
                        <code>{`import { VideoCall } from 'chat-video-sdk';

function App() {
  return (
    <VideoCall
      userId="user1"
      receiverId="user2"
      serverUrl="https://your-signaling-server.com"
      onCallEnded={() => console.log('Call ended')}
    />
  );
}`}</code>
                        <motion.div
                          className="absolute inset-0 rounded-lg border-2 border-transparent group-hover:border-blue-400 transition"
                          layout
                        />
                      </pre>
                    </div>
                  </motion.div>

                  <motion.div variants={itemVariants} className="space-y-2">
                    <h3 className="text-2xl font-semibold">Advanced Usage</h3>
                    <div className="relative group">
                      <pre className="relative bg-gradient-to-r from-blue-800 to-purple-800 p-4 rounded-lg overflow-x-auto text-gray-100">
                        <code>{`import { ChatService, VideoService } from 'chat-video-sdk';

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
});`}</code>
                        <motion.div
                          className="absolute inset-0 rounded-lg border-2 border-transparent group-hover:border-blue-400 transition"
                          layout
                        />
                      </pre>
                    </div>
                  </motion.div>

                  <motion.div variants={itemVariants} className="space-y-2">
                    <h3 className="text-2xl font-semibold">Server Requirements</h3>
                    <ul className="list-disc list-inside space-y-1">
                      {[
                        'WebSocket/Socket.IO connections',
                        'User registration/authentication',
                        'Message relaying',
                        'WebRTC signaling (offer/answer/ICE candidates)'
                      ].map((r,i) => (
                        <motion.li key={i} variants={itemVariants} className="pl-2">
                          {r}
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>

                  <motion.div variants={itemVariants} className="space-y-2">
                    <h3 className="text-2xl font-semibold">License</h3>
                    <p>MIT</p>
                  </motion.div>

                  <motion.div variants={itemVariants} className="space-y-2">
                    <h3 className="text-2xl font-semibold">Keywords</h3>
                    <p className="text-red-500 hover:text-red-300">chat <br /> video-calling  <br /> web-rtc  <br /> real-time</p>
                  </motion.div>

                  <motion.div variants={itemVariants} className="mt-6">
                    <Button className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-full shadow-lg animate-pulse">
                      Get Started
                    </Button>
                  </motion.div>
                </motion.div>
              ) : activeTab === 'pricing' ? (
                <motion.div variants={containerVariants} initial="hidden" animate="visible" className="space-y-8 bg-gradient-to-l from-green-900 to-blue-900 p-6 rounded-xl">
                  <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-300 to-blue-200">
                    Pricing Plans
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    <motion.div variants={itemVariants} className="bg-gray-800 rounded-lg p-6 shadow-md hover:shadow-xl transition">
                      <div className="text-center mb-4">
                        <span className="text-xl font-semibold">Free Trial</span>
                      </div>
                      <ul className="space-y-2 mb-6">
                        <li>1 GB Storage</li>
                        <li>2 GB Bandwidth</li>
                        <li>Community Support</li>
                      </ul>
                      <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded-full transition">
                        Get Free
                      </button>
                    </motion.div>
                    <motion.div variants={itemVariants} className="bg-gray-800 rounded-lg p-6 shadow-md hover:shadow-xl transition">
                      <div className="text-center mb-4">
                        <span className="text-xl font-semibold">Team</span>
                      </div>
                      <ul className="space-y-2 mb-6">
                        <li>Unlimited file storage</li>
                        <li>10 GB bandwidth per month</li>
                        <li>Email support</li>
                        <li>100 Webhooks</li>
                      </ul>
                      <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded-full transition">
                        $19
                      </button>
                    </motion.div>
                    <motion.div variants={itemVariants} className="bg-gray-800 rounded-lg p-6 shadow-md hover:shadow-xl transition">
                      <div className="text-center mb-4">
                        <span className="text-xl font-semibold">Enterprise</span>
                      </div>
                      <ul className="space-y-2 mb-6">
                        <li>Unlimited file storage</li>
                        <li>Unlimited bandwidth per month</li>
                        <li>1,000,000 tasks per month</li>
                        <li>Email and phone support</li>
                        <li>Unlimited Webhooks</li>
                      </ul>
                      <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded-full transition">
                        $49
                      </button>
                    </motion.div>
                  </div>
                </motion.div>
              ) : activeTab === 'api' ? (
                <motion.div variants={containerVariants} initial="hidden" animate="visible" className="space-y-8">
                  <Apikey onKeyGenerated={setSelectedKey} />
                </motion.div>
              ) : activeTab === 'usage' ? (
                <motion.div variants={containerVariants} initial="hidden" animate="visible" className="space-y-8">
                  <DashboardApi apiKey={selectedKey} />
                </motion.div>
              ) : null}
            </motion.div>
          </AnimatePresence>
        </main>
      </div>
    </div>
  )
}
