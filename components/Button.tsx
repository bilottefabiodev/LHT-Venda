
import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ children }) => {
  return (
    <button className="group relative w-full py-5 px-8 rounded-2xl font-black text-lg md:text-xl text-white bg-brand-gradient shadow-[0_10px_40px_-10px_rgba(209,84,73,0.5)] transition-all duration-300 transform hover:scale-[1.01] active:scale-[0.99] flex items-center justify-center uppercase tracking-tight overflow-hidden">
      <span className="relative z-10">
        {children}
      </span>
      {/* Gloss effect */}
      <div className="absolute inset-0 w-full h-full bg-gradient-to-tr from-white/0 via-white/10 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
    </button>
  );
};

export default Button;
