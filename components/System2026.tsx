
import React from 'react';
import { Database, LineChart, Cpu, RefreshCw, Zap } from 'lucide-react';

const System2026: React.FC = () => {
  const systems = [
    {
      title: "LEAD SCORING + LEAD DATA",
      subtitle: "PARE DE VENDER NO ACHISMO",
      desc: "Comportamento vira pontuação. Pontuação vira prioridade. Prioridade vira venda. Seu lead data não é uma lista, é um estoque vivo de intenção organizada.",
      icon: <Database className="w-6 h-6" />
    },
    {
      title: "O SISTEMA QUE VENDE ENTRE CARRINHOS",
      subtitle: "ESTOQUE VIVO DE DEMANDA",
      desc: "Se entre lançamentos você não vende, você tem um evento, não um negócio. Instalamos um ecossistema multicanal que aquece e converte continuamente.",
      icon: <RefreshCw className="w-6 h-6" />
    },
    {
      title: "O SISTEMA QUE APRENDE (FLYWHEEL)",
      subtitle: "CADA CICLO REDUZ O ESFORÇO",
      desc: "O lançamento tradicional é burro e repetitivo. O sistema 2026 constrói um flywheel onde cada dado vira decisão e cada ciclo aumenta seu ROI.",
      icon: <Cpu className="w-6 h-6" />
    }
  ];

  return (
    <section className="bg-[#0A0A0A] py-24 md:py-32 px-6 border-t border-white/5">
      <div className="max-w-6xl mx-auto">
        <div className="mb-20 space-y-6">
          <div className="flex items-center gap-3">
            <span className="w-12 h-[2px] bg-[#D15449]" />
            <span className="text-[#D15449] font-bold uppercase tracking-[0.4em] text-[10px]">Arquitetura 2026</span>
          </div>
          
          <h2 className="text-white font-black text-4xl md:text-7xl tracking-tighter uppercase leading-[0.9] max-w-5xl">
            ESSA IMERSÃO NÃO É CONTEÚDO. <br />
            <span className="bg-gradient-to-r from-[#D15449] to-[#F2B263] bg-clip-text text-transparent">É INSTALAÇÃO DE SISTEMA.</span>
          </h2>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl font-medium">
            Aqui você não vai “aprender conceitos”. Você vai desenhar o seu modelo e sair com o blueprint pronto.
          </p>
        </div>

        <div className="space-y-px bg-white/5 border border-white/10 rounded-3xl overflow-hidden">
          {systems.map((system, i) => (
            <div key={i} className="bg-[#0A0A0A] p-10 md:p-16 hover:bg-white/[0.02] transition-all group">
              <div className="grid md:grid-cols-12 gap-8 items-start">
                <div className="md:col-span-1">
                  <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-[#D15449] group-hover:bg-[#D15449] group-hover:text-white transition-all">
                    {system.icon}
                  </div>
                </div>
                <div className="md:col-span-5">
                  <h3 className="text-white font-black text-2xl md:text-3xl uppercase tracking-tighter mb-2 group-hover:text-brand-end">
                    {system.title}
                  </h3>
                  <span className="text-[#D15449] font-bold uppercase tracking-widest text-[10px] block">
                    {system.subtitle}
                  </span>
                </div>
                <div className="md:col-span-6">
                  <p className="text-gray-400 text-lg leading-relaxed group-hover:text-gray-200">
                    {system.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default System2026;
