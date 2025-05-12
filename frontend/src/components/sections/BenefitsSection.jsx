import React from 'react';

export default function BenefitsSection() {
  return (
    <section className="py-20 bg-gray-900/50 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6">
            Why <span className="bg-gradient-to-r from-sky-400 to-emerald-400 bg-clip-text text-transparent">Open & Free?</span>
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
                <span className="w-10 h-10 bg-gradient-to-r from-sky-400 to-emerald-400 rounded-full mr-3 flex items-center justify-center text-white">1</span>
                Knowledge Sharing
              </h3>
              <p className="text-gray-300">We believe that educational technology should be accessible to all students regardless of financial resources. Our SDK represents our commitment to democratizing access to communication tools.</p>
            </div>
            
            <div className="bg-black/40 p-6 rounded-xl hover-scale">
              <h3 className="text-2xl font-bold mb-3 flex items-center">
                <span className="w-10 h-10 bg-gradient-to-r from-sky-400 to-emerald-400 rounded-full mr-3 flex items-center justify-center text-white">2</span>
                Practical Learning
              </h3>
              <p className="text-gray-300">By open-sourcing our code, we provide a real-world example that students can study, modify, and learn from - turning theory into practical knowledge.</p>
            </div>
            
            <div className="bg-black/40 p-6 rounded-xl hover-scale">
              <h3 className="text-2xl font-bold mb-3 flex items-center">
                <span className="w-10 h-10 bg-gradient-to-r from-sky-400 to-emerald-400 rounded-full mr-3 flex items-center justify-center text-white">3</span>
                Building a Community
              </h3>
              <p className="text-gray-300">By making Nexora freely available, we hope to build a community of student developers who can contribute, improve, and extend the platform for years to come.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}