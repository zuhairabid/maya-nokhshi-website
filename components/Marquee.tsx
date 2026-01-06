
import React from 'react';

interface MarqueeProps {
  text: string;
}

const Marquee: React.FC<MarqueeProps> = ({ text }) => {
  return (
    <div className="bg-[#0A0F1D] text-[#C5A059] py-2.5 overflow-hidden whitespace-nowrap border-b border-white/5 relative z-[60]">
      <div className="flex animate-marquee">
        {/* We repeat the text to ensure a seamless loop */}
        <span className="text-[9px] font-bold uppercase tracking-[0.3em] px-4">
          {text} {text} {text} {text}
        </span>
        <span className="text-[9px] font-bold uppercase tracking-[0.3em] px-4">
          {text} {text} {text} {text}
        </span>
      </div>
    </div>
  );
};

export default Marquee;
