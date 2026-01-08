import React from 'react';
import { HERO_DATA } from '../constants';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-20 pb-16 md:pt-32 md:pb-24 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* Text Content */}
        <div className="space-y-8 flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            Open to Work
          </div>

          <div>
            <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight mb-4">
              {HERO_DATA.name}
            </h1>
          </div>

          <p className="text-slate-300 text-lg leading-relaxed max-w-2xl mx-auto">
            {HERO_DATA.summary}
          </p>
        </div>

      </div>
    </section>
  );
};

export default Hero;