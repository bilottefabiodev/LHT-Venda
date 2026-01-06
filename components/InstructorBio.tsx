
import React from 'react';
import { Award, TrendingUp, Users } from 'lucide-react';

const InstructorBio: React.FC = () => {
  const stats = [
    { val: "R$ 10M+", label: "Faturamento Digital", icon: <Award className="w-4 h-4" /> },
    { val: "R$ 6M", label: "Só High Ticket", icon: <TrendingUp className="w-4 h-4" /> },
    { val: "R$ 36M", label: "Gerados para Clientes", icon: <Users className="w-4 h-4" /> }
  ];

  return (
    <section className="bg-[#0A0A0A] py-24 md:py-32 px-6 border-t border-white/5 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        
        {/* Header da Seção - Alinhamento à Esquerda */}
        <div className="mb-20 space-y-6">
          <div className="flex items-center gap-3">
            <span className="w-12 h-[2px] bg-[#D15449]" />
            <span className="text-[#D15449] font-bold uppercase tracking-[0.4em] text-[10px]">A Mentora</span>
          </div>
          <h2 className="text-white font-black text-5xl md:text-8xl tracking-tighter uppercase leading-[0.9]">
            Quem vai <br />
            <span className="bg-gradient-to-r from-[#D15449] to-[#F2B263] bg-clip-text text-transparent">te guiar?</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-12 gap-16 items-start">
          
          {/* Lado Esquerdo: Imagem e Stats */}
          <div className="lg:col-span-5 space-y-12">
            <div className="relative inline-block group">
              {/* Moldura com Gradiente */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-[#D15449]/20 to-[#F2B263]/20 blur-2xl opacity-50 group-hover:opacity-100 transition-opacity" />
              
              <div className="relative w-full aspect-square md:w-[400px] md:h-[400px] rounded-3xl overflow-hidden border border-white/10 grayscale-[20%] hover:grayscale-0 transition-all duration-700">
                <img 
                  src="https://i.ibb.co/SD4gMVXY/IMG-8474.jpg" 
                  alt="Tatiana Marx" 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* Tag Flutuante */}
              <div className="absolute -bottom-6 -right-6 bg-[#1A1A1A] border border-white/10 p-6 rounded-2xl shadow-2xl backdrop-blur-md">
                <p className="text-white font-black text-2xl tracking-tighter">Tatiana Marx</p>
                <p className="text-[#D15449] text-[10px] font-bold uppercase tracking-widest mt-1">Estrategista de Negócios</p>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-3 gap-4">
              {stats.map((stat, i) => (
                <div key={i} className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-[#D15449]/30 transition-colors group">
                  <div className="text-[#D15449] mb-2 opacity-50 group-hover:opacity-100 transition-opacity">{stat.icon}</div>
                  <div className="text-xl font-black text-white tracking-tighter">{stat.val}</div>
                  <div className="text-[9px] text-gray-500 uppercase tracking-tighter leading-tight mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Lado Direito: História (Copy Fiel) */}
          <div className="lg:col-span-7">
            <div className="space-y-6 text-gray-400 text-lg md:text-xl leading-relaxed font-medium">
              <p className="text-white border-l-4 border-[#D15449] pl-6 py-2 italic">
                "Sou uma generalista multiplicadora de talentos, com domínio sobre diversos assuntos e uma visão estratégica, criativa e intuitiva..."
              </p>
              
              <p>Minha superpotência? Consigo decifrar um negócio, um produto, uma comunicação e, em segundos, identificar exatamente o que precisa ser feito para aquilo funcionar.</p>
              
              <p>Minha especialidade é unir posicionamento profundo, método próprio, IA e filosofia de vida. Acredito em um marketing anti-hype, atemporal, baseado em Capital Autoral e sistemas — não em circo.</p>
              
              <div className="py-8 border-y border-white/5 space-y-6">
                <p>Já trabalhei com grandes nomes do entretenimento e liderei estratégias para projetos nos mais variados nichos. Mas há 3 anos, minha trajetória tomou um rumo inesperado: um esgotamento severo seguido de diversos problemas de saúde me deixaram de cama, incapaz de fazer lançamentos.</p>
                
                <p>Tive que fazer uma escolha difícil — cuidar da minha saúde física e mental ou abrir mão de tudo que havia construído no digital. Escolhi minha saúde. Sumi do Instagram, parei de vender meus cursos e mergulhei nos estudos. Foi quando descobri um novo caminho.</p>
              </div>

              <p>Hoje sou mãe de duas filhas e, graças à metodologia de Lançamento High Ticket que criei junto com meu sócio e irmão e ao COSMOS (Sistema Orgânico Contínuo), me recuperei completamente e consigo priorizar minha família, estar presente e faturar múltiplos 6 dígitos mensais com leveza e autenticidade.</p>

              <p className="text-white font-bold">
                Até o final de 2025, já gerei mais de R$ 10 milhões no digital com meus produtos e serviços e ajudei meus mentorados a gerarem R$ 36 milhões nos últimos 3 anos.
              </p>

              <div className="pt-8">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full text-xs font-bold text-gray-300">
                  <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  Operando hoje com apenas 4h por dia
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default InstructorBio;
