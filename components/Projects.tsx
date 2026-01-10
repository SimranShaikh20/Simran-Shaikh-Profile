
import React, { useState } from 'react';
import { PROJECTS } from '../constants';
import { Github, ExternalLink, Star, GitFork, Sparkles, Terminal, Bot, Zap, Globe } from 'lucide-react';

const Projects: React.FC = () => {
  const [filter, setFilter] = useState<'All' | 'AI/ML' | 'Web Dev' | 'Automation'>('All');
  
  const filteredProjects = filter === 'All' 
    ? PROJECTS 
    : PROJECTS.filter(p => p.category === filter);

  const getGradient = (category: string) => {
    switch (category) {
      case 'AI/ML': return 'from-purple-600/20 via-indigo-600/10 to-transparent';
      case 'Web Dev': return 'from-blue-600/20 via-cyan-600/10 to-transparent';
      case 'Automation': return 'from-amber-600/20 via-orange-600/10 to-transparent';
      default: return 'from-gray-600/20 via-slate-600/10 to-transparent';
    }
  };

  const getIcon = (category: string) => {
    switch (category) {
      case 'AI/ML': return <Bot className="w-8 h-8 text-purple-400/50" />;
      case 'Web Dev': return <Globe className="w-8 h-8 text-blue-400/50" />;
      case 'Automation': return <Zap className="w-8 h-8 text-amber-400/50" />;
      default: return <Terminal className="w-8 h-8 text-gray-400/50" />;
    }
  };

  const getBorderColor = (category: string) => {
    switch (category) {
      case 'AI/ML': return 'border-purple-500/20 group-hover:border-purple-500/50';
      case 'Web Dev': return 'border-blue-500/20 group-hover:border-blue-500/50';
      case 'Automation': return 'border-amber-500/20 group-hover:border-amber-500/50';
      default: return 'border-gray-500/20 group-hover:border-gray-500/50';
    }
  };

  return (
    <section id="projects" className="py-24 px-6 bg-black/30">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-8">
          <div className="space-y-4">
            <h2 className="text-sm font-bold tracking-[0.3em] text-purple-500 uppercase text-center md:text-left">Work Showcase</h2>
            <h3 className="text-4xl md:text-5xl font-extrabold text-center md:text-left">Featured <span className="gradient-text">Innovations</span></h3>
          </div>
          
          <div className="flex flex-wrap gap-2 justify-center">
            {['All', 'AI/ML', 'Web Dev', 'Automation'].map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat as any)}
                className={`px-6 py-2 rounded-full text-sm font-bold border transition-all ${
                  filter === cat 
                  ? 'bg-purple-600 border-purple-500 text-white shadow-lg shadow-purple-900/30' 
                  : 'border-white/10 text-gray-400 hover:border-purple-500/50 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div 
              key={project.id} 
              className={`glass-card flex flex-col group h-full border transition-all duration-500 ${getBorderColor(project.category)}`}
            >
              {/* Header Gradient Area */}
              <div className={`relative h-56 overflow-hidden rounded-t-xl bg-gradient-to-br ${getGradient(project.category)} p-8 flex flex-col justify-end`}>
                <div className="absolute top-6 right-6">
                  <span className={`px-3 py-1 backdrop-blur-md rounded-full text-[10px] font-black uppercase tracking-widest border shadow-xl ${
                    project.category === 'AI/ML' ? 'bg-purple-600/30 border-purple-500/30 text-purple-200' :
                    project.category === 'Web Dev' ? 'bg-blue-600/30 border-blue-500/30 text-blue-200' :
                    'bg-amber-600/30 border-amber-500/30 text-amber-200'
                  }`}>
                    {project.category}
                  </span>
                </div>
                
                <div className="absolute top-8 left-8 opacity-20 group-hover:opacity-40 transition-opacity duration-700">
                  {getIcon(project.category)}
                </div>

                <h4 className="text-2xl md:text-3xl font-black text-white leading-tight drop-shadow-lg z-10 transition-transform duration-500 group-hover:-translate-y-1">
                  {project.title}
                </h4>

                {project.stars && project.stars >= 10 && (
                  <div className="absolute top-6 left-6 flex items-center gap-1.5 px-2.5 py-1 bg-yellow-500/20 border border-yellow-500/30 rounded-full text-[9px] font-black uppercase tracking-tighter text-yellow-500 shadow-lg">
                    <Sparkles className="w-3 h-3" /> Trending
                  </div>
                )}
              </div>

              {/* Content Area */}
              <div className="p-8 flex-1 flex flex-col bg-black/20">
                <p className="text-gray-400 text-sm leading-relaxed mb-8 flex-1">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tech.map((t) => (
                    <span key={t} className="text-[10px] px-2.5 py-1 bg-white/5 rounded-md text-gray-500 border border-white/5 font-bold tracking-wide uppercase">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between border-t border-white/5 pt-6">
                  <div className="flex items-center gap-5">
                    {project.stars !== undefined && (
                      <div className="flex items-center gap-1.5 text-gray-500 text-xs font-medium">
                        <Star className="w-3.5 h-3.5 text-yellow-500/70" /> {project.stars}
                      </div>
                    )}
                    {project.forks !== undefined && (
                      <div className="flex items-center gap-1.5 text-gray-500 text-xs font-medium">
                        <GitFork className="w-3.5 h-3.5 text-purple-500/70" /> {project.forks}
                      </div>
                    )}
                  </div>
                  <div className="flex items-center gap-4">
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noreferrer" className="text-gray-500 hover:text-white transition-all transform hover:scale-110" title="View Source">
                        <Github className="w-5 h-5" />
                      </a>
                    )}
                    {project.demo && (
                      <a href={project.demo} target="_blank" rel="noreferrer" className="text-gray-500 hover:text-white transition-all transform hover:scale-110" title="Live Demo">
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
