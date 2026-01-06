
import React from 'react';

// --- BLOCOS INICIAIS (Abertura e Desejo) ---
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import Features from './components/Features';
import Methodology from './components/Methodology'; // Unificado: Por que e Pra quem funciona

// --- BLOCOS DE CONTEÚDO (O Dossiê Técnico) ---
import Diagnosis from './components/Diagnosis';
import RealProblem from './components/RealProblem';
import System2026 from './components/System2026';
import InPractice from './components/InPractice';

// --- BLOCOS DE FECHAMENTO (Oferta e Autoridade) ---
import PricingSection from './components/PricingSection';
import StrategicAlignment from './components/StrategicAlignment'; // Ancoragem R$ 10k
import InstructorBio from './components/InstructorBio';
import StrategicFAQ from './components/StrategicFAQ';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-[#0A0A0A] flex flex-col font-sans">
      {/* 1. O COMEÇO: Estabelece Autoridade e Desejo */}
      <Hero />
      <Marquee />
      <Features />
      <Methodology />

      {/* 2. O MEIO: Quebra o modelo velho e instala o novo sistema */}
      <Diagnosis />
      <RealProblem />
      <System2026 />
      <InPractice />

      {/* 3. O FECHAMENTO: A oferta e a quebra final de objeções */}
      <PricingSection />
      <StrategicAlignment />
      <InstructorBio />
      <StrategicFAQ />

      {/* 4. REPETIÇÃO: O golpe de misericórdia para conversão */}
      <div className="pb-20 bg-[#0A0A0A] border-t border-white/5">
        <PricingSection />
      </div>

      {/* 5. RODAPÉ INFORMATIVO */}
      <Footer />
    </div>
  );
};

export default App;
