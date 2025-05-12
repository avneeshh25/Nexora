"use client";
import React from "react";
import "./styles.css";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";

// Import section components
import Header from "@/components/sections/Header";
import HeroSection from "@/components/sections/HeroSection";
import FeaturesSection from "@/components/sections/FeaturesSection";
import AcademicUseCasesSection from "@/components/sections/AcademicUseCasesSection";
import BenefitsSection from "@/components/sections/BenefitsSection";
import CodeShowcaseSection from "@/components/sections/CodeShowcaseSection";
import CTASection from "@/components/sections/CTASection";
import JourneySection from "@/components/sections/JourneySection";
import RecognitionSection from "@/components/sections/RecognitionSection";
import TeamSection from "@/components/sections/TeamSection";
import Footer from "@/components/sections/Footer";

const App = () => {
  return (
    <div className="bg-black text-white">
      <Header />
      <main>
        <HeroSection />
        <FeaturesSection />
        <CodeShowcaseSection />
        <AcademicUseCasesSection />
        <BenefitsSection />
        <JourneySection />
        <RecognitionSection />
        <TeamSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default App;