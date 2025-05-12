'use client';
import React from 'react';

export default function CodeShowcaseSection() {
  return (
    <section className="py-20 relative bg-gray-900/50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-20">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6">
            Simple <span className="bg-gradient-to-r from-sky-400 to-emerald-400 bg-clip-text text-transparent">Integration</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Adding Nexora to your project is as simple as a few lines of code
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="bg-black/60 p-6 rounded-2xl hover-scale gradient-border">
            <div className="text-left text-sm md:text-base text-gray-300 font-mono">
              <pre className="language-javascript"><code>{`
// Initialize Nexora in just a few steps
import { NexoraSDK } from 'nexora-sdk';

// Configure your chat room
const chatRoom = NexoraSDK.initializeRoom({
  roomId: 'my-awesome-project',
  username: 'student_dev',
  features: {
    video: true,
    audio: true,
    chat: true,
    screenShare: true
  }
});

// Connect to the room
chatRoom.connect();

// Listen for participants
chatRoom.on('participantJoined', (participant) => {
  console.log(\`\${participant.name} joined the room\`);
  
  // Render their video
  const videoElement = document.getElementById('remote-video');
  participant.attachVideo(videoElement);
});
              `}</code></pre>
            </div>
          </div>
          
          <div>
            <h3 className="text-3xl font-bold mb-8 bg-gradient-to-r from-sky-400 to-emerald-400 bg-clip-text text-transparent">Built For Students, By Students</h3>
            <ul className="space-y-6">
              <li className="flex items-start">
                <div className="flex-shrink-0 bg-gradient-to-r from-sky-400 to-emerald-400 rounded-full p-2 mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-2">Well-Documented API</h4>
                  <p className="text-gray-300">Clear documentation with examples that make it easy for students to implement, even with limited experience.</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 bg-gradient-to-r from-sky-400 to-emerald-400 rounded-full p-2 mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-2">Minimal Dependencies</h4>
                  <p className="text-gray-300">Lightweight implementation that won't bloat your project with unnecessary libraries.</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 bg-gradient-to-r from-sky-400 to-emerald-400 rounded-full p-2 mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-2">Cross-Platform Support</h4>
                  <p className="text-gray-300">Works across browsers and devices, ideal for diverse student populations with different hardware.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}