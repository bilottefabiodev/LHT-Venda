import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Hero from './components/Hero';
import Marquee from './components/Marquee';
import Features from './components/Features';
import MethodologyAndResults from './components/Methodology';
import Diagnosis from './components/Diagnosis';
import RealProblem from './components/RealProblem';
import System2026 from './components/System2026';
import InPractice from './components/InPractice';
import PricingSection from './components/PricingSection';
import StrategicAlignment from './components/StrategicAlignment';
import InstructorBio from './components/InstructorBio';
import StrategicFAQ from './components/StrategicFAQ';
import Footer from './components/Footer';
import ThankYou from './components/ThankYou';

const SalesPage = () => (
  <div className="flex flex-col">
    <Hero />
    <Marquee />
    <Features />
    <MethodologyAndResults />
    <Diagnosis />
    <RealProblem />
    <System2026 />
    <InPractice />
    <PricingSection />
    <StrategicAlignment />
    <InstructorBio />
    <StrategicFAQ />
    <div className="pb-20 bg-[#0A0A0A] border-t border-white/5">
      <PricingSection />
    </div>
    <Footer />
  </div>
);

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className="min-h-screen w-full overflow-x-hidden bg-[#0A0A0A] flex flex-col font-sans">
        <Routes>
          <Route path="/" element={<SalesPage />} />
          <Route path="/obrigado" element={<ThankYou />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
