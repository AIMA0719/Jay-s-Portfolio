import React from 'react';
import { HERO_DATA } from '../constants';
import StatsChart from './StatsChart';
import { Terminal, Download } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-20 pb-16 md:pt-32 md:pb-24 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left: Text Content */}
          <div className="space-y-8">
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
              <h2 className="text-xl md:text-2xl text-slate-400 font-light">
                {HERO_DATA.title}
              </h2>
            </div>

            <p className="text-slate-300 text-lg leading-relaxed max-w-xl">
              {HERO_DATA.summary}
            </p>

            <div className="flex flex-wrap gap-4">
              <button className="flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors">
                <Terminal size={18} />
                View Projects
              </button>
              <button className="flex items-center gap-2 px-6 py-3 bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 rounded-lg font-medium transition-colors">
                <Download size={18} />
                Download Resume
              </button>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-slate-800">
              {HERO_DATA.stats.map((stat, idx) => (
                <div key={idx}>
                  <div className="text-2xl md:text-3xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-xs text-slate-500 uppercase tracking-wider">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Chart & Visuals */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-purple-500/20 rounded-3xl blur-2xl" />
            <div className="relative bg-slate-900/80 backdrop-blur-xl border border-slate-800 rounded-3xl p-6 md:p-8">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-slate-200">Core Competencies</h3>
                <div className="flex gap-2">
                  <span className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50" />
                  <span className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50" />
                  <span className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50" />
                </div>
              </div>
              <StatsChart />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;