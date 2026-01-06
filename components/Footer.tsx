
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0A0A0A] py-16 px-6 border-t border-white/5 text-center">
      <div className="max-w-4xl mx-auto space-y-6">
        <p className="text-gray-500 font-bold uppercase tracking-widest text-[10px]">
          © 2026 Tatiana Marx | Todos os direitos reservados
        </p>
        <p className="text-gray-600 text-xs leading-relaxed max-w-2xl mx-auto italic">
          "Atenção: Nós não compartilharemos seu contato com terceiros. O tratamento de dados nesta empresa acontece em conformidade com a Lei Geral de Proteção de Dados (LGPD). Você está seguro(a) e poderá se descadastrar a qualquer momento."
        </p>
      </div>
    </footer>
  );
};

export default Footer;
