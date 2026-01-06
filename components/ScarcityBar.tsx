
import React from 'react';

interface ScarcityBarProps {
  label: string;
  percentage: number;
  subtext?: string;
}

const ScarcityBar: React.FC<ScarcityBarProps> = ({ label, percentage, subtext }) => {
  return (
    <div className="w-full flex flex-col items-center">
      <div className="w-full h-[3px] bg-white/10 rounded-full overflow-hidden mb-3">
        <div 
          className="h-full bg-brand-gradient transition-all duration-1000 ease-out shadow-[0_0_8px_rgba(209,84,73,0.5)]"
          style={{ width: `${percentage}%` }}
        />
      </div>
      <div className="text-[11px] font-bold text-gray-400 uppercase tracking-widest text-center">
        {label} <span className="text-white/60 lowercase font-normal italic ml-1">à R$47</span>
      </div>
    </div>
  );
};

export default ScarcityBar;
