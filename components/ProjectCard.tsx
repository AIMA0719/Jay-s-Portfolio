import React from 'react';
import { Project } from '../types';
import { ChevronRight, CheckCircle2, AlertCircle, ArrowRightCircle, Smartphone, Layers } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  // Function to parse bold markdown (**text**)
  const parseMarkdown = (text: string) => {
    return text.replace(/\*\*(.*?)\*\*/g, '<span class="text-blue-200 font-semibold">$1</span>')
               .replace(/`([^`]+)`/g, '<code class="bg-slate-800 px-1 py-0.5 rounded text-blue-300 font-mono text-xs">$1</code>');
  };

  return (
    <div className="animate-fadeIn w-full">
      {/* 1. Header Section */}
      <div className="mb-12 border-b border-slate-800 pb-8">
        <div className="flex flex-col gap-3 mb-4">
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
            {project.title}
          </h2>
          <div className="text-slate-400 font-mono text-lg text-left">
            {project.period}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
        {/* LEFT COLUMN: Context & Action (5/12) */}
        <div className="lg:col-span-5 space-y-10">
          
          {/* Context (Situation & Task) */}
          <div className="space-y-6">
            <div>
              <div className="flex items-center gap-2 mb-3 text-white font-semibold text-lg">
                <AlertCircle size={20} className="text-amber-500" />
                담당 업무 및 배경
              </div>
              <p className="text-slate-300 leading-relaxed text-base bg-slate-900/50 p-5 rounded-xl border border-slate-800">
                {project.situation}
              </p>
            </div>
            
            <div>
               <div className="flex items-center gap-2 mb-3 text-white font-semibold text-lg">
                <ArrowRightCircle size={20} className="text-blue-500" />
                주요 과제
              </div>
              <p className="text-slate-300 leading-relaxed text-base bg-slate-900/50 p-5 rounded-xl border border-slate-800">
                {project.task}
              </p>
            </div>
          </div>

          {/* Action (Architecture & Solutions) - Moved to Left Column for balance */}
          <div>
            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
              <ChevronRight className="text-blue-500" />
              주요 구현 내용
            </h3>
            <div className="space-y-4">
              {project.action.map((item, idx) => (
                <div key={idx} className="flex gap-4 p-4 rounded-xl bg-slate-900/30 border border-slate-800/50 hover:bg-slate-900/60 transition-colors">
                  <div className="mt-1 min-w-[24px] h-[24px] rounded-full bg-slate-800 flex items-center justify-center text-xs font-bold text-slate-400 border border-slate-700">
                    {idx + 1}
                  </div>
                  <p className="text-slate-300 leading-relaxed text-sm" dangerouslySetInnerHTML={{ __html: parseMarkdown(item) }} />
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* RIGHT COLUMN: Visuals & Results (7/12) */}
        <div className="lg:col-span-7 space-y-10">
          
          {/* SCREENSHOT PLACEHOLDER */}
          <div className="w-full aspect-video bg-slate-900 rounded-xl border-2 border-dashed border-slate-700 flex flex-col items-center justify-center group hover:border-blue-500/50 transition-colors relative overflow-hidden">
             <div className="absolute inset-0 bg-gradient-to-br from-slate-800/20 to-slate-950/20" />
             <Smartphone size={48} className="text-slate-600 mb-4 group-hover:text-blue-500 transition-colors" />
             <p className="text-slate-500 text-sm font-medium">Real Screen Capture</p>
             <p className="text-slate-600 text-xs mt-1">Coming Soon</p>
          </div>

          {/* Results */}
          <div>
             <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              <CheckCircle2 className="text-emerald-500" />
              성과 및 개선점
            </h3>
            <div className="bg-gradient-to-r from-emerald-950/20 to-transparent p-6 rounded-xl border-l-4 border-emerald-500/50">
              <ul className="space-y-3">
                {project.result.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-slate-200">
                    <span className="text-emerald-500 font-bold mt-1">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>
      </div>

      {/* BOTTOM SECTION: Detailed Tech Stack Table */}
      <div className="pt-10 border-t border-slate-800">
        <div className="flex items-center gap-2 mb-6">
          <Layers size={24} className="text-blue-500" />
          <h3 className="text-xl font-bold text-white">Tech Stack</h3>
        </div>
        
        <div className="bg-slate-900/50 rounded-xl border border-slate-800 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left min-w-[600px]">
              <tbody className="divide-y divide-slate-800/50">
                {project.detailedTechStack.map((item, idx) => (
                  <tr key={idx} className="hover:bg-slate-800/30 transition-colors">
                    <td className="px-6 py-4 font-semibold text-slate-400 w-[180px] border-r border-slate-800/50 bg-slate-900/80 whitespace-nowrap">
                      {item.category}
                    </td>
                    <td className="px-6 py-4 text-slate-200">
                      {item.skills.join(', ')}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

    </div>
  );
};

export default ProjectCard;