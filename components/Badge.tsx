
import React from 'react';

interface BadgeProps {
  icon: React.ReactNode;
  text: string;
}

const Badge: React.FC<BadgeProps> = ({ icon, text }) => {
  return (
    <div className="flex items-center gap-3 px-4 py-2 bg-black/40 backdrop-blur-sm border border-white/10 rounded-xl hover:border-white/20 transition-all duration-300 cursor-default group w-full sm:w-fit">
      <div className="text-[#F2B263] shrink-0">
        {icon}
      </div>
      <span className="text-xs md:text-sm font-semibold text-white tracking-tight">
        {text}
      </span>
    </div>
  );
};

export default Badge;
