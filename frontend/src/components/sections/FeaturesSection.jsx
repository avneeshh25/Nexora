'use client';
import React from 'react';
import Particles from '@/components/Particles';

const FeatureCard = ({ title, description, icon,link }) => (
  <div className="bg-gray-900/60 p-8 rounded-2xl hover-scale relative group overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-b from-sky-400/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    <div className="relative z-10">
      <div className="w-16 h-16 bg-gradient-to-r from-sky-400 to-emerald-400 rounded-full mb-6 flex items-center justify-center">
        <img src={icon} alt={title} className="w-8 h-8 brightness-0 invert" />
      </div>
      <h3 className="text-2xl font-bold mb-4">{title}</h3>
      <p className="text-gray-300">{description}</p>
      <a href={link} className="text-sky-400 hover:underline mt-4 inline-block">Know more</a>
    </div>
  </div>
);

export default function FeaturesSection() {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <Particles 
          particleCount={100}
          particleSpread={15}
          speed={0.2}
          particleColors={["#38bdf8", "#34d399"]}
          moveParticlesOnHover={true}
          particleHoverFactor={1.5}
          alphaParticles={true}
          particleBaseSize={120}
          sizeRandomness={1.2}
        />
      </div>
      
      <div className="text-center mb-16">
        <h2 className="text-5xl font-bold mb-6">
          Powerful <span className="bg-gradient-to-r from-sky-400 to-emerald-400 bg-clip-text text-transparent">Features</span> For Seamless Communication
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
          link="/vedio"
          
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
          link="/chatting"
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
  );
}