
import React from 'react';
import { AlertCircle, Lock } from 'lucide-react';

const RealProblem: React.FC = () => {
  return (
    <section className="bg-[#E8E5E0] py-24 md:py-32 px-6">
      <div className="max-w-6xl mx-auto text-[#0A0A0A]">
        <div className="mb-20 space-y-6">
          <div className="flex items-center gap-3">
            <span className="w-12 h-[2px] bg-black" />
            <span className="text-black font-bold uppercase tracking-[0.4em] text-[10px]">A Realidade Técnica</span>
          </div>
          
          <h2 className="font-black text-4xl md:text-7xl tracking-tighter uppercase leading-[0.9] max-w-4xl">
            SEU PROBLEMA NÃO É LANÇAMENTO. <br />
            <span className="text-[#D15449]">É USAR LANÇAMENTO COMO ÚNICO MODELO DE NEGÓCIO.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <p className="text-xl md:text-2xl font-medium leading-tight tracking-tight">
              Lançamento virou muleta. Sessão estratégica virou teto. Instagram virou prisão.
            </p>
            
            <div className="space-y-4">
              <p className="font-bold uppercase tracking-widest text-xs opacity-40">Se o seu faturamento depende:</p>
              <ul className="space-y-3 font-bold text-xl md:text-2xl">
                <li className="flex items-center gap-3">• da sua cara</li>
                <li className="flex items-center gap-3">• do seu humor</li>
                <li className="flex items-center gap-3">• da sua agenda</li>
                <li className="flex items-center gap-3">• do seu sistema nervoso</li>
              </ul>
            </div>
          </div>

          <div className="relative">
             <div className="absolute -inset-4 bg-black/5 blur-3xl rounded-full" />
             <div className="relative bg-white border-2 border-black p-10 md:p-14 rounded-[40px] flex flex-col items-center text-center space-y-6 transform md:rotate-2">
                <Lock className="w-12 h-12 text-[#D15449]" />
                <h3 className="font-black text-3xl md:text-4xl uppercase tracking-tighter leading-none">
                  isso não é liberdade. <br />
                  <span className="text-[#D15449]">isso é cárcere premium.</span>
                </h3>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RealProblem;
