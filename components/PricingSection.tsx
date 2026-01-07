import React from 'react';
import { Check, Calendar, Monitor, ArrowRight, Sparkle } from 'lucide-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPix } from '@fortawesome/free-brands-svg-icons';

const PricingSection: React.FC = () => {
  const benefits = [
    "Estratégia de lançamento pago no detalhe.",
    "Debriefing do nosso novo maior lançamento.",
    "Planejamento de tráfego.",
    "Big idea, promessas e páginas.",
    "Oficina de criativos.",
    "Dados, análises, insights e otimizações.",
    "Aumentando o Comparecimento.",
    "Narrativa do evento de lançamento.",
    "Sistema orgânico de vendas entre carrinhos.",
    "Como fazer Lead scoring de verdade",
    "Os 5 pilares da soberania digital",
    "Capital Autoral: posicionamento único"
  ];

  return (
    <section id="oferta" className="bg-[#0A0A0A] py-20 md:py-32 px-6 border-t border-white/5 relative overflow-hidden font-sans">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#D15449] opacity-[0.05] blur-[150px] rounded-full pointer-events-none" />
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="mb-12 space-y-6">
          <div className="flex items-center gap-3">
            <span className="w-12 h-[2px] bg-[#D15449]" />
            <span className="text-[#D15449] font-bold uppercase tracking-[0.4em] text-[10px]">Ingresso</span>
          </div>
          <h2 className="text-white font-black text-5xl md:text-8xl tracking-tighter uppercase leading-[0.9]">
            Quanto <br />
            <span className="bg-gradient-to-r from-[#D15449] to-[#F2B263] bg-clip-text text-transparent">custa?</span>
          </h2>
          <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 text-sm md:text-base font-bold text-white/90">
            <span className="tracking-tight flex items-center gap-2"><Calendar className="w-4 h-4 text-[#D15449]" /> 17 de Janeiro</span>
            <span className="hidden md:inline text-white/20">|</span>
            <span className="tracking-tight flex items-center gap-2"><Monitor className="w-4 h-4 text-[#D15449]" /> Evento ao vivo e online</span>
          </div>
          <p className="text-gray-400 text-lg md:text-xl leading-relaxed max-w-2xl font-medium">
            Vou dividir tudo sobre as estratégias que viraram nosso jogo através de um ingresso muito barato. 
            O objetivo é vender uma imersão presencial, onde eu e meu time vamos planejar junto contigo, 
            cada passo de um lançamento pago de 7 dígitos.
          </p>
        </div>

        <div className="bg-[#141414] rounded-[32px] border border-white/10 p-8 md:p-14 shadow-2xl mb-12 relative overflow-hidden text-center">
          <div className="absolute inset-0 bg-gradient-to-b from-white/[0.02] to-transparent pointer-events-none" />
          <div className="relative z-10">
            <div className="flex items-center justify-center gap-3 mb-12 text-white/60">
              <Sparkle className="w-5 h-5 text-[#E88B4E]" />
              <span className="text-xs md:text-sm font-bold uppercase tracking-[0.2em]">Imersão Lançamento High Ticket</span>
              <span className="text-white/20">|</span>
              <span className="text-xs md:text-sm font-bold">2026</span>
            </div>
            <div className="flex items-start justify-center text-white mb-6">
              <span className="text-3xl md:text-4xl font-bold mt-4 md:mt-6 mr-1">R$</span>
              <span className="text-[120px] md:text-[160px] font-black tracking-tighter leading-none">47</span>
              <span className="text-3xl md:text-4xl font-bold mt-4 md:mt-6 ml-1">,00</span>
            </div>
            <div className="flex items-center justify-center gap-6 mb-12 opacity-80">
               <img src="https://upload.wikimedia.org/wikipedia/commons/d/d6/Visa_2021.svg" alt="Visa" className="h-3 md:h-4" />
               <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" alt="Mastercard" className="h-6 md:h-8" />
               <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/10 border border-white/20 text-[#32bcad]">
                  <FontAwesomeIcon icon={faPix} className="text-xl" />
                  <span className="text-[10px] font-black uppercase tracking-tighter">Pix</span>
               </div>
            </div>

            {/* Link do Checkout Atualizado Aqui */}
            <a
              href="https://chk.eduzz.com/797VE1RVWE"
              className="group relative inline-flex items-center justify-center w-full max-w-md bg-gradient-to-r from-[#D15449] via-[#E88B4E] to-[#F2B263] py-6 rounded-2xl text-white font-black text-xl uppercase tracking-widest transition-all duration-300 transform hover:scale-[1.03] active:scale-95 shadow-[0_20px_50px_rgba(209,84,73,0.3)]"
            >
              GARANTIR INGRESSO
              <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-2 transition-transform" />
              <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
          {benefits.map((item, i) => (
            <div key={i} className="flex items-start gap-4 py-1 group">
              <div className="shrink-0 w-6 h-6 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-[#D15449]/40 transition-colors">
                <Check className="w-3.5 h-3.5 text-[#D15449]" strokeWidth={3} />
              </div>
              <span className="text-gray-400 font-medium text-base md:text-lg tracking-tight group-hover:text-white transition-colors">
                {item}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
