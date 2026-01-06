
import React from 'react';

const Diagnosis: React.FC = () => {
  return (
    <section className="bg-[#0A0A0A] py-24 md:py-32 px-6 border-t border-white/5 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="mb-20 space-y-8">
          <div className="flex items-center gap-3">
            <span className="w-12 h-[2px] bg-[#D15449]" />
            <span className="text-[#D15449] font-bold uppercase tracking-[0.4em] text-[10px]">Diagnóstico Brutal</span>
          </div>
          
          <h2 className="text-white font-black text-4xl md:text-7xl tracking-tighter uppercase leading-[0.9] max-w-4xl">
            Você não está fracassando em lançamentos. <br />
            <span className="bg-gradient-to-r from-[#D15449] to-[#F2B263] bg-clip-text text-transparent">Você está obedecendo um modelo velho.</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div className="space-y-12">
            <div className="pl-8 border-l-2 border-[#D15449] space-y-6">
              <p className="text-gray-400 text-lg md:text-xl leading-relaxed">
                Feito pra outro mercado, pra outro ticket, pra outra realidade.
              </p>
              <p className="text-white text-xl md:text-2xl font-bold tracking-tight">
                O mercado não morreu. Ele ficou caro, desconfiado e imune a promessas vazias.
              </p>
            </div>

            <div className="space-y-4">
              <p className="text-[#D15449] font-bold uppercase tracking-widest text-xs">E mesmo assim, você continua:</p>
              <ul className="space-y-2 text-white/60 font-medium text-lg">
                <li>• lançando como em 2021</li>
                <li>• apostando no “feeling”</li>
                <li>• subindo tráfego e rezando</li>
                <li>• vivendo de pico e ressaca</li>
                <li>• chamando exaustão de “crescimento”</li>
              </ul>
            </div>
          </div>

          <div className="bg-[#141414] p-10 rounded-[32px] border border-white/5 space-y-8">
            <h3 className="text-white font-black text-3xl uppercase tracking-tighter leading-none">
              Isso não é estratégia. <br />
              <span className="text-[#D15449]">É vício em adrenalina.</span>
            </h3>

            <div className="space-y-6">
              <h4 className="text-brand-end font-bold uppercase tracking-[0.2em] text-xs">O NOME DISSO É LANÇAMENTO NO ESCURO.</h4>
              <p className="text-gray-400 font-medium leading-relaxed">
                Você não sabe quem realmente quer comprar, quem só consome conteúdo, quem está pronto ou onde o dinheiro vazou.
              </p>
              <p className="text-white font-bold text-lg leading-tight">
                E depois se pergunta por que o CAC sobe, a margem some e o negócio depende cada vez mais de você.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Diagnosis;
