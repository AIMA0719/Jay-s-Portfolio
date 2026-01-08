import React from 'react';
import { Project } from '../types';
import { ChevronRight, Layers, ArrowRightCircle, CheckCircle2, AlertCircle } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const getBorderColor = (color?: string) => {
    switch (color) {
      case 'blue': return 'border-blue-500/30 hover:border-blue-500/60';
      case 'emerald': return 'border-emerald-500/30 hover:border-emerald-500/60';
      case 'indigo': return 'border-indigo-500/30 hover:border-indigo-500/60';
      case 'purple': return 'border-purple-500/30 hover:border-purple-500/60';
      case 'orange': return 'border-orange-500/30 hover:border-orange-500/60';
      default: return 'border-slate-700 hover:border-slate-600';
    }
  };

  const getBadgeColor = (color?: string) => {
    switch (color) {
      case 'blue': return 'bg-blue-500/10 text-blue-400';
      case 'emerald': return 'bg-emerald-500/10 text-emerald-400';
      case 'indigo': return 'bg-indigo-500/10 text-indigo-400';
      case 'purple': return 'bg-purple-500/10 text-purple-400';
      case 'orange': return 'bg-orange-500/10 text-orange-400';
      default: return 'bg-slate-800 text-slate-300';
    }
  };

  return (
    <div className={`group relative bg-slate-900 rounded-2xl border transition-all duration-300 ${getBorderColor(project.highlightColor)} overflow-hidden`}>
      <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
        <Layers size={120} />
      </div>

      <div className="p-6 md:p-8 relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className={`px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider ${getBadgeColor(project.highlightColor)}`}>
                {project.role}
              </span>
              <span className="text-slate-500 text-sm font-mono">{project.period}</span>
            </div>
            <h3 className="text-2xl font-bold text-slate-100 group-hover:text-white transition-colors">
              {project.title}
            </h3>
          </div>
        </div>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-8">
          {project.techStack.map((tech) => (
            <span key={tech} className="px-2.5 py-1 rounded-md bg-slate-800 border border-slate-700 text-slate-400 text-xs font-medium">
              {tech}
            </span>
          ))}
        </div>

        {/* STAR Content */}
        <div className="space-y-6">
          {/* Situation & Task */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-slate-950/50 p-4 rounded-xl border border-slate-800/50">
              <div className="flex items-center gap-2 mb-2 text-slate-400 font-semibold text-sm uppercase tracking-wide">
                <AlertCircle size={16} className="text-amber-500" />
                Situation (배경)
              </div>
              <p className="text-slate-300 text-sm leading-relaxed">
                {project.situation}
              </p>
            </div>
            <div className="bg-slate-950/50 p-4 rounded-xl border border-slate-800/50">
              <div className="flex items-center gap-2 mb-2 text-slate-400 font-semibold text-sm uppercase tracking-wide">
                <ArrowRightCircle size={16} className="text-blue-500" />
                Task (과제)
              </div>
              <p className="text-slate-300 text-sm leading-relaxed">
                {project.task}
              </p>
            </div>
          </div>

          {/* Action */}
          <div>
            <h4 className="text-slate-200 font-semibold mb-3 flex items-center gap-2">
              <ChevronRight size={18} className="text-blue-400" />
              Key Actions
            </h4>
            <ul className="space-y-2">
              {project.action.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-slate-400 text-sm pl-2">
                  <div className="min-w-[4px] h-[4px] rounded-full bg-slate-600 mt-2" />
                  <span dangerouslySetInnerHTML={{ __html: item.replace(/`([^`]+)`/g, '<code class="bg-slate-800 px-1 py-0.5 rounded text-blue-300 font-mono text-xs">$1</code>') }} />
                </li>
              ))}
            </ul>
          </div>

          {/* Result */}
          <div className="bg-gradient-to-r from-blue-950/20 to-transparent p-4 rounded-xl border-l-4 border-blue-500">
             <h4 className="text-blue-200 font-semibold mb-3 flex items-center gap-2">
              <CheckCircle2 size={18} />
              Results & Impact
            </h4>
            <ul className="space-y-2">
              {project.result.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-slate-300 text-sm">
                  <span className="text-blue-500 mt-0.5">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;