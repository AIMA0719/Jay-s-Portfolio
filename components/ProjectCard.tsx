import React from 'react';
import { Project } from '../types';
import { Layers, Calendar, Users, Target, Info, CheckSquare } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="animate-fadeIn w-full space-y-12">
      
      {/* 1. Project Title */}
      <div className="border-b border-slate-800 pb-8">
        <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-2">
          {project.title}
        </h2>
      </div>

      {/* 2. Overview (개요) */}
      <div className="space-y-4">
        <div className="flex items-center gap-2 text-blue-400 font-bold text-lg">
          <Info size={20} />
          <h3>개요</h3>
        </div>
        <p className="text-slate-300 text-lg leading-relaxed">
          {project.overview}
        </p>
      </div>

      {/* 3. Work Environment (작업 환경) */}
      <div className="bg-slate-900/40 rounded-xl border border-slate-800 p-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-slate-400 font-semibold text-sm uppercase tracking-wide">
              <Users size={16} />
              <span>담당 인원 구성</span>
            </div>
            <div className="text-white font-medium">
              {project.team}
            </div>
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-slate-400 font-semibold text-sm uppercase tracking-wide">
              <Target size={16} />
              <span>담당 범위</span>
            </div>
            <div className="text-white font-medium">
              {project.scope}
            </div>
          </div>
           <div className="space-y-2">
            <div className="flex items-center gap-2 text-slate-400 font-semibold text-sm uppercase tracking-wide">
              <Calendar size={16} />
              <span>기간</span>
            </div>
            <div className="text-white font-medium">
              {project.period}
            </div>
          </div>
        </div>
      </div>

      {/* 4. Key Tasks & Details (주요 업무 및 상세 내용) - Table Style */}
      <div className="space-y-6">
        <div className="flex items-center gap-2 text-emerald-400 font-bold text-lg">
          <CheckSquare size={20} />
          <h3>주요 업무 및 상세 내용</h3>
        </div>
        
        <div className="bg-slate-900/50 rounded-xl border border-slate-800 overflow-hidden">
          <div className="grid grid-cols-1">
             {/* Table Header (Hidden on mobile, visible on desktop) */}
            <div className="hidden md:grid md:grid-cols-[200px_1fr] border-b border-slate-800 bg-slate-900/80 text-slate-400 font-semibold text-sm">
              <div className="px-6 py-4 border-r border-slate-800">업무</div>
              <div className="px-6 py-4">상세 내용</div>
            </div>

            {/* Table Body */}
            <div className="divide-y divide-slate-800/50">
              {project.keyFeatures.map((feature, idx) => (
                <div key={idx} className="flex flex-col md:grid md:grid-cols-[200px_1fr] hover:bg-slate-800/20 transition-colors">
                  <div className="px-6 py-3 md:py-4 font-bold text-slate-200 border-b md:border-b-0 md:border-r border-slate-800/50 bg-slate-900/40 md:bg-transparent">
                    {feature.title}
                  </div>
                  <div className="px-6 py-3 md:py-4 text-slate-300 leading-relaxed text-sm md:text-base">
                    {feature.desc}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* 5. Tech Stack (사용 기술 스택) */}
      <div className="pt-6 border-t border-slate-800">
        <div className="flex items-center gap-2 mb-6 text-purple-400 font-bold text-lg">
          <Layers size={20} />
          <h3>사용 기술 스택</h3>
        </div>
        
        <div className="bg-slate-900/50 rounded-xl border border-slate-800 overflow-hidden">
          <table className="w-full text-sm text-left">
            <tbody className="divide-y divide-slate-800/50">
              {project.detailedTechStack.map((item, idx) => (
                <tr key={idx} className="hover:bg-slate-800/30 transition-colors">
                  <td className="px-6 py-4 font-semibold text-slate-400 w-[160px] md:w-[200px] border-r border-slate-800/50 bg-slate-900/80 whitespace-nowrap align-top">
                    {item.category}
                  </td>
                  <td className="px-6 py-4 text-slate-200 align-top leading-relaxed">
                    {item.skills.join(', ')}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
};

export default ProjectCard;