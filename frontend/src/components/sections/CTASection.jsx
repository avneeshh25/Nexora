import React from 'react';
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";

export default function CTASection() {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-6">
        <div className="bg-black/60 rounded-3xl p-12 backdrop-blur-sm gradient-border">
          <div className="text-center">
            <h2 className="text-5xl font-bold mb-6">
              Join Our <span className="bg-gradient-to-r from-sky-400 to-emerald-400 bg-clip-text text-transparent">Developer Community</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-10">
              Contribute to the future of educational technology by joining our open-source community. Start building with Nexora today!
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <HoverBorderGradient className="w-full sm:w-auto px-10 py-4 text-lg">
                Get Started
              </HoverBorderGradient>
              <a 
                href="#" 
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-10 py-4 bg-gray-800 hover:bg-gray-700 transition-colors rounded-full text-lg"
              >
                <img src="/Github-desktop-logo-symbol.svg.png" alt="GitHub" className="w-6 h-6" />
                Star on GitHub
              </a>
            </div>
            
            <div className="mt-12 flex flex-col md:flex-row items-center justify-center gap-8">
              <div className="flex items-center gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-sky-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-300">Free for Educational Use</span>
              </div>
              <div className="flex items-center gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-sky-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-300">Open Source License</span>
              </div>
              <div className="flex items-center gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-sky-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-300">Active Community Support</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}