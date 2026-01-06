
import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const InPractice: React.FC = () => {
  const tasks = [
    "Diagnóstico brutal do seu modelo atual",
    "Desenho do lançamento high ticket certo pra você",
    "Instalação do Lead Scoring",
    "Construção do sistema entre lançamentos",
    "Ajustes pra mercado caro e desconfiado",
    "IA como infraestrutura (não como quebra galho)"
  ];

  return (
    <section className="bg-[#E8E5E0] py-24 md:py-32 px-6">
      <div className="max-w-6xl mx-auto text-[#0A0A0A]">
        <div className="mb-20 space-y-6">
          <div className="flex items-center gap-3">
            <span className="w-12 h-[2px] bg-black" />
            <span className="text-black font-bold uppercase tracking-[0.4em] text-[10px]">Mão na Massa</span>
          </div>
          
          <h2 className="font-black text-4xl md:text-7xl tracking-tighter uppercase leading-[0.9]">
            O QUE A GENTE VAI <br />
            <span className="text-[#D15449]">FAZER NA PRÁTICA.</span>
          </h2>
          <p className="text-black/60 font-bold uppercase tracking-widest text-xs mt-4">Sem palestra motivacional. Sem show.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-x-12 gap-y-6">
          {tasks.map((task, i) => (
            <div key={i} className="flex items-center gap-6 p-8 bg-black/[0.03] border border-black/5 rounded-3xl group hover:bg-white hover:border-black/20 transition-all">
              <CheckCircle2 className="w-8 h-8 text-[#D15449] shrink-0" strokeWidth={2.5} />
              <span className="font-black text-xl md:text-2xl tracking-tighter uppercase leading-none">
                {task}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InPractice;
