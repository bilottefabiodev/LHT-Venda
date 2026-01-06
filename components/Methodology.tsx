import React from 'react';
import { Zap, Target, BarChart3, Infinity, Bot, Plus, Sparkles, User2, Users } from 'lucide-react';

const MethodologyAndResults = () => {
  const methodData = [
    {
      id: "01",
      title: "MAGIC SEND",
      benefit: "+Faturamento com -Investimento",
      description: "Disparo automatizado por IA no 1x1 e grupos. Micro resultados no pré-evento que colocam lucro no bolso antes do carrinho abrir.",
      icon: <Zap className="w-5 h-5" />
    },
    {
      id: "02",
      title: "LEAD DATA",
      benefit: "Leads Frios que Compram",
      description: "Sistema de lead score altamente eficiente. Identifique e priorize quem tem real intenção de compra, eliminando o desperdício com curiosos.",
      icon: <Target className="w-5 h-5" />
    },
    {
      id: "03",
      title: "LANÇAMENTO HÍBRIDO",
      benefit: "Tráfego que se Paga",
      description: "Une o volume de leads do lançamento gratuito com o ROI imediato do pago. Uma jornada onde o lead financia sua própria escala.",
      icon: <BarChart3 className="w-5 h-5" />
    },
    {
      id: "04",
      title: "SISTEMA COSMOS",
      benefit: "Fim da Roda de Rato",
      description: "Produção e distribuição de conteúdo atemporal. Seu ecossistema continua vendendo entre carrinhos, mesmo meses após as postagens.",
      icon: <Infinity className="w-5 h-5" />
    },
    {
      id: "05",
      title: "AUTOMAÇÃO SOBERANA",
      benefit: "100% Lucrativo, 0% Equipe",
      description: "Agentes de IA treinados na metodologia que faturou +36 milhões. Complexidade máxima executada com esforço mínimo e margem máxima.",
      icon: <Bot className="w-5 h-5" />
    }
  ];

  const nichesrow1 = ["Astrologia", "Consultoria Financeira", "Desbloqueio de crenças", "Psicologia Clínica", "Copywriter", "Direção Artística", "Branding", "Marketing Digital", "Kundalini", "Inglês", "Constelação Familiar"];
  const nichesrow2 = ["Eneagrama e Temperamentos", "Ho'oponopono", "Tarô", "Composição Musical", "Coach de Surfe", "Tzolkin", "Consultoria de Estilo", "Advocacia", "Pilates", "Feitiços e Magia", "Cura Quântica"];

  return (
    <section className="bg-[#0A0A0A] py-24 md:py-32 px-6 border-t border-white/5">
      <div className="max-w-6xl mx-auto">
        
        {/* --- SEÇÃO 1: POR QUE FUNCIONA --- */}
        <div className="mb-32">
          <div className="mb-20 space-y-6">
            <div className="flex items-center gap-3">
              <span className="w-12 h-[2px] bg-[#D15449]" />
              <span className="text-[#D15449] font-bold uppercase tracking-[0.4em] text-[10px]">Estratégia 2026</span>
            </div>
            <h2 className="text-white font-black text-5xl md:text-8xl tracking-tighter uppercase leading-[0.9]">
              POR QUE<br />
              <span className="bg-gradient-to-r from-[#D15449] to-[#F2B263] bg-clip-text text-transparent">FUNCIONA?</span>
            </h2>
          </div>

          <div className="border-t border-white/10">
            {methodData.map((item) => (
              <div key={item.id} className="group border-b border-white/10 py-12 md:py-16 transition-all duration-500 hover:bg-white/[0.02] px-4 cursor-default">
                <div className="grid md:grid-cols-12 items-start gap-8">
                  <div className="md:col-span-5 flex items-start gap-8">
                    <span className="font-mono text-sm text-white/20 mt-2">{item.id}</span>
                    <div className="flex flex-col">
                      <h3 className="text-3xl md:text-4xl font-black text-white tracking-tighter group-hover:text-[#F2B263] transition-colors uppercase">
                        {item.title}
                      </h3>
                      <span className="text-[#D15449] font-bold uppercase tracking-widest text-[11px] mt-2">
                        {item.benefit}
                      </span>
                    </div>
                  </div>
                  <div className="md:col-span-6">
                    <p className="text-gray-400 text-lg md:text-xl leading-relaxed max-w-xl group-hover:text-gray-200 transition-colors">
                      {item.description}
                    </p>
                  </div>
                  <div className="md:col-span-1 flex justify-end">
                    <div className="p-4 rounded-full border border-white/10 bg-white/5 text-white group-hover:bg-[#D15449] group-hover:border-[#D15449] transition-all duration-500 group-hover:shadow-[0_0_30px_rgba(209,84,73,0.3)]">
                      <Plus className="w-5 h-5 group-hover:rotate-90 transition-transform duration-500" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* --- SEÇÃO 2: PRA QUEM FUNCIONA (Transição Harmônica) --- */}
        <div className="pt-12">
          <div className="mb-16 space-y-6">
            <div className="flex items-center gap-3">
              <span className="w-12 h-[2px] bg-[#F2B263]" />
              <span className="text-[#F2B263] font-bold uppercase tracking-[0.4em] text-[10px]">Resultados Reais</span>
            </div>
            <h2 className="text-white font-black text-5xl md:text-8xl tracking-tighter uppercase leading-[0.9]">
              PRA QUEM<br />
              <span className="bg-gradient-to-r from-[#D15449] to-[#F2B263] bg-clip-text text-transparent">FUNCIONA?</span>
            </h2>
            <p className="text-gray-400 text-lg md:text-xl max-w-2xl leading-relaxed">
              Já geramos mais de <span className="text-white font-bold">R$ 36 milhões de reais</span> para mentorados que dominam nichos completamente diferentes usando esta mesma metodologia.
            </p>
          </div>

          {/* Área dos Carrosséis */}
          <div className="w-full space-y-4 relative -mx-6 md:-mx-12 overflow-hidden py-10">
            <div className="absolute left-0 top-0 z-10 h-full w-32 bg-gradient-to-r from-[#0A0A0A] to-transparent pointer-events-none" />
            <div className="absolute right-0 top-0 z-10 h-full w-32 bg-gradient-to-l from-[#0A0A0A] to-transparent pointer-events-none" />

            <style>{`
              @keyframes scroll { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
              @keyframes scroll-reverse { 0% { transform: translateX(-50%); } 100% { transform: translateX(0); } }
              .animate-scroll { animation: scroll 50s linear infinite; }
              .animate-scroll-reverse { animation: scroll-reverse 50s linear infinite; }
            `}</style>

            <div className="flex w-max animate-scroll hover:[animation-play-state:paused] py-2">
              {[...nichesrow1, ...nichesrow1].map((niche, i) => (
                <div key={i} className="mx-3 px-8 py-4 rounded-full bg-white/[0.03] border border-white/10 text-neutral-300 text-sm md:text-base font-medium whitespace-nowrap flex items-center gap-3 transition-colors hover:border-[#D15449]/50 hover:bg-white/[0.05]">
                  <Sparkles size={14} className="text-[#D15449] opacity-70" /> {niche}
                </div>
              ))}
            </div>

            <div className="flex w-max animate-scroll-reverse hover:[animation-play-state:paused] py-2">
              {[...nichesrow2, ...nichesrow2].map((niche, i) => (
                <div key={i} className="mx-3 px-8 py-4 rounded-full bg-white/[0.03] border border-white/10 text-neutral-300 text-sm md:text-base font-medium whitespace-nowrap flex items-center gap-3 transition-colors hover:border-[#F2B263]/50 hover:bg-white/[0.05]">
                  <div className="w-2 h-2 rounded-full bg-gradient-to-br from-[#D15449] to-[#F2B263] shadow-[0_0_10px_rgba(209,84,73,0.5)]" /> {niche}
                </div>
              ))}
            </div>
          </div>

          {/* Social Proof Footer - Alinhado à Esquerda */}
          <div className="mt-20 flex justify-start">
            <div className="px-8 py-6 rounded-3xl bg-white/[0.02] border border-white/5 flex flex-col md:flex-row items-center gap-8">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map(i => (
                  <div key={i} className="w-12 h-12 rounded-full border-2 border-[#0A0A0A] bg-neutral-900 flex items-center justify-center text-white/40">
                    <User2 size={20} strokeWidth={1.5} />
                  </div>
                ))}
                <div className="w-12 h-12 rounded-full border-2 border-[#0A0A0A] bg-gradient-to-br from-[#D15449] to-[#F2B263] flex flex-col items-center justify-center shadow-lg shadow-[#D15449]/20">
                  <Users size={12} className="text-white mb-0.5" />
                  <span className="text-[10px] font-black text-white leading-none">+100</span>
                </div>
              </div>
              <p className="text-gray-400 text-sm md:text-lg max-w-md leading-relaxed">
                Junte-se a mais de <span className="text-white font-bold">100 mentorados</span> que pararam de tentar adivinhar o mercado e passaram a ditar as próprias regras.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MethodologyAndResults;
