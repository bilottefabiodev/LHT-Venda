import React from 'react';
import { Sparkles } from 'lucide-react';

const Marquee: React.FC = () => {
  const keywords = [
    "Atrai lead qualificado - 40-50%",
    "Converte público frio",
    "Taxa de inscritos no grupo do whatsapp 90%",
    "Comparecimento alto",
    "Conversão alta",
    "Lead paga tráfego",
    "Venda contínua entre carrinhos"
  ];

  // Quadruplicado para garantir um loop infinito sem espaços em branco em telas grandes
  const listItems = [...keywords, ...keywords, ...keywords, ...keywords];

  return (
    <div className="w-full bg-[#0A0A0A] border-y border-white/10 py-6 md:py-8 overflow-hidden relative">
      {/* Injeção de estilo local para garantir que a animação funcione sempre */}
      <style>{`
        @keyframes marquee-scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-custom-marquee {
          display: flex;
          width: max-content;
          animation: marquee-scroll 30s linear infinite;
        }
        .animate-custom-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>

      <div className="animate-custom-marquee items-center">
        {listItems.map((item, index) => (
          <div key={index} className="flex items-center gap-8 md:gap-14 mx-4 md:mx-7">
            <span className="text-white font-black text-lg md:text-2xl uppercase tracking-tighter whitespace-nowrap">
              {item}
            </span>
            <div className="relative shrink-0 flex items-center justify-center">
               <Sparkles className="w-4 h-4 md:w-5 md:h-5 text-[#E88B4E] opacity-90 animate-pulse" />
               <div className="absolute inset-0 bg-brand-end/20 blur-md rounded-full" />
            </div>
          </div>
        ))}
      </div>
      
      {/* Sombras nas bordas para efeito de fade */}
      <div className="absolute inset-y-0 left-0 w-32 md:w-64 bg-gradient-to-r from-[#0A0A0A] via-[#0A0A0A]/80 to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-32 md:w-64 bg-gradient-to-l from-[#0A0A0A] via-[#0A0A0A]/80 to-transparent z-10 pointer-events-none" />
      
      {/* Efeito sutil de linhas (Scanlines) */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[length:100%_4px]" />
    </div>
  );
};

export default Marquee;
