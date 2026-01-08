import React from 'react';
import { SKILL_CATEGORIES } from '../constants';

const SkillsList: React.FC = () => {
  return (
    <div className="space-y-4">
      {SKILL_CATEGORIES.map((section, idx) => (
        <div key={idx} className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-8 border-b border-slate-800/50 pb-4 last:border-0 last:pb-0">
          <h3 className="text-lg font-bold text-slate-200 min-w-[200px] shrink-0">
            {section.category}
          </h3>
          <p className="text-slate-400 leading-relaxed font-mono text-sm md:text-base">
            {section.skills.join(', ')}
          </p>
        </div>
      ))}
    </div>
  );
};

export default SkillsList;