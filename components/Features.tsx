
import React from 'react';
import { Sparkles, TrendingUp, RefreshCw } from 'lucide-react';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  className?: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, className = "" }) => (
  <div className={`bg-[#1A1A1A] p-8 md:p-10 rounded-[32px] border border-white/5 flex flex-col items-start gap-6 transition-all duration-500 hover:border-brand-middle/30 hover:translate-y-[-4px] group ${className}`}>
    <div className="p-4 rounded-2xl bg-black/40 border border-white/5 group-hover:bg-black/60 transition-colors">
      <div className="text-brand-middle">
        {icon}
      </div>
    </div>
    <p className="text-white text-lg md:text-xl font-medium leading-tight tracking-tight">
      {title}
    </p>
  </div>
);

const Features: React.FC = () => {
  return (
    <section className="bg-[#f5f3f0] py-24 md:py-32 px-6 md:px-12">
      <div className="container mx-auto">
        {/* Title Section */}
        <div className="mb-16 md:mb-24">
          <h2 className="text-[#0A0A0A] font-black text-3xl md:text-5xl lg:text-6xl max-w-5xl leading-[1.1] tracking-tighter">
            O modelo de lançamento para vender high ticket mais lucrativo e verdadeiramente sustentável do digital em 2026, com o melhor dos 3 mundos:

          </h2>
        </div>

        <div className="flex flex-col gap-6">
          {/* Top Row: 2 Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FeatureCard 
              icon={<Sparkles className="w-8 h-8" />} 
              title="O volume de leads do lançamento gratuito." 
            />
            <FeatureCard 
              icon={<TrendingUp className="w-8 h-8" />} 
              title="O ROI do lançamento pago." 
            />
          </div>

          {/* Middle Row: Orgânico Card */}
          <div className="w-full">
            <FeatureCard 
              icon={<RefreshCw className="w-8 h-8" />} 
              title="Um sistema orgânico que continua vendendo entre um carrinho e outro." 
              className="w-full"
            />
          </div>

          {/* Bottom Row: Highlighted Text Block (Below the card as requested) */}
          <div className="mt-8 md:mt-12 flex flex-col items-start">
            <div className="space-y-3 md:space-y-4">
              <div className="flex flex-col">
                <p className="text-[#0A0A0A] text-2xl md:text-4xl lg:text-5xl font-black leading-none tracking-tighter opacity-90">
                  …sem equipe dedicada
                </p>
                <p className="text-[#0A0A0A] text-2xl md:text-4xl lg:text-5xl font-black leading-none tracking-tighter opacity-90">
                  …com rotina real de 4h por dia
                </p>
                <p className="text-[#0A0A0A] text-2xl md:text-4xl lg:text-5xl font-black leading-none tracking-tighter opacity-90">
                  …e usando seu próprio desenvolvimento pessoal
                </p>
              </div>
              
              <div className="h-[3px] w-16 md:w-24 bg-brand-gradient my-6" />
              
              <p className="text-[#0A0A0A] text-xl md:text-2xl lg:text-3xl font-bold leading-tight tracking-tight max-w-2xl">
                para sair do <span className="text-brand-start italic">“nicho saturado”</span> e ocupar uma categoria única no mercado.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
