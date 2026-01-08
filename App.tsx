import React, { useState, useEffect } from 'react';
import Hero from './components/Hero';
import ProjectCard from './components/ProjectCard';
import { PROJECTS } from './constants';
import { ArrowUp } from 'lucide-react';

const App: React.FC = () => {
  const [activeProjectIndex, setActiveProjectIndex] = useState(0);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 selection:bg-blue-500/30 relative">
      
      {/* Navigation (Simple) */}
      <nav className="fixed top-0 w-full z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="font-bold text-xl tracking-tighter text-white">
            DEV<span className="text-blue-500">.PORTFOLIO</span>
          </div>
        </div>
      </nav>

      <main>
        <Hero />

        {/* Project Navigation Indicators */}
        <section id="projects" className="py-10 bg-slate-950">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center justify-center gap-6">
              <h2 className="text-sm font-semibold text-slate-500 uppercase tracking-widest">Select Project</h2>
              
              <div className="flex flex-wrap justify-center items-center gap-4">
                {PROJECTS.map((project, idx) => {
                  const isActive = idx === activeProjectIndex;
                  return (
                    <button
                      key={project.id}
                      onClick={() => setActiveProjectIndex(idx)}
                      className={`
                        relative group flex items-center justify-center rounded-full font-mono transition-all duration-300
                        ${isActive 
                          ? 'w-16 h-16 bg-blue-600 text-white text-xl font-bold shadow-lg shadow-blue-900/50 scale-110' 
                          : 'w-10 h-10 bg-slate-800 text-slate-500 hover:bg-slate-700 hover:text-slate-300'}
                      `}
                    >
                      {idx + 1}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Selected Project Detail View */}
        <section className="py-12 bg-slate-950 min-h-[800px]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ProjectCard 
              key={activeProjectIndex} // Key change triggers animation
              project={PROJECTS[activeProjectIndex]} 
            />
          </div>
        </section>

        {/* Contact/Footer */}
        <section className="py-20 border-t border-slate-900 bg-slate-950">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-2xl font-bold text-white">감사합니다.</h2>
            <div className="mt-16 text-slate-600 text-sm">
              © {new Date().getFullYear()} Android Developer Portfolio. All rights reserved.
            </div>
          </div>
        </section>
      </main>

      {/* Scroll To Top Button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 z-50 p-4 rounded-full bg-blue-600 text-white shadow-lg shadow-blue-900/50 hover:bg-blue-500 hover:scale-110 transition-all duration-300 ${
          showScrollTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
        }`}
        aria-label="Scroll to top"
      >
        <ArrowUp size={24} strokeWidth={2.5} />
      </button>
    </div>
  );
};

export default App;