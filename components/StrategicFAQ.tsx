
import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const FAQItem = ({ question, answer }: { question: string, answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-white/5">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-8 flex items-center justify-between text-left group"
      >
        <span className="text-white font-black text-xl md:text-2xl uppercase tracking-tighter group-hover:text-brand-end transition-colors pr-8">
          {question}
        </span>
        <div className={`shrink-0 w-8 h-8 rounded-full border border-white/10 flex items-center justify-center transition-all ${isOpen ? 'bg-[#D15449] border-[#D15449]' : ''}`}>
          {isOpen ? <Minus className="w-4 h-4 text-white" /> : <Plus className="w-4 h-4 text-white/40" />}
        </div>
      </button>
      <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-[500px] opacity-100 pb-10' : 'max-h-0 opacity-0'}`}>
        <p className="text-gray-400 text-lg leading-relaxed max-w-3xl">
          {answer}
        </p>
      </div>
    </div>
  );
};

const StrategicFAQ: React.FC = () => {
  const faqs = [
    {
      q: "Para quem é essa Imersão?",
      a: "Para quem já vende ou deseja vender high ticket (acima de R$ 2k), já fez lançamentos e sente que o modelo atual está cobrando demais. Se você quer mais lucro sem circo, quer parar de depender da própria exaustão e não acredita mais em truques, essa Imersão é pra você."
    },
    {
      q: "Isso funciona para o meu nicho?",
      a: "Sim. O método já foi testado em diversos nichos diferentes com mais de 100 mentorados que ultrapassam 36 milhões faturados. Funciona para audiências de 1.500 seguidores a 500k e para tickets de R$ 2k a R$ 50k."
    },
    {
      q: "Preciso ter uma equipe grande para aplicar?",
      a: "Não. Um dos diferenciais do modelo é justamente funcionar sem equipe dedicada, com uma rotina real de 4h por dia, usando automação inteligente com IA."
    },
    {
      q: "Qual a diferença entre o Lançamento Híbrido e os lançamentos tradicionais?",
      a: "O Lançamento Híbrido une o melhor dos 3 mundos: o volume de leads do lançamento gratuito, o ROI do lançamento pago e um sistema orgânico que continua vendendo entre um carrinho e outro. Você não fica dependente apenas do \"evento\" para faturar."
    },
    {
      q: "Vou sair da Imersão com o quê na mão?",
      a: "Você sai com o blueprint completo do seu lançamento high ticket 2026 pronto: posicionamento, ICP, big idea, promessa, lead scoring e página de captação do evento. É mão na massa, não só teoria."
    },
    {
      q: "O que é Lead Scoring e por que é importante?",
      a: "É um sistema que pontua o comportamento dos seus leads para identificar quem realmente quer comprar e quem só consome conteúdo. Assim você para de vender no achismo e foca nas pessoas certas, aumentando sua conversão sem gastar mais."
    },
    {
      q: "Preciso já ter experiência com lançamentos?",
      a: "Sim. Essa Imersão não é para iniciantes. É para quem já lançou ou vive de lançamento e quer evoluir o modelo para algo mais lucrativo e sustentável."
    },
    {
      q: "Como funciona o sistema que vende entre carrinhos?",
      a: "É o COSMOS: um sistema orgânico de produção e distribuição de conteúdo atemporal que continua vendendo mesmo meses depois de postado. Você para de viver na roda de rato do \"lança-lança\" sem respiro."
    },
    {
      q: "Vou precisar investir em ferramentas caras?",
      a: "O foco está na estratégia e arquitetura do modelo. As automações com IA que ensinamos são acessíveis e a maioria das ferramentas já podem estar no seu negócio."
    },
    {
      q: "Por que o valor é tão baixo (R$ 47)?",
      a: "Porque o objetivo da Imersão é apresentar o método e vender nossa mentoria, onde planejamos junto com você cada passo de um lançamento híbrido 7 dígitos. Estamos entregando conteúdo de R$ 10 mil por menos de R$ 50 para você conhecer a metodologia."
    }
  ];

  return (
    <section className="bg-[#0A0A0A] py-24 md:py-32 px-6 border-t border-white/5">
      <div className="max-w-4xl mx-auto">
        <div className="mb-20 space-y-6">
          <div className="flex items-center gap-3">
            <span className="w-12 h-[2px] bg-[#D15449]" />
            <span className="text-[#D15449] font-bold uppercase tracking-[0.4em] text-[10px]">Objeções Zero</span>
          </div>
          
          <h2 className="text-white font-black text-5xl md:text-7xl tracking-tighter uppercase leading-[0.9]">
            FAQ <br />
            <span className="bg-gradient-to-r from-[#D15449] to-[#F2B263] bg-clip-text text-transparent">ESTRATÉGICO</span>
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <FAQItem key={i} question={faq.q} answer={faq.a} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StrategicFAQ;
