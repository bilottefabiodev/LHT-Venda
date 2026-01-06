import React from 'react';
import { Check, X, ArrowRight, Clock, Plus, Target, Sparkles, Zap } from 'lucide-react';

const ImmersionDetails = () => {
  return (
    <div className="bg-[#0A0A0A] font-sans">
      
      {/* --- SEÇÃO 1: PRA QUEM É (Quebra de Fundo para Creme) --- */}
      <section className="bg-[#E8E5E0] py-24 md:py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="mb-20 space-y-4">
            <div className="flex items-center gap-3">
              <span className="w-8 h-[2px] bg-[#D15449]" />
              <span className="text-[#D15449] font-bold uppercase tracking-[0.3em] text-[10px]">Alinhamento de Perfil</span>
            </div>
            <h2 className="text-[#0A0A0A] font-black text-5xl md:text-8xl tracking-tighter uppercase leading-[0.9]">
              PRA QUEM É <br />
              <span className="bg-gradient-to-r from-[#D15449] to-[#F2B263] bg-clip-text text-transparent">(E PRA QUEM NÃO É)</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* É pra você se: */}
            <div className="bg-white p-10 md:p-14 rounded-[40px] shadow-sm border border-black/5">
              <h3 className="text-black font-black text-2xl uppercase tracking-tight mb-10 flex items-center gap-3">
                <div className="bg-green-100 p-2 rounded-full"><Check className="text-green-600 w-5 h-5" /></div>
                É pra você se:
              </h3>
              <ul className="space-y-6">
                {[
                  "já vende high ticket ou deseja vender",
                  "já lançou ou vive de lançamento",
                  "sente que o modelo atual cobra demais",
                  "não acredita mais em truque",
                  "quer mais lucro sem circo",
                  "quer parar de depender da própria exaustão"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-4 text-gray-700 font-medium text-lg">
                    <ArrowRight className="w-4 h-4 text-[#D15449] shrink-0" /> {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* NÃO é pra você se: */}
            <div className="bg-black/5 p-10 md:p-14 rounded-[40px] border border-black/5">
              <h3 className="text-black/40 font-black text-2xl uppercase tracking-tight mb-10 flex items-center gap-3">
                <div className="bg-black/10 p-2 rounded-full"><X className="text-black/40 w-5 h-5" /></div>
                NÃO é pra você se:
              </h3>
              <ul className="space-y-6">
                {[
                  "quer fórmula rápida",
                  "quer vender barato",
                  "quer só “mais leads”",
                  "acha que o problema é só tráfego",
                  "prefere continuar fingindo que está tudo bem"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-4 text-black/30 font-medium text-lg line-through">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* --- SEÇÃO 2: CONTEÚDO DA IMERSÃO (Dark Premium) --- */}
      <section className="bg-[#0A0A0A] py-24 md:py-32 px-6 border-t border-white/5">
        <div className="max-w-6xl mx-auto">
          <div className="mb-20 space-y-4">
            <div className="flex items-center gap-3">
              <span className="w-8 h-[2px] bg-[#F2B263]" />
              <span className="text-[#F2B263] font-bold uppercase tracking-[0.3em] text-[10px]">Workplan</span>
            </div>
            <h2 className="text-white font-black text-5xl md:text-8xl tracking-tighter uppercase leading-[0.9]">
              CONTEÚDO DA <br />
              <span className="bg-gradient-to-r from-[#D15449] to-[#F2B263] bg-clip-text text-transparent">IMERSÃO</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-px bg-white/10 border border-white/10 rounded-3xl overflow-hidden">
            {[
              "Estratégia de lançamento híbrido passo a passo.",
              "Estratégia de tráfego.",
              "Big idea, promessas e páginas prontas (parte mão na massa)",
              "Otimização de criativos.",
              "Dados, análises, insights e otimizações.",
              "Aumentando o Comparecimento.",
              "Narrativa do evento de lançamento.",
              "Conteúdos pré evento e aquecimento.",
              "Sistema orgânico de vendas entre carrinhos.",
              "Como fazer Lead scoring de verdade (adeus pesquisas inúteis)",
              "Os 5 pilares da soberania digital",
              "Capital Autoral: posicionamento à prova de nicho saturado"
            ].map((topic, i) => (
              <div key={i} className="bg-[#0A0A0A] p-8 hover:bg-white/[0.03] transition-colors flex items-start gap-5 group">
                <Plus className="w-5 h-5 text-[#D15449] shrink-0 mt-1 group-hover:rotate-90 transition-transform" />
                <p className="text-gray-300 text-lg font-medium leading-tight group-hover:text-white">{topic}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- SEÇÃO 3: CRONOGRAMA (Minimalist Timeline) --- */}
      <section className="bg-[#0A0A0A] py-24 md:py-32 px-6 border-t border-white/5">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col items-center text-center mb-20">
            <h2 className="text-white font-black text-5xl md:text-7xl tracking-tighter uppercase mb-4">CRONOGRAMA</h2>
            <div className="h-1 w-24 bg-gradient-to-r from-[#D15449] to-[#F2B263] rounded-full" />
          </div>

          <div className="relative border-l border-white/10 ml-4 md:ml-0 md:left-1/2">
            {[
              { time: "10h", title: "Início", desc: "Abertura oficial e fundamentos da Soberania Digital." },
              { time: "13H00", title: "Almoço", desc: "Intervalo estratégico." },
              { time: "14H00", title: "Retorno", desc: "Mão na massa: Big Idea e Estrutura Híbrida." },
              { time: "17H00", title: "Encerramento*", desc: "Conclusão e abertura para aprofundamento opcional." }
            ].map((item, i) => (
              <div key={i} className="mb-12 relative group">
                {/* Dot */}
                <div className="absolute -left-[9px] top-2 w-4 h-4 rounded-full bg-[#0A0A0A] border-2 border-[#D15449] group-hover:scale-125 transition-transform z-10" />
                
                <div className="pl-10 md:pl-16">
                  <span className="font-mono text-[#D15449] font-bold text-xl mb-1 block tracking-widest">{item.time}</span>
                  <h3 className="text-white font-black text-3xl uppercase tracking-tighter mb-2">{item.title}</h3>
                  <p className="text-gray-500 text-base max-w-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-20 p-8 rounded-3xl bg-white/[0.02] border border-white/5 text-center">
            <p className="text-xs text-gray-500 italic leading-relaxed max-w-2xl mx-auto">
              *Considere encerrar mais tarde, caso os participantes peçam para nos aprofundarmos em algum ponto. 
              Porém, o conteúdo combinado será entregue dentro do horário programado.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ImmersionDetails;