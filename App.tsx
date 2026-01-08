import React from 'react';
import Hero from './components/Hero';
import ProjectCard from './components/ProjectCard';
import SkillsList from './components/SkillsList';
import { PROJECTS } from './constants';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 selection:bg-blue-500/30">
      
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

        {/* Projects Section */}
        <section id="projects" className="py-20 bg-slate-950">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Featured Projects</h2>
              <div className="w-20 h-1 bg-blue-600 rounded-full mb-6" />
              <p className="text-slate-400 max-w-2xl">
                실제 비즈니스 환경에서 마주한 기술적 난관과 이를 해결하기 위해 적용한 아키텍처 및 최적화 전략에 대한 상세 기록입니다.
              </p>
            </div>

            <div className="space-y-12">
              {PROJECTS.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="py-16 bg-slate-950 border-t border-slate-900">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Technical Skills</h2>
              <div className="w-12 h-1 bg-blue-600 rounded-full" />
            </div>
            <SkillsList />
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
    </div>
  );
};

export default App;