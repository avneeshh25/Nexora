'use client'
import React from 'react'
import Header from "@/components/sections/Header"
import Footer from "@/components/sections/Footer"
import Particles from "@/components/Particles"
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient"

// Example data; replace with your real team list
const teamMembers = [
  { id: 1, name: 'Avneesh Yadav', role: 'Project Lead & Backend Developer',about :'',
     img: 'https://…' },
  { id: 2, name: 'Lakshya Shukla', role: 'Frontend Developer',about: 'A self-motivated MERN Full Stack Developer with strong skills in JavaScript, MongoDB, and full-stack architecture. I’ve built projects like a real-time SDK platform and a voice-controlled e-commerce app, showcasing my practical backend and frontend capabilities. With excellent communication and time management skills, I thrive in collaborative environments and consistently deliver on deadlines. I hold a BCA with an 8.29 CGPA and have a deep commitment to learning and growth. I’m eager to contribute to innovative tech teams that value creativity and problem-solving.',
     img: 'https://…' },
  // …more members
]

const About = () => {
  return (
    <div className="bg-black text-white flex  flex-col min-h-screen">
      {/* <Header /> */}

      {/* animated particle background */}
      <div className="relative flex-1">
        <Particles
          particleColors={['#0de415', '#0de415']}
          particleCount={100}
          particleSpread={20}
          speed={0.2}
          particleBaseSize={80}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={true}
        />

        {/* content container */}
        <div
          className="
            relative z-10
            w-full max-w-screen-2xl   /* full width up to 2xl */
            px-4 sm:px-6 lg:px-8
            py-35
          "
        >
          <h1 className="text-center  text-4xl sm:text-5xl lg:text-6xl font-bold
                        bg-gradient-to-r from-sky-400 via-cyan-400 to-emerald-400 
                         bg-clip-text text-transparent animate-pulse">
            Our Executive Team
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-center text-gray-400">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex placeat modi magni quia error alias.
          </p>

          <div className="mt-15 p-10 mx-60 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-15">
            {teamMembers.map(member => (
              <HoverBorderGradient
                key={member.id}
                className="block rounded-xl p-1 transition-opacity duration-300 hover:opacity-70"
              >
                <div className="bg-black rounded-lg p-6 text-center space-y-4">
                  <img
                    src={member.img}
                    alt={member.name}
                    className="mx-auto w-24 h-24 rounded-full ring-4 ring-blue-600"
                  />
                  {/* Increased font sizes for the name */}
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold">
                    {member.name}
                  </h3>
                  <p className="text-sm text-gray-500">{member.role}</p>
                  <p className="text-sm text-white">{member.about}</p>
                </div>
              </HoverBorderGradient>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default About