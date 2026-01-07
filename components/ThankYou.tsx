import React, { useEffect } from 'react';
import { CheckCircle, Mail, ArrowRight } from 'lucide-react';
import Button from './Button';

const ThankYou: React.FC = () => {
  useEffect(() => {
    // Dispara o evento de compra no Facebook Pixel
    if (window.fbq) {
      window.fbq('track', 'Purchase', {
        value: 47.00,
        currency: 'BRL'
      });
    }
  }, []);

  return (
    <section className="min-h-screen w-full bg-[#0A0A0A] flex flex-col items-center justify-center px-6 text-center font-sans">
      <div className="relative mb-8">
        <div className="absolute inset-0 bg-brand-start/20 blur-3xl rounded-full" />
        <CheckCircle className="w-20 h-20 text-[#D15449] relative z-10" strokeWidth={1.5} />
      </div>

      <h1 className="text-white font-black text-4xl md:text-6xl uppercase tracking-tighter leading-none mb-6">
        Compra Efetuada <br />
        <span className="gradient-text">Com Sucesso!</span>
      </h1>

      <div className="max-w-md space-y-6 mb-12">
        <p className="text-gray-400 text-lg md:text-xl leading-relaxed">
          Sua vaga na <span className="text-white font-bold">Imersão Lançamento High Ticket 2026</span> está garantida.
        </p>
        
        <div className="bg-white/5 border border-white/10 p-6 rounded-3xl flex items-start gap-4 text-left">
          <Mail className="w-6 h-6 text-[#F2B263] shrink-0" />
          <p className="text-gray-300 text-sm md:text-base">
            Enviamos um e-mail agora com o link da sua <span className="text-white font-bold">Área de Membros</span>. Verifique também sua caixa de spam.
          </p>
        </div>
      </div>

      <div className="w-full max-w-xs">
        <a href="https://mail.google.com" target="_blank" rel="noopener noreferrer">
          <Button>
            ACESSAR MEU E-MAIL
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </a>
      </div>

      <p className="mt-12 text-gray-600 text-[10px] uppercase tracking-widest font-bold">
        © 2026 Tatiana Marx | Suporte via e-mail
      </p>
    </section>
  );
};

export default ThankYou;
