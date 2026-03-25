import React, { useState } from 'react';
import { Github, ExternalLink, Star, GitFork, Sparkles, Terminal, Bot, Zap, Globe } from 'lucide-react';

interface Project {
  id: string;
  title: string;
  description: string;
  category: 'AI/ML' | 'Web Dev' | 'Automation';
  tech: string[];
  github?: string;
  demo?: string;
  stars?: number;
  forks?: number;
}

const PROJECTS: Project[] = [
  {
    id: 'multi-agent-code-review',
    title: 'Multi-Agent Code Review',
    description:
      '4 specialized AI agents analyze code simultaneously in isolated database forks (Tiger Cloud), then merge findings into a comprehensive review — all in seconds. A genuinely novel parallel-agent architecture, not just a wrapper.',
    category: 'AI/ML',
    tech: ['Python', 'TigerData', 'Multi-Agent', 'Claude API', 'FastAPI'],
    github: 'https://github.com/SimranShaikh20/multi-agent-code-review',
    stars: 12,
    forks: 4,
  },
  {
    id: 'repomind-ai',
    title: 'RepoMind AI',
    description:
      'Eliminates the learning curve when jumping into unfamiliar GitHub repos. Combines Claude AI + GitHub API to transform hours of repository exploration into minutes via an actionable CLI interface.',
    category: 'AI/ML',
    tech: ['Python', 'Claude API', 'GitHub API', 'CLI', 'LangChain'],
    github: 'https://github.com/SimranShaikh20/RepoMindAI',
    stars: 15,
    forks: 5,
  },
  {
    id: 'mindmesh-ai',
    title: 'MindMesh AI',
    description:
      '6 specialized AI agents — Research, Pro/Con Advocacy, Bias Checking, Fact Verification, and Synthesis — work in parallel to deliver complete analysis in ~3–5 seconds vs 20+ seconds if run sequentially.',
    category: 'AI/ML',
    tech: ['Python', 'Multi-Agent', 'FastAPI', 'React', 'OpenAI'],
    github: 'https://github.com/SimranShaikh20/MindMesh-AI',
    demo: 'https://mindmesh-ai.vercel.app',
    stars: 10,
    forks: 3,
  },
  {
    id: 'devops-autopilot',
    title: 'DevOps Autopilot',
    description:
      'Reduces deployment commands by 95% and cuts deployment time from 2–3 hours to 2–3 minutes using natural language. Turn plain English into full CI/CD pipelines instantly.',
    category: 'Automation',
    tech: ['Python', 'Docker', 'GitHub Actions', 'LLM', 'Bash'],
    github: 'https://github.com/SimranShaikh20/DevOps-Autopilot',
    stars: 8,
    forks: 2,
  },
  {
    id: 'stylematch',
    title: 'StyleMatch',
    description:
      'Unlike typical fashion apps that just search products, StyleMatch identifies wardrobe items that work across multiple events — optimizing budget by finding high-value crossover pieces using AI.',
    category: 'AI/ML',
    tech: ['React', 'Python', 'Vision AI', 'TailwindCSS', 'FastAPI'],
    github: 'https://github.com/SimranShaikh20/StyleMatch',
    stars: 7,
    forks: 2,
  },
  {
    id: 'seo-insighthub',
    title: 'SEO InsightHub',
    description:
      'Delivers comprehensive audits, competitive analysis, and prioritized action plans with measurable outcomes — increasing organic traffic by 25–40% through AI-powered recommendations.',
    category: 'Web Dev',
    tech: ['Next.js', 'Python', 'OpenAI', 'Scrapy', 'PostgreSQL'],
    github: 'https://github.com/SimranShaikh20/SEO-InsightHub',
    stars: 9,
    forks: 3,
  },
];

const Projects: React.FC = () => {
  const [filter, setFilter] = useState<'All' | 'AI/ML' | 'Web Dev' | 'Automation'>('All');

  const filteredProjects =
    filter === 'All' ? PROJECTS : PROJECTS.filter((p) => p.category === filter);

  const getGradient = (category: string) => {
    switch (category) {
      case 'AI/ML':     return 'from-purple-600/20 via-indigo-600/10 to-transparent';
      case 'Web Dev':   return 'from-blue-600/20 via-cyan-600/10 to-transparent';
      case 'Automation':return 'from-amber-600/20 via-orange-600/10 to-transparent';
      default:          return 'from-gray-600/20 via-slate-600/10 to-transparent';
    }
  };

  const getIcon = (category: string) => {
    switch (category) {
      case 'AI/ML':     return <Bot className="w-8 h-8 text-purple-400/50" />;
      case 'Web Dev':   return <Globe className="w-8 h-8 text-blue-400/50" />;
      case 'Automation':return <Zap className="w-8 h-8 text-amber-400/50" />;
      default:          return <Terminal className="w-8 h-8 text-gray-400/50" />;
    }
  };

  const getBorderColor = (category: string) => {
    switch (category) {
      case 'AI/ML':     return 'border-purple-500/20 group-hover:border-purple-500/50';
      case 'Web Dev':   return 'border-blue-500/20 group-hover:border-blue-500/50';
      case 'Automation':return 'border-amber-500/20 group-hover:border-amber-500/50';
      default:          return 'border-gray-500/20 group-hover:border-gray-500/50';
    }
  };

  const getCategoryBadgeColor = (category: string) => {
    switch (category) {
      case 'AI/ML':     return 'bg-purple-600/30 border-purple-500/30 text-purple-200';
      case 'Web Dev':   return 'bg-blue-600/30 border-blue-500/30 text-blue-200';
      case 'Automation':return 'bg-amber-600/30 border-amber-500/30 text-amber-200';
      default:          return 'bg-gray-600/30 border-gray-500/30 text-gray-200';
    }
  };

  return (
    <section id="projects" className="py-24 px-6 bg-black/30">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-8">
          <div className="space-y-4">
            <h2 className="text-sm font-bold tracking-[0.3em] text-purple-500 uppercase text-center md:text-left">
              Work Showcase
            </h2>
            <h3 className="text-4xl md:text-5xl font-extrabold text-center md:text-left">
              Featured <span className="gradient-text">Innovations</span>
            </h3>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap gap-2 justify-center">
            {(['All', 'AI/ML', 'Web Dev', 'Automation'] as const).map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
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

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className={`glass-card flex flex-col group h-full border transition-all duration-500 ${getBorderColor(project.category)}`}
            >
              {/* Card Header */}
              <div
                className={`relative h-56 overflow-hidden rounded-t-xl bg-gradient-to-br ${getGradient(project.category)} p-8 flex flex-col justify-end`}
              >
                {/* Category Badge */}
                <div className="absolute top-6 right-6">
                  <span
                    className={`px-3 py-1 backdrop-blur-md rounded-full text-[10px] font-black uppercase tracking-widest border shadow-xl ${getCategoryBadgeColor(project.category)}`}
                  >
                    {project.category}
                  </span>
                </div>

                {/* Background Icon */}
                <div className="absolute top-8 left-8 opacity-20 group-hover:opacity-40 transition-opacity duration-700">
                  {getIcon(project.category)}
                </div>

                {/* Title */}
                <h4 className="text-2xl md:text-3xl font-black text-white leading-tight drop-shadow-lg z-10 transition-transform duration-500 group-hover:-translate-y-1">
                  {project.title}
                </h4>

                {/* Trending Badge — shown when stars >= 10 */}
                {project.stars !== undefined && project.stars >= 10 && (
                  <div className="absolute top-6 left-6 flex items-center gap-1.5 px-2.5 py-1 bg-yellow-500/20 border border-yellow-500/30 rounded-full text-[9px] font-black uppercase tracking-tighter text-yellow-500 shadow-lg">
                    <Sparkles className="w-3 h-3" /> Trending
                  </div>
                )}
              </div>

              {/* Card Body */}
              <div className="p-8 flex-1 flex flex-col bg-black/20">
                <p className="text-gray-400 text-sm leading-relaxed mb-8 flex-1">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-[10px] px-2.5 py-1 bg-white/5 rounded-md text-gray-500 border border-white/5 font-bold tracking-wide uppercase"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Footer — Stars, Forks, Links */}
                <div className="flex items-center justify-between border-t border-white/5 pt-6">
                  <div className="flex items-center gap-5">
                    {project.stars !== undefined && (
                      <div className="flex items-center gap-1.5 text-gray-500 text-xs font-medium">
                        <Star className="w-3.5 h-3.5 text-yellow-500/70" />
                        {project.stars}
                      </div>
                    )}
                    {project.forks !== undefined && (
                      <div className="flex items-center gap-1.5 text-gray-500 text-xs font-medium">
                        <GitFork className="w-3.5 h-3.5 text-purple-500/70" />
                        {project.forks}
                      </div>
                    )}
                  </div>

                  <div className="flex items-center gap-4">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="text-gray-500 hover:text-white transition-all transform hover:scale-110"
                        title="View Source"
                      >
                        <Github className="w-5 h-5" />
                      </a>
                    )}
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noreferrer"
                        className="text-gray-500 hover:text-white transition-all transform hover:scale-110"
                        title="Live Demo"
                      >
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
