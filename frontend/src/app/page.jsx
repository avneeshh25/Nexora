// App.js
"use client";
import React, { useEffect } from "react";
import "./styles.css";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { Meteors } from "@/components/ui/meteors";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";

const FeatureCard = ({ title, description, icon }) => (
  <div className="relative feature-card overflow-hidden">
    {/* Add Meteors as the background */}
    <Meteors
      number={10} // Number of meteors
      className="absolute inset-0 -z-10" // Position meteors behind the card content
    />
    <h2 className="text-2xl font-bold mb-4">{title}</h2>
    <p className="text-gray-300">{description}</p>
    <div className="mt-6 flex justify-center">
      <img src={icon} alt={title} className="w-24 h-24" />
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
        
        <button className="bg-gray-800 text-white px-6 py-3 rounded-full text-lg">
          Login/Signup
        </button>
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

      <section className="text-center max-w-4xl mx-auto mb-12">
        <h1 className="text-5xl font-bold mb-6">
          Powerful <span className="gradient-text">Features</span> For Seamless
          Communication
        </h1>
        <p className="text-xl text-gray-300">
          Experience real-time collaboration with high-quality audio, video,
          and AI-powered interactions.
        </p>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-6 max-w-7xl mx-auto">
       <FeatureCard
          title="HD Video Calls"
          description="Crystal-clear video with low latency for seamless meetings."
          icon="frontend/public/6717aca6059072dc4b49dbff_Feature-image-3.webp"
        />
        <FeatureCard
          title="AI Transcription"
          description="Real-time speech-to-text conversion with AI-driven accuracy."
          icon="https://cdn.jsdelivr.net/gh/heroicons/heroicons/optimized/24/outline/microphone.svg"
        />
        <FeatureCard
          title="Interactive Chat"
          description="Engage with real-time messaging and smart responses."
          icon="https://cdn.jsdelivr.net/gh/heroicons/heroicons/optimized/24/outline/chat-bubble-left.svg"
        />
        <FeatureCard
          title="Secure Cloud Storage"
          description="Store and access meeting recordings with end-to-end encryption."
          icon="https://cdn.jsdelivr.net/gh/heroicons/heroicons/optimized/24/outline/cloud.svg"
        />
        <FeatureCard
          title="Multi-Platform Support"
          description="Seamless integration across web, mobile, and desktop."
          icon="https://cdn.jsdelivr.net/gh/heroicons/heroicons/optimized/24/outline/device-phone-mobile.svg"
        />
        <FeatureCard
          title="Customizable UI"
          description="Tailor the interface to match your brand and user experience."
          icon="https://cdn.jsdelivr.net/gh/heroicons/heroicons/optimized/24/outline/adjustments-horizontal.svg"
        />
      </div>
      <BackgroundBeams></BackgroundBeams>
    </div>
  );
};

export default App;
