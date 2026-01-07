import React from 'react';
import { CalendarDays, Clock, Video } from 'lucide-react';
import Badge from './Badge';
import Button from './Button';
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
      <span className="text-[9px] font-medium text-gray-400 uppercase tracking-tighter leading-none mb-1">Imersão</span>
      <h2 className="text-sm md:text-base font-black leading-tight tracking-tight text-white uppercase">
        Lançamento<br />High Ticket 2026
      </h2>
    </div>
  </div>
);

const Hero: React.FC = () => {
  // Função para capturar dados e enviar ao n8n antes de ir para a Eduzz
  const handleCheckout = async (e: React.MouseEvent) => {
    e.preventDefault(); // Impede o redirecionamento imediato

    // 1. Captura de UTMs e Cookies técnicos
    const urlParams = new URLSearchParams(window.location.search);
    
    const getCookie = (name: string) => {
      const value = `; ${document.cookie}`;
      const parts = value.split(`; ${name}=`);
      if (parts.length === 2) return parts.pop()?.split(';').shift();
      return '';
    };

    const payload = {
      // Identificadores de UTM
      utm_source: urlParams.get('utm_source') || 'Instagram',
      utm_medium: urlParams.get('utm_medium') || 'direto',
      utm_campaign: urlParams.get('utm_campaign') || 'nenhuma',
      utm_content: urlParams.get('utm_content') || 'nenhum',
      
      // Dados Técnicos para Meta CAPI
      origin: 'Landing Page High Ticket',
      date: new Date().toISOString(),
      client_user_agent: navigator.userAgent,
      fbp: getCookie('_fbp'),
      fbc: getCookie('_fbc') || urlParams.get('fbclid'),
      event_source_url: window.location.href,
      event_name: 'InitiateCheckout'
    };

    // 2. Envio para o n8n
    try {
      // Usamos 'keepalive' para garantir que a requisição termine mesmo se a página mudar
      await fetch('https://foda-n8n-webhook.nxjcjs.easypanel.host/webhook/checkout-ilht', {
        method: 'POST',
        body: JSON.stringify(payload),
        headers: { 'Content-Type': 'application/json' },
        keepalive: true 
      });
    } catch (error) {
      console.error('Erro ao registrar checkout:', error);
    } finally {
      // 3. Redirecionamento para a Eduzz
      window.location.href = 'https://chk.eduzz.com/797VE1RVWE';
    }
  };

  return (
    <section className="relative min-h-screen w-full overflow-hidden flex flex-col bg-[#0A0A0A] text-white font-sans selection:bg-brand-start selection:text-white">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A] via-[#0A0A0A]/80 to-transparent z-[1]" />
        <div className="absolute right-0 top-0 h-full w-full flex justify-end items-start pointer-events-none z-[2]">
          <div className="relative h-full w-full flex justify-end">
            <img 
              src={expertImage} 
              alt="Expert" 
              className="h-[85%] md:h-full w-auto object-contain object-right-top opacity-80 md:opacity-100 transition-all duration-1000 transform translate-x-[15%] md:translate-x-0"
              style={{
                maskImage: 'linear-gradient(to bottom, black 0%, black 35%, transparent 55%)',
                WebkitMaskImage: 'linear-gradient(to bottom, black 0%, black 35%, transparent 55%)'
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#0A0A0A]/20 to-[#0A0A0A] md:hidden" />
          </div>
        </div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(209,84,73,0.06)_0%,transparent_50%)] z-[3]" />
      </div>

      <div className="container relative z-10 mx-auto px-6 md:px-12 py-12 md:py-16 flex flex-col min-h-screen justify-center">
        <Logo />
        <div className="flex flex-col lg:flex-row items-start gap-10 lg:gap-16">
          <div className="flex flex-col items-start gap-3 w-fit relative z-20">
             <Badge icon={<CalendarDays className="w-4 h-4" />} text="17 de janeiro" />
             <Badge icon={<Clock className="w-4 h-4" />} text="Das 10h às 17h" />
             <Badge icon={<Video className="w-4 h-4" />} text="AO VIVO no Zoom" />
          </div>
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
                <button onClick={handleCheckout} className="w-full">
                  <Button>
                    GARANTIR INGRESSO | LOTE 01
                  </Button>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-brand-start/5 to-transparent pointer-events-none z-[5]" />
    </section>
  );
};

export default Hero;
