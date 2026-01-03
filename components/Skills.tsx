
import React from 'react';
import { SKILL_CATEGORIES } from '../constants';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-sm font-bold tracking-[0.3em] text-purple-500 uppercase">My Tech Arsenal</h2>
          <h3 className="text-4xl md:text-5xl font-extrabold">Advanced <span className="gradient-text">Skills</span></h3>
          <p className="text-gray-400 max-w-2xl mx-auto">Exploring the frontier of AI, full-stack engineering, and automated intelligence systems.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SKILL_CATEGORIES.map((category) => (
            <div key={category.name} className="glass-card p-8 group">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-purple-600/10 rounded-xl group-hover:bg-purple-600/20 transition-colors">
                  {category.icon}
                </div>
                <h4 className="text-xl font-bold text-white">{category.name}</h4>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span 
                    key={skill} 
                    className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-lg text-xs font-medium text-gray-300 group-hover:border-purple-500/30 transition-all"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
