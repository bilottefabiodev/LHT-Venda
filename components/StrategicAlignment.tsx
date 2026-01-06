
import React from 'react';
import { Check, AlertCircle, ClipboardCheck, ArrowRight } from 'lucide-react';

const StrategicAlignment: React.FC = () => {
  const benefits = [
    "Menos Base, Mais Faturamento",
    "Geração de demanda super qualificada",
    "Complexidade Baixa",
    "Sem equipe dedicada",
    "Mais Conhecimento, Menos Copy",
    "Faturamento Descentralizado",
    "Alta lucratividade",
    "Menor risco"
  ];

  return (
    <section className="bg-[#E8E5E0] py-24 md:py-32 px-6 font-sans border-t border-black/5">
      <div className="max-w-6xl mx-auto text-[#0A0A0A]">
        
        {/* Bloco 01 - Benefícios */}
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <span className="w-12 h-[2px] bg-[#D15449]" />
            <span className="text-[#D15449] font-bold uppercase tracking-[0.4em] text-[10px]">Vantagem Competitiva</span>
          </div>
          <h2 className="font-black text-4xl md:text-6xl tracking-tighter uppercase mb-12">
            Os benefícios são muitos:
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start gap-3 py-4 border-b border-black/10">
                <div className="mt-1">
                  <Check className="w-4 h-4 text-[#D15449]" strokeWidth={3} />
                </div>
                <span className="font-medium text-lg leading-tight tracking-tight">
                  {benefit}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Linha Divisória Sutil */}
        <div className="h-px w-full bg-black/10 mb-20" />

        {/* Bloco 02 e 03 - Alerta e Requisitos */}
        <div className="grid md:grid-cols-2 gap-16 md:gap-24 mb-24">
          
          {/* Bloco 02 - Alerta */}
          <div className="space-y-8">
            <div className="flex items-center gap-3">
              <AlertCircle className="w-6 h-6 text-[#D15449]" />
              <h3 className="font-black text-2xl uppercase tracking-tight">Mas a conta não vai fechar se…</h3>
            </div>
            
            <div className="bg-black/[0.03] rounded-3xl p-8 border border-black/5 space-y-6">
              <div className="flex items-start gap-4">
                <span className="text-[#D15449] font-black text-xl">01</span>
                <p className="text-lg font-medium leading-snug">"Sua narrativa não superar um nicho saturado"</p>
              </div>
              <div className="h-px bg-black/5" />
              <div className="flex items-start gap-4">
                <span className="text-[#D15449] font-black text-xl">02</span>
                <p className="text-lg font-medium leading-snug">"Não parar de lançar no escuro e tiver um sistema de captação de leads qualificados"</p>
              </div>
            </div>
          </div>

          {/* Bloco 03 - Requisitos */}
          <div className="space-y-8">
            <div className="flex items-center gap-3">
              <ClipboardCheck className="w-6 h-6 text-[#0A0A0A]" />
              <h3 className="font-black text-2xl uppercase tracking-tight">É fundamental que você:</h3>
            </div>
            
            <ul className="space-y-6">
              <li className="flex items-center gap-4 text-xl font-bold">
                <div className="w-2 h-2 rounded-full bg-[#D15449]" />
                Saiba criar uma boa oferta.
              </li>
              <li className="flex items-center gap-4 text-xl font-bold">
                <div className="w-2 h-2 rounded-full bg-[#D15449]" />
                Construa uma boa narrativa para seu evento.
              </li>
            </ul>
            
            <p className="text-black/60 font-medium leading-relaxed italic">
              Não estamos aqui para vender facilidade. Estamos aqui para vender inteligência estratégica e lucro real.
            </p>
          </div>
        </div>

        {/* Bloco 04 - Ancoragem de Valor */}
        <div className="pt-16 border-t border-black/20 text-center">
          <div className="inline-block relative">
            <h4 className="text-2xl md:text-4xl font-black tracking-tighter leading-tight max-w-4xl uppercase">
              Eu vou te entregar o conteúdo de uma mentoria de <span className="text-[#D15449]">R$ 10.000,00</span> por menos de <span className="text-[#D15449]">R$ 50,00</span>.
            </h4>
            <div className="mt-8 flex justify-center items-center gap-2 text-black/40 font-bold uppercase tracking-widest text-[10px]">
              <ArrowRight className="w-3 h-3" />
              Oportunidade de Mercado 2026
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default StrategicAlignment;
