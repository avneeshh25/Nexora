// App.js - hello
"use client";
import React, { useEffect } from "react";
import "./styles.css";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { Meteors } from "@/components/ui/meteors";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import Particles from "@/components/Particles";

const FeatureCard = ({ title, description, icon }) => (
  <div className="bg-gray-900/60 p-8 rounded-2xl hover-scale relative group overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-b from-purple-500/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    <div className="relative z-10">
      <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-full mb-6 flex items-center justify-center">
        <img src={icon} alt={title} className="w-8 h-8" />
      </div>
      <h3 className="text-2xl font-bold mb-4">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </div>
  </div>
);

const App = () => {
  useEffect(() => {
    // Fade-up animations
    document.querySelectorAll(".fade-up").forEach((el, index) => {
      setTimeout(() => {
        el.classList.add("visible");
      }, index * 300);
    });
  }, []);

  useEffect(() => {
    const card = document.getElementById("card");

    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;

      // Calculate rotation values
      const rotateX = ((clientY / innerHeight) - 0.5) * 40; // Adjust rotation on Y-axis
      const rotateY = ((clientX / innerWidth) - 0.5) * -40; // Adjust rotation on X-axis

      // Apply transform to the card
      if (card) {
        card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
      }
    };

    // Add event listener
    window.addEventListener("mousemove", handleMouseMove);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="bg-black text-white">
      <Meteors
        number={10}
        className="absolute inset-0 -z-10" // Ensure it is behind other elements
      />

      <header className="relative flex justify-between items-center p-8 z-10">
        <div className="text-3xl font-bold">
          Nexor<span className="text-indigo-500">a</span>
        </div>

        <nav className="space-x-8 bg-gray-900 px-6 py-3 rounded-full">
          <a href="/" className="text-green-400 text-lg">
            Home
          </a>
          <a href="/about" className="text-gray-400 text-lg">
            About
          </a>
          <a href="#" className="text-gray-400 text-lg">
            Features
          </a>
          <a href="/contact" className="text-gray-400 text-lg">
            Contact
          </a>
        </nav>

        <div className="space-x-4">
          <a
            href="/login"
            className="bg-indigo-600 text-white px-6 py-3 rounded-full text-lg hover:bg-indigo-700 transition-colors inline-block"
          >
            Login
          </a>
          <a
            href="/signup"
            className="bg-gray-800 text-white px-6 py-3 rounded-full text-lg hover:bg-gray-700 transition-colors inline-block"
          >
            SignUp
          </a>
        </div>
      </header>

      <main className="text-center mt-8 mb-20 flex flex-col items-center">
        <h1 className="text-6xl font-bold leading-tight fade-up">
          Create Immersive & Scalable{" "}
          <span className="bg-gradient-to-r from-pink-400 to-teal-400 bg-clip-text text-transparent">
            Real-Time Experiences
          </span>{" "}
          without Complexity
        </h1>
        <p className="text-2xl text-gray-400 mt-8 max-w-3xl fade-up">
          Integrate high-quality{" "}
          <span className="bg-gradient-to-r from-pink-400 to-teal-400 bg-clip-text text-transparent">
            Chat Audio/Video
          </span>{" "}
          with just a few lines of code. Enhanced with AI features.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-6">
          <HoverBorderGradient>Get Started</HoverBorderGradient>
          <HoverBorderGradient>Know More
          </HoverBorderGradient>
        </div>
        <div
          className="relative w-[58vw] h-[80vh] p-2 rounded-2xl mt-12 fade-up card"
          id="card"
          style={{
            background: "linear-gradient(90deg, #a855f7, #ec4899, #008080)",
            backgroundSize: "200% 200%",
            animation: "gradientMove 3s infinite linear",
          }}
        >
          <div className="w-full h-full bg-gray-800 rounded-2xl overflow-hidden">
            <img
              src="main.webp"
              alt="Main Visual"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </main>

      {/* Features Section with Enhanced Styling */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <Particles 
            particleCount={100}
            particleSpread={15}
            speed={0.2}
            particleColors={["#a855f7", "#ec4899", "#3b82f6"]}
            moveParticlesOnHover={true}
            particleHoverFactor={1.5}
            alphaParticles={true}
            particleBaseSize={120}
            sizeRandomness={1.2}
          />
        </div>
        
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6">
            Powerful <span className="bg-gradient-to-r from-pink-400 to-indigo-600 bg-clip-text text-transparent">Features</span> For Seamless Communication
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Experience real-time collaboration with high-quality audio, video,
            and AI-powered interactions.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-6 max-w-7xl mx-auto">
          <FeatureCard
            title="HD Video Calls"
            description="Crystal-clear video with low latency for seamless meetings."
            icon="/window.svg"
          />
          <FeatureCard
            title="AI Transcription"
            description="Real-time speech-to-text conversion with AI-driven accuracy."
            icon="/file.svg"
          />
          <FeatureCard
            title="Interactive Chat"
            description="Engage with real-time messaging and smart responses."
            icon="/globe.svg"
          />
          <FeatureCard
            title="Secure Cloud Storage"
            description="Store and access meeting recordings with end-to-end encryption."
            icon="/window.svg"
          />
          <FeatureCard
            title="Multi-Platform Support"
            description="Seamless integration across web, mobile, and desktop."
            icon="/file.svg"
          />
          <FeatureCard
            title="Customizable UI"
            description="Tailor the interface to match your brand and user experience."
            icon="/globe.svg"
          />
        </div>
      </section>

      {/* Project Journey Section */}
      <section className="py-20 relative overflow-hidden">
        <BackgroundBeams className="absolute inset-0 -z-10" />
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6">
              Our <span className="gradient-text">Journey</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From concept to creation - how our final year project evolved into a powerful communication SDK
            </p>
          </div>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-purple-500 via-blue-500 to-cyan-400"></div>
            
            {/* Timeline items */}
            <div className="space-y-16">
              {/* Milestone 1 */}
              <div className="relative flex items-center justify-between">
                <div className="w-5/12 pr-8 text-right animate-float">
                  <h3 className="text-2xl font-bold mb-2">Project Conception</h3>
                  <p className="text-gray-300">We identified the need for an accessible communication SDK that students and educators could use without expensive licensing fees.</p>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 z-10 flex items-center justify-center">
                  <span className="text-white text-xl font-bold">1</span>
                </div>
                <div className="w-5/12 pl-8"></div>
              </div>
              
              {/* Milestone 2 */}
              <div className="relative flex items-center justify-between">
                <div className="w-5/12 pr-8"></div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 z-10 flex items-center justify-center">
                  <span className="text-white text-xl font-bold">2</span>
                </div>
                <div className="w-5/12 pl-8 animate-float-slow">
                  <h3 className="text-2xl font-bold mb-2">Research & Development</h3>
                  <p className="text-gray-300">Exploring WebRTC, socket connections, and encryption protocols to build a secure and efficient communication framework.</p>
                </div>
              </div>
              
              {/* Milestone 3 */}
              <div className="relative flex items-center justify-between">
                <div className="w-5/12 pr-8 text-right animate-float">
                  <h3 className="text-2xl font-bold mb-2">Prototype Testing</h3>
                  <p className="text-gray-300">Rigorous testing with fellow students across different devices and network conditions to ensure reliability.</p>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-gradient-to-r from-cyan-500 to-teal-500 z-10 flex items-center justify-center">
                  <span className="text-white text-xl font-bold">3</span>
                </div>
                <div className="w-5/12 pl-8"></div>
              </div>
              
              {/* Milestone 4 */}
              <div className="relative flex items-center justify-between">
                <div className="w-5/12 pr-8"></div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-gradient-to-r from-teal-500 to-green-500 z-10 flex items-center justify-center">
                  <span className="text-white text-xl font-bold">4</span>
                </div>
                <div className="w-5/12 pl-8 animate-float-slow">
                  <h3 className="text-2xl font-bold mb-2">Nexora is Born</h3>
                  <p className="text-gray-300">Launch of our final year project as a free, open SDK for educational institutions and student developers to integrate into their applications.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Code Showcase Section */}
      <section className="py-20 relative bg-gray-900/50">
        <Meteors number={15} className="absolute inset-0 -z-10" />
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6">
              Simple <span className="gradient-text">Integration</span>
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
              <h3 className="text-3xl font-bold mb-8 gradient-text">Built For Students, By Students</h3>
              <ul className="space-y-6">
                <li className="flex items-start">
                  <div className="flex-shrink-0 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full p-2 mr-4">
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
                  <div className="flex-shrink-0 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full p-2 mr-4">
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
                  <div className="flex-shrink-0 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-full p-2 mr-4">
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

      {/* Academic Use Cases Section */}
      <section className="py-20 relative overflow-hidden">
        <BackgroundBeams className="absolute inset-0 -z-10" />
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6">
              Academic <span className="gradient-text">Applications</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See how Nexora is enhancing educational experiences across campus
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Use Case 1 */}
            <div className="bg-gray-900/60 p-8 rounded-2xl hover-scale relative group">
              <div className="absolute inset-0 bg-gradient-to-b from-purple-500/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-full mb-6 flex items-center justify-center">
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
              <div className="absolute inset-0 bg-gradient-to-b from-blue-500/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-full mb-6 flex items-center justify-center">
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
              <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-teal-600 rounded-full mb-6 flex items-center justify-center">
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

      {/* Benefits for Students Section */}
      <section className="py-20 bg-gray-900/50 relative">
        <Meteors number={20} className="absolute inset-0 -z-10" />
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6">
              Why <span className="gradient-text">Open & Free?</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our commitment to making cutting-edge technology accessible to every student
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <img src="/main.webp" alt="Students collaborating" className="rounded-2xl gradient-border p-1 animate-float" />
            </div>
            
            <div className="space-y-8">
              <div className="bg-black/40 p-6 rounded-xl hover-scale">
                <h3 className="text-2xl font-bold mb-3 flex items-center">
                  <span className="w-10 h-10 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mr-3 flex items-center justify-center text-white">1</span>
                  Knowledge Sharing
                </h3>
                <p className="text-gray-300">We believe that educational technology should be accessible to all students regardless of financial resources. Our SDK represents our commitment to democratizing access to communication tools.</p>
              </div>
              
              <div className="bg-black/40 p-6 rounded-xl hover-scale">
                <h3 className="text-2xl font-bold mb-3 flex items-center">
                  <span className="w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mr-3 flex items-center justify-center text-white">2</span>
                  Practical Learning
                </h3>
                <p className="text-gray-300">By open-sourcing our code, we provide a real-world example that students can study, modify, and learn from - turning theory into practical knowledge.</p>
              </div>
              
              <div className="bg-black/40 p-6 rounded-xl hover-scale">
                <h3 className="text-2xl font-bold mb-3 flex items-center">
                  <span className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-full mr-3 flex items-center justify-center text-white">3</span>
                  Building a Community
                </h3>
                <p className="text-gray-300">By making Nexora freely available, we hope to build a community of student developers who can contribute, improve, and extend the platform for years to come.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 relative">
        <BackgroundBeams className="absolute inset-0 -z-10" />
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6">
              Meet the <span className="gradient-text">Team</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              The passionate students behind this final year project
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Team Member 1 */}
            <div className="bg-gray-900/40 backdrop-blur-sm p-6 rounded-2xl gradient-border hover-scale text-center">
              <div className="relative w-32 h-32 mx-auto mb-6 overflow-hidden rounded-full bg-gradient-to-r from-purple-500 to-pink-500 p-1">
                <div className="absolute inset-1 rounded-full bg-gray-800"></div>
                {/* You can add actual photos here if available */}
              </div>
              <h3 className="text-xl font-bold">Avneesh Yadav</h3>
              <p className="text-gray-400 mb-4">Project Lead & Backend Developer</p>
              <div className="flex justify-center space-x-3">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>
            
            {/* Team Member 2 */}
            <div className="bg-gray-900/40 backdrop-blur-sm p-6 rounded-2xl gradient-border hover-scale text-center">
              <div className="relative w-32 h-32 mx-auto mb-6 overflow-hidden rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 p-1">
                <div className="absolute inset-1 rounded-full bg-gray-800"></div>
              </div>
              <h3 className="text-xl font-bold">Team Member</h3>
              <p className="text-gray-400 mb-4">Frontend Engineer</p>
              <div className="flex justify-center space-x-3">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>
            
            {/* Team Member 3 */}
            <div className="bg-gray-900/40 backdrop-blur-sm p-6 rounded-2xl gradient-border hover-scale text-center">
              <div className="relative w-32 h-32 mx-auto mb-6 overflow-hidden rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 p-1">
                <div className="absolute inset-1 rounded-full bg-gray-800"></div>
              </div>
              <h3 className="text-xl font-bold">Team Member</h3>
              <p className="text-gray-400 mb-4">API & SDK Architect</p>
              <div className="flex justify-center space-x-3">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>
            
            {/* Team Member 4 */}
            <div className="bg-gray-900/40 backdrop-blur-sm p-6 rounded-2xl gradient-border hover-scale text-center">
              <div className="relative w-32 h-32 mx-auto mb-6 overflow-hidden rounded-full bg-gradient-to-r from-teal-500 to-green-500 p-1">
                <div className="absolute inset-1 rounded-full bg-gray-800"></div>
              </div>
              <h3 className="text-xl font-bold">Team Member</h3>
              <p className="text-gray-400 mb-4">UI/UX Designer</p>
              <div className="flex justify-center space-x-3">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Recognition Section */}
      <section className="py-20 bg-gray-900/50 relative">
        <Meteors number={15} className="absolute inset-0 -z-10" />
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6">
              Project <span className="gradient-text">Recognition</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Achievements and acknowledgments from our academic community
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Achievement 1 */}
            <div className="bg-gray-900/60 p-8 rounded-2xl hover-scale relative group">
              <div className="absolute inset-0 bg-gradient-to-b from-purple-500/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full mb-6 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-3">Best Final Year Project</h3>
                <p className="text-gray-300 mb-6">
                  Recognized by the Department of Computer Science for innovation and practical application.
                </p>
                <div className="text-sm text-gray-400">May 2025</div>
              </div>
            </div>
            
            {/* Achievement 2 */}
            <div className="bg-gray-900/60 p-8 rounded-2xl hover-scale relative group">
              <div className="absolute inset-0 bg-gradient-to-b from-blue-500/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-full mb-6 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-3">Technical Excellence</h3>
                <p className="text-gray-300 mb-6">
                  Acknowledged for outstanding technical implementation and software architecture.
                </p>
                <div className="text-sm text-gray-400">April 2025</div>
              </div>
            </div>
            
            {/* Achievement 3 */}
            <div className="bg-gray-900/60 p-8 rounded-2xl hover-scale relative group">
              <div className="absolute inset-0 bg-gradient-to-b from-green-500/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full mb-6 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-3">Innovation Award</h3>
                <p className="text-gray-300 mb-6">
                  Honored for creating an innovative solution that addresses real educational needs.
                </p>
                <div className="text-sm text-gray-400">March 2025</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Get Started Section */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-900/20 to-black -z-10"></div>
        <BackgroundBeams className="absolute inset-0 -z-5" />
        <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-5xl md:text-6xl font-bold mb-8">
            Ready to <span className="gradient-text">Transform</span> Your Student Projects?
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
            Join hundreds of student developers already using Nexora to create amazing communication experiences in their projects.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a href="/signup" className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white px-8 py-4 rounded-full text-lg font-medium transition-colors">
              Get Started for Free
            </a>
            <a href="https://github.com/yourusername/nexora" target="_blank" rel="noopener noreferrer" className="bg-gray-800 text-white px-8 py-4 rounded-full text-lg hover:bg-gray-700 transition-colors flex items-center justify-center">
              <svg className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
              View on GitHub
            </a>
          </div>
          
          <div className="mt-12 px-6 py-4 bg-gray-900/60 inline-block rounded-full">
            <p className="text-gray-300">Made with 💜 by Students, for Students | Final Year Project 2025</p>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-gray-400 py-8">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Column 1: About */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4">About Nexora</h3>
            <p className="text-sm">
              Nexora is your go-to platform for creating immersive and scalable real-time experiences.
              Simplify your communication with cutting-edge features.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-white">Home</a>
              </li>
              <li>
                <a href="#" className="hover:text-white">About</a>
              </li>
              <li>
                <a href="#" className="hover:text-white">Features</a>
              </li>
              <li>
                <a href="#" className="hover:text-white">Blog</a>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4">Contact Us</h3>
            <p className="text-sm">Email: support@nexora.com</p>
            <p className="text-sm">Phone: +1 (123) 456-7890</p>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="text-center text-sm mt-8 border-t border-gray-700 pt-4">
          © {new Date().getFullYear()} Nexora. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default App;
