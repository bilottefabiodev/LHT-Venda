import React from 'react';
import { CalendarDays, Clock, Video } from 'lucide-react';
import Badge from './Badge';
import Button from './Button';
import ScarcityBar from './ScarcityBar';
import expertImage from '../assets/images/image1.png';

const Logo = () => (
  <div className="flex items-center gap-3 mb-12 md:mb-16">
    <svg width="40" height="40" viewBox="0 0 40 40" className="shrink-0">
      <defs>
        <pattern id="dots-pattern" x="0" y="0" width="4" height="4" patternUnits="userSpaceOnUse">
          <circle cx="1.5" cy="1.5" r="1.1" fill="#E88B4E" />
        </pattern>
      </defs>
      <circle cx="20" cy="20" r="19" fill="transparent" stroke="url(#dots-pattern)" strokeWidth="0" />
      <rect width="40" height="40" fill="url(#dots-pattern)" mask="url(#circle-mask)" />
      <mask id="circle-mask">
        <circle cx="20" cy="20" r="20" fill="white" />
      </mask>
    </svg>
    <div className="flex flex-col">
      <span className="text-[9px] font-medium text-gray-400 uppercase tracking-tighter leading-none mb-1">Workshop</span>
      <h2 className="text-sm md:text-base font-black leading-tight tracking-tight text-white uppercase">
        Lançamento<br />High Ticket 2026
      </h2>
    </div>
  </div>
);

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen w-full overflow-hidden flex flex-col bg-[#0A0A0A] text-white font-sans selection:bg-brand-start selection:text-white">
      
      {/* Camadas de Fundo e Imagem da Expert */}
      <div className="absolute inset-0 z-0">
        {/* Camada 1: Gradiente de fundo principal (Esquerda para Direita) */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A] via-[#0A0A0A]/80 to-transparent z-[1]" />
        
        {/* Camada 2: FOTO DA EXPERT com Máscara de Corte */}
        <div className="absolute right-0 top-0 h-full w-full flex justify-end items-start pointer-events-none z-[2]">
          <div className="relative h-full w-full flex justify-end">
            <img 
              src={expertImage} 
              alt="Expert" 
              className="h-[75%] md:h-[95%] w-auto object-contain object-right-top opacity-60 md:opacity-100 transition-all duration-1000 transform translate-x-[10%] md:translate-x-0"
              style={{
                /* Esta máscara cria o efeito da linha verde: 
                   Preto total até 25% da altura, depois revela a expert */
                maskImage: 'linear-gradient(to bottom, transparent 25%, black 45%)',
                WebkitMaskImage: 'linear-gradient(to bottom, transparent 25%, black 45%)'
              }}
            />
            {/* Sombras adicionais para garantir que o texto seja legível */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent" />
          </div>
        </div>

        {/* Camada 3: Brilho atmosférico */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(209,84,73,0.06)_0%,transparent_50%)] z-[3]" />
      </div>

      <div className="container relative z-10 mx-auto px-6 md:px-12 py-12 md:py-16 flex flex-col min-h-screen justify-center">
        
        <Logo />

        <div className="flex flex-col lg:flex-row items-start gap-10 lg:gap-16">
          
          {/* Badges Verticais */}
          <div className="flex flex-col items-start gap-3 w-fit relative z-20">
             <Badge icon={<CalendarDays className="w-4 h-4" />} text="17 de janeiro" />
             <Badge icon={<Clock className="w-4 h-4" />} text="Das 10h às 17h" />
             <Badge icon={<Video className="w-4 h-4" />} text="AO VIVO no Zoom" />
          </div>

          {/* Conteúdo Principal */}
          <div className="flex-1 flex flex-col items-start text-left max-w-4xl relative z-20">
            <h1 className="mb-8 font-black text-4xl md:text-6xl lg:text-7xl leading-[1.1] tracking-tight">
              Um dia inteiro desenhando a <br />
              <span className="gradient-text">estratégia do seu próximo lançamento.</span>
            </h1>

            <p className="mb-12 text-lg md:text-xl text-gray-300 max-w-3xl leading-relaxed">
              Método híbrido, testado em diferentes nichos, mais de 100 mentorados que ultrapassam <strong className="text-white font-bold">36 milhões faturados</strong>. 
              Modelo atualizado para <strong className="text-white font-bold">mercado caro, saturado e desconfiado</strong>.
            </p>

            <div className="w-full max-w-md">
              <div className="mb-4">
                <Button>
                  GARANTIR INGRESSO | LOTE 01
                </Button>
              </div>
              
              <ScarcityBar label="100% do LOTE 1 vendido" percentage={100} subtext="Preço atual: R$47" />
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-brand-start/5 to-transparent pointer-events-none z-[5]" />
    </section>
  );
};

export default Hero;
