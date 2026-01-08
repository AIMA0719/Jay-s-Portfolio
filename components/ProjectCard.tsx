import React from 'react';
import { Project } from '../types';
import { Layers, Calendar, Users, Target, Info, CheckSquare, Code2, ArrowDown, Lightbulb } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
}

// Diagram Step Interface for JSON parsing
interface DiagramStep {
  box: string;
  desc: string;
  type: 'default' | 'error' | 'source' | 'process' | 'solution';
}

const DiagramRenderer: React.FC<{ content: string }> = ({ content }) => {
  let steps: DiagramStep[] = [];
  try {
    steps = JSON.parse(content);
  } catch (e) {
    return <pre className="text-red-400">Error parsing diagram</pre>;
  }

  return (
    <div className="flex flex-col items-center w-full max-w-2xl mx-auto py-8">
      {steps.map((step, idx) => {
        // Dynamic styling based on step type
        let borderClass = "border-slate-600";
        let bgClass = "bg-slate-800";
        let textClass = "text-slate-200";

        if (step.type === 'error') {
          borderClass = "border-red-500/50";
          bgClass = "bg-red-950/30";
          textClass = "text-red-200";
        } else if (step.type === 'solution') {
          borderClass = "border-emerald-500/50";
          bgClass = "bg-emerald-950/30";
          textClass = "text-emerald-200";
        } else if (step.type === 'process') {
          borderClass = "border-blue-500/50";
          bgClass = "bg-blue-950/30";
          textClass = "text-blue-200";
        } else if (step.type === 'source') {
          borderClass = "border-orange-500/50";
          bgClass = "bg-orange-950/30";
          textClass = "text-orange-200";
        }

        return (
          <React.Fragment key={idx}>
            {/* Render Arrow if not the first item */}
            {idx > 0 && (
              <div className="h-10 w-0.5 bg-slate-700 my-1 relative">
                <ArrowDown 
                  className="absolute -bottom-3 -left-3 text-slate-500 bg-slate-950 rounded-full" 
                  size={24} 
                />
              </div>
            )}

            {/* Render Box */}
            <div className={`
              w-full p-6 rounded-xl border-2 shadow-xl backdrop-blur-sm z-10 transition-transform hover:scale-[1.02]
              ${borderClass} ${bgClass}
            `}>
              <div className="flex items-center justify-between mb-3 border-b border-white/10 pb-2">
                <span className={`font-bold text-lg tracking-wide ${textClass} brightness-110`}>
                  {step.box}
                </span>
              </div>
              <div className="text-slate-300 whitespace-pre-line leading-relaxed text-base font-medium">
                {step.desc}
              </div>
            </div>
          </React.Fragment>
        );
      })}
    </div>
  );
};

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="animate-fadeIn w-full space-y-16">
      
      {/* 1. Project Title */}
      <div className="border-b border-slate-800 pb-8">
        <h2 className="text-4xl md:text-7xl font-bold text-white tracking-tight mb-4">
          {project.title}
        </h2>
      </div>

      {/* 2. Overview (개요) */}
      <div className="space-y-6">
        <div className="flex items-center gap-3 text-blue-400 font-bold text-2xl">
          <Info size={28} />
          <h3>개요</h3>
        </div>
        <p className="text-slate-200 text-xl leading-loose">
          {project.overview}
        </p>
      </div>

      {/* 3. Work Environment (작업 환경) */}
      <div className="bg-slate-900/40 rounded-2xl border border-slate-800 p-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-slate-400 font-semibold text-sm uppercase tracking-wider">
              <Users size={20} />
              <span>담당 인원 구성</span>
            </div>
            <div className="text-white font-medium text-xl">
              {project.team}
            </div>
          </div>
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-slate-400 font-semibold text-sm uppercase tracking-wider">
              <Target size={20} />
              <span>담당 범위</span>
            </div>
            <div className="text-white font-medium text-xl">
              {project.scope}
            </div>
          </div>
           <div className="space-y-4">
            <div className="flex items-center gap-2 text-slate-400 font-semibold text-sm uppercase tracking-wider">
              <Calendar size={20} />
              <span>기간</span>
            </div>
            <div className="text-white font-medium text-xl">
              {project.period}
            </div>
          </div>
        </div>
      </div>

      {/* 4. Key Tasks & Details (주요 업무 및 상세 내용) */}
      <div className="space-y-8">
        <div className="flex items-center gap-3 text-emerald-400 font-bold text-2xl">
          <CheckSquare size={28} />
          <h3>주요 업무 및 상세 내용</h3>
        </div>
        
        <div className="bg-slate-900/50 rounded-2xl border border-slate-800 overflow-hidden">
          <div className="grid grid-cols-1">
             {/* Table Header (Hidden on mobile) */}
            <div className="hidden md:grid md:grid-cols-[280px_1fr] border-b border-slate-800 bg-slate-900/80 text-slate-300 font-semibold text-lg">
              <div className="px-10 py-6 border-r border-slate-800">업무</div>
              <div className="px-10 py-6">상세 내용</div>
            </div>

            {/* Table Body */}
            <div className="divide-y divide-slate-800/50">
              {project.keyFeatures.map((feature, idx) => (
                <div key={idx} className="flex flex-col md:grid md:grid-cols-[280px_1fr] hover:bg-slate-800/20 transition-colors">
                  <div className="px-10 py-6 font-bold text-slate-100 border-b md:border-b-0 md:border-r border-slate-800/50 bg-slate-900/40 md:bg-transparent text-xl leading-relaxed">
                    {feature.title}
                  </div>
                  <div className="px-10 py-6 text-slate-200 leading-loose text-lg">
                    {feature.desc}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* 5. Technical Deep Dive (Optional) */}
      {project.technicalDetails && project.technicalDetails.length > 0 && (
        <div className="space-y-10">
           <div className="flex items-center gap-3 text-orange-400 font-bold text-2xl">
            <Code2 size={28} />
            <h3>기술적 심층 분석</h3>
          </div>
          
          <div className="space-y-12">
            {project.technicalDetails.map((detail, idx) => (
              <div key={idx} className="space-y-6">
                
                <h4 className="text-2xl font-semibold text-white pl-6 border-l-4 border-orange-500">
                  {detail.title}
                </h4>
                
                {detail.type === 'text' && (
                  <div className="space-y-4 p-2">
                    {detail.content.split(':::').map((part, i) => {
                      if (part.trim().startsWith('핵심 개념')) {
                        return (
                          <div key={i} className="bg-indigo-900/30 border-l-4 border-indigo-500 p-6 rounded-r-xl my-6 shadow-md">
                            <div className="flex gap-4 items-start">
                              <div className="bg-indigo-500/20 p-2 rounded-lg text-indigo-300 shrink-0">
                                <Lightbulb size={24} />
                              </div>
                              <p className="text-indigo-100 font-medium leading-relaxed text-xl">
                                {part.trim()}
                              </p>
                            </div>
                          </div>
                        );
                      }
                      if (!part.trim()) return null;
                      return (
                        <p key={i} className="text-slate-200 leading-loose text-xl whitespace-pre-wrap">
                          {part.trim()}
                        </p>
                      );
                    })}
                  </div>
                )}
                
                {detail.type === 'code' && (
                  <div className="bg-slate-950 rounded-xl border border-slate-800 p-8 overflow-x-auto shadow-inner">
                    <pre className="font-mono text-lg text-blue-300 whitespace-pre leading-relaxed">
                      {detail.content}
                    </pre>
                  </div>
                )}

                {/* Diagram Renderer */}
                {detail.type === 'diagram' && (
                  <div className="bg-slate-950 rounded-xl border border-slate-800 p-8 shadow-lg">
                     <DiagramRenderer content={detail.content} />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 6. Tech Stack (사용 기술 스택) */}
      <div className="pt-10 border-t border-slate-800">
        <div className="flex items-center gap-3 mb-10 text-purple-400 font-bold text-2xl">
          <Layers size={28} />
          <h3>사용 기술 스택</h3>
        </div>
        
        <div className="bg-slate-900/50 rounded-2xl border border-slate-800 overflow-hidden">
          <table className="w-full text-lg text-left">
            <tbody className="divide-y divide-slate-800/50">
              {project.detailedTechStack.map((item, idx) => (
                <tr key={idx} className="hover:bg-slate-800/30 transition-colors">
                  <td className="px-10 py-6 font-semibold text-slate-300 w-[200px] md:w-[280px] border-r border-slate-800/50 bg-slate-900/80 whitespace-nowrap align-top">
                    {item.category}
                  </td>
                  <td className="px-10 py-6 text-slate-100 align-top leading-loose">
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